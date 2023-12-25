import React, { useState, useEffect }  from 'react';
import "./SignIn.css";
import "react-bootstrap";
import { ReactComponent as ArrowUp } from './images/arrow_outward.svg';


function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage1,  setErrorMessage1] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');
    const [errorMessage3, setErrorMessage3] = useState('');

    const phoneRegex = /^0\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const handleUsername = (e) => {
        const newUsername = e.target.value;
        setUsername(newUsername);
    
        const isPhone = phoneRegex.test(newUsername);
        const isEmail = emailRegex.test(newUsername);
    
        if (!(isPhone || isEmail) && (newUsername !== "") ) {
            setErrorMessage1('Số điện thoại hoặc email của bạn chưa đúng.');
        } else {
            setErrorMessage1('');
        }
    };
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    
    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            if (username === '0904944193' && password === 'password') {
                setIsLoggedIn(true);
            } else {
                setErrorMessage2('Tên đăng nhập hoặc mật khẩu không chính xác');
            }
        } else {
            setErrorMessage3('Vui lòng điền đầy đủ thông tin đăng nhập');
        }
    };
    
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };
          
        // Kiểm tra xem username là số điện thoại hoặc email hợp lệ không
    //   return (
    //     <div>
    //       <h2>Xin chào, {username}!</h2>
    //       <button onClick={handleLogout}>Đăng xuất</button>
    //     </div>
    //   );
    // }
  
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
                <div className='row'>
                    <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto'>
                        <div className='sign-in-input text-center'>
                            <input
                            className='body-small sign-in-field'
                            type="text"
                            id="user-id"
                            value={username}
                            placeholder="Email hoặc số điện thoại"
                            required
                            onChange={handleUsername}
                            />
                            <p className="error-message body-small">{errorMessage1}</p>                  
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto'>
                        <div className='sign-in-input text-center'>
                            <input
                            className='body-small sign-in-field'
                            type="password"                             
                            id="password"
                            value={password}
                            placeholder="Mật khẩu"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
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
                                    <a href='#'>
                                        <span className=''>Tạo tài khoản của bạn ngay bây giờ.</span>
                                        <ArrowUp></ArrowUp>
                                    </a>
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
 export {SignIn};