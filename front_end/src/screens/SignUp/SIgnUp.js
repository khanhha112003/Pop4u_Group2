import React, { useState }  from 'react';
import "./SignUp.css"
import { ReactComponent as ArrowUp } from './images/arrow_outward.svg';
import { ReactComponent as HandShake } from './images/handshake.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { basicPostRequest } from '../../app_logic/APIHandler';

function SignUp() {
  const [username, setUserName] = useState('');
  const [userFullname, setUserFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [usernameError,  setUsernameError] = useState('');
  const [userFullnameError,   ] = useState('');
  const [errorMessage0,  setErrorMessage0] = useState('');
  const [errorMessage1,  setErrorMessage1] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');

  const navigate = useNavigate()

  const userNameRegex = /[a-zA-Z_\d]{6,}$/;
  const phoneRegex = /^0\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;  
  const handleUserEmail = (e) => {
    const newUserEmail = e.target.value;
    setUserEmail(newUserEmail);
  };

  const handleInputUserName = (e) => {
    const inputUsername = e.target.value;
    setUserName(inputUsername);
  };

  const handleInputUserFullname = (e) => {
    const fullname = e.target.value;
    setUserFullName(fullname);
  };

  const handleInputPhone = (e) => {
    const phoneNumber = e.target.value;
    setUserPhone(phoneNumber);
  };

  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);  

    const isStrongPassword = strongRegex.test(password);
    if ((!(isStrongPassword))  && (newPassword !== "") ) {
      setErrorMessage2('Mật khẩu cần chứa ít nhất 8 ký tự, có ít nhất 1 chữ cái in hoa, 1 chữ cái thường và 1 số.');
    } else {
    setErrorMessage2('');

    }
  }

  const onChooseBirthdate = (e) => {
    const newBirthdate = e.target.value;
    if (newBirthdate!== "") {
      if (new Date(newBirthdate) > new Date()) {
        setErrorMessage3('Ngày sinh không hợp lệ.');
      } else {
        setBirthdate(newBirthdate);  
      }    
    } else {
      setErrorMessage3('Vui lòng nhập ngày sinh của bạn.');
    }
  }
  
  const handleConfirmPassword = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);  
    if (newConfirmPassword !== "") {
      if (password === "") {
        setErrorMessage3('Vui lòng nhập mật khẩu trước khi nhập mật khẩu xác nhận.');
      } else {
        // if ((password !== confirmPassword) ) { 
        //   setErrorMessage3('Mật khẩu không trùng khớp.');
        // } else {
        //   setErrorMessage3('');
        // }    
      }
    } else {
      setErrorMessage3('');
    }
  }
 
  const handleSignUp = (e) => {
      e.preventDefault();

      if (username === "") {
        setUsernameError('Xin vui lòng nhập tên đăng nhập');
        return;
      } else if (!userNameRegex.test(username)) {
        setUsernameError('Tên đăng nhập của bạn chưa hợp lệ.');
        return;
      }
      if (userFullname === "") {
        setUsernameError('Xin vui lòng điền tên của bạn');
        return;
      }

      if (userPhone === "") {
        setErrorMessage0('Xin vui lòng nhập số điện thoại.');
        return;
      } else if (!phoneRegex.test(userPhone)) {
        setErrorMessage0('Số điện thoại của bạn chưa hợp lệ.');
        return;
      } 

      if (userEmail === "") {
        setErrorMessage1('Vui lòng điền email.');
        return;
      } else if (!emailRegex.test(userEmail)) {
        setErrorMessage1('Email của bạn chưa hợp lệ.');
        return;
      }

      if (password.length === '') {
        setErrorMessage2('Vui lòng nhập mật khẩu.');
        return;
      } if (confirmPassword !== password) { 
        setErrorMessage3('Vui lòng nhập lại mật khẩu xác nhận.');
        return;
      }

      const signupRequest = basicPostRequest('/auth/register', {
        phone_number: userPhone,
        password: password,
        birthdate: birthdate,
        email: userEmail,
        fullname: userFullname,
        username: username
      }).then((response) => {

      }).catch((error) => {

      }).finally((
        navigate('/signin')
      ))
  };
  
  return (
    <div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12'>
                  <div className='sign-in-title'>
                      <h5 className='head5'>Tạo tài khoản tại Pop4u</h5>
                      <p className='body-small'>Gắn kết cùng Pop4u trong hành trình sắp tới.</p>
                  </div>
              </div>
          </div>
          <form onSubmit={handleSignUp}>
          <div className='row'>
                <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto'>
                    <div className='sign-in-input text-center'>
                        <input
                        className='body-small sign-in-field'
                        type="text"
                        id="username"
                        value={username}
                        placeholder="Tên đăng nhập"
                        required
                        onChange={handleInputUserName}
                        />
                        <p className="error-message body-small">{usernameError}</p>                  
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto'>
                    <div className='sign-in-input text-center'>
                        <input
                        className='body-small sign-in-field'
                        type="text"
                        id="fullname"
                        placeholder="Họ và tên"
                        required
                        onChange={handleInputUserFullname}
                        />
                    </div>
                    <p className="error-message body-small">{userFullnameError}</p>  
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto'>
                    <div className='sign-in-input text-center'>
                        <input
                        className='body-small sign-in-field'
                        type="date"
                        id='birthdate'
                        // value={birthdate}
                        placeholder="Ngày sinh"
                        required
                        onChange= {onChooseBirthdate}
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto'>
                    <div className='sign-in-input text-center'>
                        <input
                        className='body-small sign-in-field'
                        type="text"
                        id="user-phonenumber"
                        value={userPhone}
                        placeholder="Số điện thoại"
                        required
                        onChange={handleInputPhone}
                        />
                        <p className="error-message body-small">{errorMessage0}</p>                  
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto'>
                    <div className='sign-in-input text-center'>
                        <input
                        className='body-small sign-in-field'
                        type="text"
                        id="user-email"
                        value={userEmail}
                        placeholder="Email"
                        onChange={handleUserEmail}
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
                        onChange={handlePassword}                        />
                    </div>
                    <p className="error-message body-small">{errorMessage2}</p>                  

                </div>
            </div>
            <div className='row'>
                <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto'>
                    <div className='sign-in-input text-center'>
                        <input
                        className='body-small sign-in-field'
                        type="password"                             
                        id="confirm-password"
                        value={confirmPassword}
                        placeholder="Xác nhận mật khẩu"
                        required
                        onChange={handleConfirmPassword}
                        />
                    </div>
                    <p className="error-message body-small">{errorMessage3}</p>                  
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto text-center'>
                  <div className='agreement'>
                    <HandShake className="hand-shake-icon"></HandShake>
                    <p className='body-min'>Nếu bạn nhấn Tạo tài khoản, bạn đã đồng ý với các điều khoản và dịch vụ của Pop4u về quản lý tài khoản, thông tin cá nhân, thông tin giao dịch và chính sách quảng cáo.</p>
                    <span className='label-m'>
                        <a href='#'>
                            <span className=''>Tìm hiểu thêm.</span>
                            <ArrowUp></ArrowUp>
                        </a>
                    </span>

                  </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto text-center'>
                  <button className='sign-up-button label-xl' type="submit">Tạo tài khoản</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto text-center'>
                  <div className='sign-up-support'>
                    <p>
                        <span className='body-small'>Bạn đã có tài khoản tại Pop4u? </span>
                        <span className='label-m'>
                          <Link to="/signin">
                            <span className=''>Đăng nhập ngay bây giờ.</span>
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
 export {SignUp};