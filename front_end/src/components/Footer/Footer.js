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
                <a href="/">
                    <LogoIcon className="img-icon"/>
                </a>
                <ul className="link-list">
                    <li><a href="/about"><span className="label-s">Về chúng tôi</span></a></li>
                    <li><a href="/todo"><span className="label-s">Nhà cung ứng</span></a></li>
                    <li><a href="/todo"><span className="label-s">ESG</span></a></li>
                    <li><a href="/todo"><span className="label-s">Chứng nhận</span></a></li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="footer-head"><span className="link-list-title label-xl">Sản phẩm</span></div>
                <ul className="link-list">
                    <li><a href="/product_list/album"><span className="label-s">Album</span></a></li>
                    <li><a href="/product_list/merch"><span className="label-s">Merch</span></a></li>
                    <li><a href="/product_list/photobook"><span className="label-s">Photobook</span></a></li>
                    <li><a href="/product_list/vynil"><span className="label-s">Vinyl</span></a></li>
                    <li><a href="/product_list/lightstick   "><span className="label-s">Lightstick</span></a></li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="footer-head"><span className="link-list-title label-xl">Chính sách</span></div>
                <ul className="link-list">
                    <li><a href="#"><span className="label-s">Chính sách mua hàng</span></a></li>
                    <li><a href="#"><span className="label-s">Chính sách giao hàng</span></a></li>
                    <li><a href="#"><span className="label-s">Chính sách thanh toán</span></a></li>
                    <li><a href="#"><span className="label-s">Dữ liệu cá nhân</span></a></li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 footer-col">
                <div className="footer-head"><span className="link-list-title label-xl">Liên hệ</span></div>
                <ul className="link-list">
                    <li><div className="label-link-icon">
                        <PhoneIcon/>
                        {/* <img src="public\images\ad-units.svg" alt="Phone"/> */}
                        <span className="label-s">0904944193</span>
                    </div></li>
                    <li><div className="label-link-icon">
                        {/* <img src="public\images\drafts.svg" alt="Mail"/> */}
                        <MailIcon/>
                        <span className="label-s">pop4u@gmail.com</span>
                    </div></li>
                    <li><a href="https://maps.app.goo.gl/vjQBUCLQBN6U1fxY7" target='_blank'><div className="label-link-icon">
                        {/* <img src="public\images\apartment.svg" alt="Mail"/> */}
                        <ApartmentIcon/>
                        <span className="label-s">669 QL1A, khu phố 3, Thủ Đức, Thành phố Hồ Chí Minh</span>
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
                <a href="https://www.facebook.com/pop4u.business/" target='_blank'>
                    {/* <img src="public/images/icon-facebook-icon.svg" alt="Facebook" className="footer-social-icon"/> */}
                    <FacebookIcon className="icon-social" />
                </a>
                <a href="#">
                    {/* <img src="public/images/icon-youtube-round-2.svg" alt="Facebook" className="footer-social-icon"/> */}
                    <YoutubeIcon className="icon-social"/>
                </a>
                <a href="https://www.instagram.com/pop4u.business/" target='_blank'>
                    {/* <img src="public/images/icon-instagram-icon.svg" alt="Facebook" className="footer-social-icon"/> */}
                    <InstagramIcon className="icon-social"/>
                </a>
                <a href="#">
                    {/* <img src="public/images/icon-tik-tok.svg" alt="Facebook" className="footer-social-icon"/> */}
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
