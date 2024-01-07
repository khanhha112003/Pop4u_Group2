import React, { useState, useEffect } from 'react';
import "react-bootstrap";
import { ReactComponent as ArrowUp } from './images/arrow_outward.svg';
import { Link, useNavigate } from 'react-router-dom';

import "./SignIn.css";
import { loginPostRequest, } from '../../app_logic/APIHandler';
import { saveToken } from '../../app_logic/Authenticate';
import { CustomInputBox } from '../../components/CustomInputBox/CustomInputBox';
import UsernameIcon from './images/icon_account.svg';
import PasswordIcon from './images/password.svg';
import { useAuth } from '../../AuthProvider';

function SignIn() {
    const [userLoginContent, setUserLoginContent] = useState({});//[username, password] = userLoginContent;
    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();

    useEffect(() => {
        if (auth) {
            navigate('/');
        }
    }, [auth]);


    const handleLogin = (e) => {
        e.preventDefault();
        if (userLoginContent.username === undefined || userLoginContent.username === '') {
            setLoginErrorMessage('Vui lòng nhập thông tin đăng nhập.');
            return;
        } else if (userLoginContent.password === undefined || userLoginContent.password === '') {
            setLoginErrorMessage('Vui lòng nhập thông tin đăng nhập.');
            return;
        }
        loginPostRequest('/auth/login', userLoginContent.username, userLoginContent.password)
            .then((response) => {
                if (response.data.status === 1) {
                    setLoginErrorMessage('');
                    saveToken(response.data);
                    setAuth(true)
                    console.log(response.data);
                    navigate('/');
                } else {
                    setLoginErrorMessage(response.data.message);
                }
            }
            ).catch((error) => {
                setLoginErrorMessage(error.message);
            });
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12'>
                        <div className='sign-in-title'>
                            <h5 className='head5'> Đăng nhập vào Pop4u</h5>
                            <p className='body-small'>Bạn chỉ có thể mua hàng khi có tài khoản tại Pop4u.</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleLogin}>
                    <CustomInputBox
                        data={{
                            regex: {
                                checker: /^[a-zA-Z0-9]{7,}$/,
                                message: 'Tên đăng nhập của bạn chưa hợp lệ.'
                            },
                            placeholder: 'Tên đăng nhập',
                            isRequired: true,
                            icon: UsernameIcon
                        }}
                        onSuccess={(value) => { setUserLoginContent({ ...userLoginContent, username: value }) }}
                        checkErrorMessage={(value) => {
                            if (value === '') {
                                return 'Xin vui lòng nhập tên đăng nhập';
                            }
                            return '';
                        }}
                    />
                    <CustomInputBox
                        data={{
                            placeholder: "Mật khẩu",
                            isRequired: true,
                            type: 'password',
                            icon: PasswordIcon
                        }}
                        onSuccess={(value) => { setUserLoginContent({ ...userLoginContent, password: value }) }}
                        checkErrorMessage={(value) => {
                            if (value === '') {
                                return 'Xin vui lòng nhập mật khẩu';
                            }
                            return '';
                        }}
                    />
                    <div className='row'>
                        <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto text-center'>
                            <p className="error-message body-small">{loginErrorMessage}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto text-center'>
                            <button className='sign-in-button label-xl' type="submit">Đăng nhập</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xs-12 mx-auto text-center'>
                            <div className='sign-in-support'>
                                <p className='label-m'>
                                    <a href='#'>
                                        <span className=''>Bạn đã quên mật khẩu?</span>
                                        <ArrowUp></ArrowUp>
                                    </a>
                                </p>
                                <p>
                                    <span className='body-small'>Bạn chưa có tài khoản tại Pop4u? </span>
                                    <span className='label-m'>
                                        <Link to="/signup">
                                            <span className=''>Tạo tài khoản của bạn ngay bây giờ.</span>
                                            <ArrowUp></ArrowUp>
                                        </Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
export { SignIn };