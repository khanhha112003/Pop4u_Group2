import React, { useState, useEffect } from 'react';
import { ReactComponent as EditIcon } from "./Icon_edit.svg"
import './UserProfile.css';
import { BASE_URL } from '../../app_logic/APIHandler';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';
const UserProfile = () => {
	const [profileData, setProfileData] = useState({
		"username": "",
		"email": "",
		"fullname": "",
		"birthdate": "",
		"phone_number": "",
	});
	const [logoutErrorMessage, setLogoutErrorMessage] = useState('');
	const [isReadOnly, setIsReadOnly] = useState(true);
	const { user, logout } = useAuth();

	useEffect(() => {
		async function getProfile() {
			const token = 'Bearer ' + user.access_token;
			console.log(token);
			try {
				const getProfileRequest = await axios.get(BASE_URL + "/auth/user_profile",
					{
						headers: {
							'content-type': 'application/json',
							'Authorization': token
						}
					})
				if (getProfileRequest.data) {
					setLogoutErrorMessage("");
					setProfileData(getProfileRequest.data);
				} else {
					setLogoutErrorMessage("Lỗi lấy thông tin tài khoản.");
				}
			} catch (error) {
				setLogoutErrorMessage(error.message);
			}
		}
		getProfile();
	}, []);


	const handleLogout = () => {
		logout(setLogoutErrorMessage);
	};

	const handleEdit = () => {
		console.log('User edit');
		setIsReadOnly(!isReadOnly)
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
						<button className="buttonn-profile" onClick={handleEdit}><EditIcon/></button>
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
							readOnly = {isReadOnly}
							value={profileData.fullname} />
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
							readOnly = {isReadOnly}
							value={profileData.birthdate} />
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
							readOnly = {isReadOnly}
							value={profileData.email === null ? "" : profileData.email} />
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
							readOnly = {isReadOnly}
							value={profileData.phone_number} />
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto text-center'>
					<p className="error-message body-small">{logoutErrorMessage}</p>
				</div>
			</div>
			<div className='row'>
				<div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto text-center'>
					<button onClick={handleLogout} className='sign-up-button label-xl' type="submit">
						Đăng xuất
					</button>
				</div>
			</div>
		</div>
	);
};

export { UserProfile };
