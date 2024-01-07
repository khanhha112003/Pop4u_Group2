import React, { useState } from 'react';
import "./SignUp.css"
import { ReactComponent as ArrowUp } from './images/arrow_outward.svg';
import { ReactComponent as HandShake } from './images/handshake.svg';
import NameFieldIcon from './images/motion_photos_auto.svg';
import PhoneIcon from './images/phone.svg';
import EmailIcon from './images/alternate_email.svg';
import PasswordIcon from './images/password.svg';
import ConfirmPasswordIcon from './images/done_all.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { basicPostRequest } from '../../app_logic/APIHandler';
import { CustomInputBox } from '../../components/CustomInputBox/CustomInputBox';

function validateForm({ username, fullname, phone_number, password, birthdate }) {
	console.log(username, fullname, phone_number, password, birthdate);
	return username.length > 0 && fullname.length > 0 && phone_number.length > 0 && password.length > 0 && birthdate.length > 0;
}

function SignUp() {
	const [userRegisterContent, setUserRegisterContent] = useState({});//[username, userFullname, userEmail, userPhone, password, confirmPassword, birthdate] = userRegisterContent;
	const [errorMessage3, setErrorMessage3] = useState('');
	const [registerErrorMessage, setRegisterErrorMessage] = useState('');

	const navigate = useNavigate()

	const onChooseBirthdate = (e) => {
		const newBirthdate = e.target.value;
		if (newBirthdate !== "") {
			if (new Date(newBirthdate) > new Date()) {
				setErrorMessage3('Ngày sinh không hợp lệ.');
			} else {
				setErrorMessage3('');
				setUserRegisterContent({ ...userRegisterContent, birthdate: newBirthdate });
			}
		} else {
			setErrorMessage3('Vui lòng nhập ngày sinh của bạn.');
		}
	}

	const handleSignUp = (e) => {
		e.preventDefault();

		if (!validateForm(userRegisterContent)) {
			setRegisterErrorMessage('Vui lòng điền đầy đủ thông tin.');
			return;
		}

		const signupRequest = basicPostRequest('/auth/register', userRegisterContent)
		signupRequest.then((response) => {
			if (response.data.status === 1) {
				setRegisterErrorMessage('');
				navigate('/signin');
			} else {
				console.log(response.data);
				setRegisterErrorMessage(response.data.message);
			}
		}).catch((error) => {
			setRegisterErrorMessage(error.message);
		})
	};

	return (
		<div>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12'>
						<div className='sign-in-title'>
							<h5 className='head5'>Tạo tài khoản tại Pop4u</h5>
							<p className='body-small'>Đồng hành cùng Pop4u trong chặng đường sắp tới.</p>
						</div>
					</div>
				</div>
				<form onSubmit={handleSignUp}>
					<CustomInputBox
						data={{
							regex: {
								checker: /^[a-zA-Z0-9]{7,}$/,
								message: 'Tên đăng nhập của bạn chưa hợp lệ.'
							},
							placeholder: 'Tên đăng nhập',
							isRequired: true,
							icon: NameFieldIcon
						}}
						onSuccess={(value) => { setUserRegisterContent({ ...userRegisterContent, username: value }) }}
						checkErrorMessage={(value) => {
							if (value === '') {
								return 'Xin vui lòng nhập tên đăng nhập';
							}
							return '';
						}}
					/>
					<CustomInputBox
						data={{
							placeholder: "Họ và tên",
							isRequired: true,
							icon: NameFieldIcon
						}}
						onSuccess={(value) => { setUserRegisterContent({ ...userRegisterContent, fullname: value }) }}
						checkErrorMessage={(value) => {
							if (value === '') {
								return 'Xin vui lòng nhập tên đăng nhập';
							}
							return '';
						}}
					/>

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
									onChange={onChooseBirthdate}
								/>
								<p className="error-message body-small">{errorMessage3}</p>
							</div>
						</div>
					</div>
					<CustomInputBox
						data={{
							regex: {
								checker: /^0\d{9}$/,
								message: 'Số điện thoại của bạn chưa hợp lệ.'
							},
							placeholder: "Số điện thoại",
							isRequired: true,
							icon: PhoneIcon
						}}
						onSuccess={(value) => { setUserRegisterContent({ ...userRegisterContent, phone_number: value }) }}
						checkErrorMessage={(value) => {
							if (value === '') {
								return 'Xin vui lòng nhập số điện thoại.';
							}
							return '';
						}}
					/>
					<CustomInputBox
						data={{
							regex: {
								checker: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Email của bạn chưa hợp lệ.'
							},
							placeholder: "Email",
							icon: EmailIcon
						}}
						onSuccess={(value) => { setUserRegisterContent({ ...userRegisterContent, email: value }) }}
						checkErrorMessage={(value) => { return '' }}
					/>
					<CustomInputBox
						data={{
							regex: {
								checker: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
								message: 'Mật khẩu cần chứa ít nhất 8 ký tự, có ít nhất 1 chữ cái in hoa, 1 chữ cái thường và 1 số.'
							},
							placeholder: "Mật khẩu",
							isRequired: true,
							type: 'password',
							icon: PasswordIcon
						}}
						onSuccess={(value) => { setUserRegisterContent({ ...userRegisterContent, password: value }) }}
						checkErrorMessage={(value) => {
							if (value === '') {
								return 'Xin vui lòng nhập tên đăng nhập';
							}
							return '';
						}}
					/>
					<CustomInputBox
						data={{
							placeholder: "Xác nhận mật khẩu",
							isRequired: true,
							type: 'password',
							icon: ConfirmPasswordIcon
						}}
						checkErrorMessage={(value) => {
							if (value === '') {
								return 'Vui lòng nhập mật khẩu trước khi nhập mật khẩu xác nhận.';
							} else if (userRegisterContent.password !== value) {
								return 'Mật khẩu không trùng khớp.';
							}
							return '';
						}}
					/>
					<div className='row'>
						<div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto text-center'>
							<p className="error-message body-small">{registerErrorMessage}</p>
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
export { SignUp };