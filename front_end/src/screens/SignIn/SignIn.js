import React, { useState } from 'react';
import "./SignIn.css";
import "react-bootstrap";
import { ReactComponent as ArrowUp } from './images/arrow_outward.svg';


function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (username === 'admin' && password === 'password') {
        setIsLoggedIn(true);
      }
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
      setUsername('');
      setPassword('');
    };
  
    // if (isLoggedIn) {
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
                    <div className='col-sm-10 col-md-10 col-lg-8 col-xl-6 col-xs-10 mx-auto'>
                        <div className='sign-in-input text-center'>
                            <input
                            className='body-small sign-in-field'
                            type="text"
                            id="user-id"
                            value={username}
                            placeholder="Email hoặc số điện thoại"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-10 col-md-10 col-lg-8 col-xl-6 col-xs-10 mx-auto'>
                        <div className='sign-in-input text-center'>
                            <input
                            className='body-small sign-in-field'
                            type="text"
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
                    <div className='col-sm-10 col-md-10 col-lg-8 col-xl-6 col-xs-10 mx-auto text-center'>
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