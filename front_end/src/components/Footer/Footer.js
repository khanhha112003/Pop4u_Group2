import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { ReactComponent as LogoIcon } from './icons/logo.svg';
import { ReactComponent as PhoneIcon } from './icons/icon_phone.svg';
import { ReactComponent as ApartmentIcon } from './icons/domain.svg';
import { ReactComponent as MailIcon } from './icons/icon_mail.svg';
import { ReactComponent as YoutubeIcon } from './icons/icon_youtube.svg';
import { ReactComponent as InstagramIcon } from './icons/icon_insta.svg';
import { ReactComponent as FacebookIcon } from './icons/icon_fb.svg';
import { ReactComponent as TiktokIcon } from './icons/icon_tiktok.svg';
function Footer() {
  return (
    <div className="container">
        <div className="row">
            <div className="footer-line">
                <hr/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <a href="#">
                    <LogoIcon className="img-icon"/>
                </a>
                <ul className="link-list">
                    <li><a href="#"><span className="label-m">Về chúng tôi</span></a></li>
                    <li><a href="#"><span className="label-m">Nhà cung ứng</span></a></li>
                    <li><a href="#"><span className="label-m">ESG</span></a></li>
                    <li><a href="#"><span className="label-m">Chứng nhận</span></a></li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="footer-head"><span className="link-list-title label-xl">Sản phẩm</span></div>
                <ul className="link-list">
                    <li><a href="#"><span className="label-m">Album</span></a></li>
                    <li><a href="#"><span className="label-m">Merch</span></a></li>
                    <li><a href="#"><span className="label-m">Photobook</span></a></li>
                    <li><a href="#"><span className="label-m">Vinyl</span></a></li>
                    <li><a href="#"><span className="label-m">Lightstick</span></a></li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="footer-head"><span className="link-list-title label-xl">Chính sách</span></div>
                <ul className="link-list">
                    <li><a href="#"><span className="label-m">Chính sách mua hàng</span></a></li>
                    <li><a href="#"><span className="label-m">Chính sách giao hàng</span></a></li>
                    <li><a href="#"><span className="label-m">Chính sách thanh toán</span></a></li>
                    <li><a href="#"><span className="label-m">Dữ liệu cá nhân</span></a></li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 footer-col">
                <div className="footer-head"><span className="link-list-title label-xl">Liên hệ</span></div>
                <ul className="link-list">
                    <li><a href="#"><div className="label-link-icon">
                        <PhoneIcon className='label-icon'/>
                        <span className="label-m">0904944193</span>
                    </div></a></li>
                    <li><a href="#"><div className="label-link-icon">
                        <MailIcon className='label-icon'/>
                        <span className="label-m">pop4u@gmail.com</span>
                    </div></a></li>
                    <li><a href="#"><div className="label-link-icon">
                        <ApartmentIcon className='label-icon'/>
                        <span className="label-m">669 QL1A, KP.3, Thủ Đức, TP.HCM</span>
                    </div></a></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="footer-line">
                <hr/>
            </div>
        </div>
        <div className="row justify-content-between">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 footer-list-social-icon">
                <a href="#">
                    <FacebookIcon className="icon-social" />
                </a>
                <a href="#">
                    <YoutubeIcon className="icon-social"/>
                </a>
                <a href="#">
                    <InstagramIcon className="icon-social"/>
                </a>
                <a href="#">
                    <TiktokIcon className="icon-social"/>
                </a>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="copy-right">
                    <span className="body-small">© Bản quyền thuộc về Pop4u 2023.</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
