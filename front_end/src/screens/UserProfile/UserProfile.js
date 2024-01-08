import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as EditIcon } from "./Icon_edit.svg"
import './UserProfile.css';
import { basicGetRequets, basicPostRequest } from '../../app_logic/APIHandler';

const UserProfile = () => {
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
		"username": "",
		"email": "",
		"fullname": "",
		"birthdate": "",
		"phone_number": "",
	});

	

	useEffect(() => {
		if (true) {
			basicGetRequets('/auth/user_profile')
				.then((response) => {
					// setUserData(response.data);
				}
				).catch((error) => {
					// if (error.response.status === 401) {
					// 	setAuth(false);
					// 	removeToken();
					// 	navigate('/signin');
					// }
				});
		}
	}, []);


	const handleLogout = () => {
		basicPostRequest('/auth/logout')
			.then((response) => {
				console.log(response.data);
				if (response.data.status === 1) {
					navigate('/');
				} else {
					console.log(response.data);
				}
			}
			);
	};

	const handleEdit = () => {
		console.log('User edit');
	}

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
						<button className="buttonn-profile" onClick={handleEdit}><EditIcon></EditIcon></button>
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
							value={userData.fullname} />
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
							value={userData.birthdate} />
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
					<p>Số điện thoại: </p>
					<div className='sign-in-input text-center'>
						<input
							className='body-small sign-in-field'
							type="address"
							id="address"
							value={userData.phone_number} />
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

export { UserProfile };
