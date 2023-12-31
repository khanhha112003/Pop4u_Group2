import React, { useState }  from 'react';
import "./SignUp.css"
import { ReactComponent as ArrowUp } from './images/arrow_outward.svg';
import { ReactComponent as HandShake } from './images/handshake.svg';
import { Link } from 'react-router-dom';


function SignUp() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage1,  setErrorMessage1] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');

  const phoneRegex = /^0\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;  
  const handleUserId = (e) => {
    const newUserId = e.target.value;
    setUserId(newUserId);

    const isPhone = phoneRegex.test(newUserId);
    const isEmail = emailRegex.test(newUserId);

    if (!(isPhone || isEmail) && (newUserId !== "") ) {
        setErrorMessage1('Số điện thoại hoặc email của bạn chưa đúng.');
    } else {
        setErrorMessage1('');
    }
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
  
  const handleConfirmPassword = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);  
    if (newConfirmPassword !== "") {
      if (password === "") {
        setErrorMessage3('Vui lòng nhập mật khẩu trước khi nhập mật khẩu xác nhận.');
      } else {
        if ((password !== confirmPassword) ) {
          setErrorMessage3('Mật khẩu không trùng khớp.');
        } else {
          setErrorMessage3('');
        }    
      }
    } else {
      setErrorMessage3('');
    }
  }
 
  const handleSignUp = (e) => {
      e.preventDefault();
      if (userId && password) {
          if (userId === '0904944193' && password === 'password') {
          } else {
              // setErrorMessage2('Tên đăng nhập hoặc mật khẩu không chính xác');
          }
      } else {
          // setErrorMessage3('Vui lòng điền đầy đủ thông tin đăng nhập');
      }
  };
  
  // const handleLogout = () => {
  //     setIsLoggedIn(false);
  //     setUserId('');
  //     setPassword('');
  // };
        
      // Kiểm tra xem userId là số điện thoại hoặc email hợp lệ không
  //   return (
  //     <div>
  //       <h2>Xin chào, {userId}!</h2>
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
                      <h5 className='head5'>Tạo tài khoản tại Pop4u</h5>
                      <p className='body-small'>Bạn chỉ có thể mua hàng khi có tài khoản tại Pop4u.</p>
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
                        id="name"
                        placeholder="Họ và tên"
                        required
                        />
                    </div>
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
                        // onChange=""
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
                        id="user-id"
                        value={userId}
                        placeholder="Email hoặc số điện thoại"
                        required
                        onChange={handleUserId}
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