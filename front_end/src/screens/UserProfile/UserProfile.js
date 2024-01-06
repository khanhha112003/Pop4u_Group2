import React from 'react';
import './UserProfile.css'; 
import { ReactComponent as EditIcon } from "./Icon_edit.svg"

const UserProfile = () => {
  // Sample user data
  const userData = {
    fullName: 'Nguyễn Ngọc Diệp ',
    dob: '01/01/2003',
    email: 'ngocdiepmaimai@gmail.com',
    address: '123/45 Chu Văn An, Phường 3, Quận 4, TP.HCM',
    // Add more user details if needed
  };

  // Function to handle logout
  const handleLogout = () => {
    // Logic for user logout (could involve clearing local storage, redirecting, etc.)
    console.log('User logged out');
  };

  return (
    <div className='container'>
           <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12'>
                  <div className='profile-title'>
                      <h5 className='head5'>Tài khoản của bạn</h5>
                  </div>
              </div>
          </div>       
          <div className='row'>
            <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto'>
                <div className="canhgiua">
        <img
          src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/hinh-anh-gai-xinh-de-thuong-457x600-1.jpg" 
          alt="User Avatar"
          className="user-avatar"
        />

        </div>
        <div className="canhgiua margin">
        <button className="buttonn-profile"><EditIcon></EditIcon></button>
        </div>
        </div>
        </div>
        <div className='row'>
            <div className='col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xs-10 mx-auto'>
        <p>Họ và tên : </p>
          <div className='sign-in-input text-center'>
                        <input
                        className='body-small sign-in-field'
                        type="fullName"                             
                        id="fullName"
                        value={userData.fullName} />
          </div>
          </div>
          </div>
          <div className='row'>
            <div className='col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xs-10 mx-auto'>
          <p>Ngày sinh : </p>
          <div className='sign-in-input text-center'>
                        <input
                        className='body-small sign-in-field'
                        type="dob"                             
                        id="dob"
                        value={userData.dob} />
          </div>
          </div>
          </div>
          <div className='row'>
            <div className='col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xs-10 mx-auto'>
          <p>Email: </p>
          <div className='sign-in-input text-center'>
                        <input
                        className='body-small sign-in-field'
                        type="email"                             
                        id="email"
                        value={userData.email} />
          </div>
          </div>
          </div>
          <div className='row'>
            <div className='col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xs-10 mx-auto'>
          <p>Địa chỉ: </p>
          <div className='sign-in-input text-center'>
                        <input
                        className='body-small sign-in-field'
                        type="address"                             
                        id="address"
                        value={userData.address} />
          </div>
          </div>
          </div>
       
          <div className='row'>
                <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto text-center'>
      <a href="/signin"><button onClick={handleLogout} className='sign-up-button label-xl' type="submit">
        Đăng xuất 
      </button></a>
      </div>
      </div>
    </div>
  );
};

export {UserProfile};
