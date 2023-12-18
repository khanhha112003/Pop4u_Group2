import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { ReactComponent as LogoIcon } from './icons/logo.svg';
import { ReactComponent as PhoneIcon } from './icons/icon_phone.svg';
import { ReactComponent as ApartmentIcon } from './icons/icon_house.svg';
import { ReactComponent as MailIcon } from './icons/icon_mail.svg';
import { ReactComponent as YoutubeIcon } from './icons/icon_youtube.svg';
import { ReactComponent as InstagramIcon } from './icons/icon_insta.svg';
import { ReactComponent as FacebookIcon } from './icons/icon_fb.svg';
import { ReactComponent as TiktokIcon } from './icons/icon_tiktok.svg';
function Footer() {
  return (
    <div class="container">
        <div class="row">
            <div class="footer-line">
                <hr/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-">
                <a href="#">
                    <LogoIcon class="img-icon"/>
                </a>
                <ul class="link-list">
                    <li><a href="#"><span class="label-s">Về chúng tôi</span></a></li>
                    <li><a href="#"><span class="label-s">Nhà cung ứng</span></a></li>
                    <li><a href="#"><span class="label-s">ESG</span></a></li>
                    <li><a href="#"><span class="label-s">Chứng nhận</span></a></li>
                </ul>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div class="footer-head"><span class="link-list-title label-xl">Sản phẩm</span></div>
                <ul class="link-list">
                    <li><a href="#"><span class="label-s">Album</span></a></li>
                    <li><a href="#"><span class="label-s">Merch</span></a></li>
                    <li><a href="#"><span class="label-s">Photobook</span></a></li>
                    <li><a href="#"><span class="label-s">Vinyl</span></a></li>
                    <li><a href="#"><span class="label-s">Lightstick</span></a></li>
                </ul>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div class="footer-head"><span class="link-list-title label-xl">Chính sách</span></div>
                <ul class="link-list">
                    <li><a href="#"><span class="label-s">Chính sách mua hàng</span></a></li>
                    <li><a href="#"><span class="label-s">Chính sách giao hàng</span></a></li>
                    <li><a href="#"><span class="label-s">Chính sách thanh toán</span></a></li>
                    <li><a href="#"><span class="label-s">Dữ liệu cá nhân</span></a></li>
                </ul>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 footer-col">
                <div class="footer-head"><span class="link-list-title label-xl">Liên hệ</span></div>
                <ul class="link-list">
                    <li><a href="#"><div class="label-link-icon">
                        <PhoneIcon/>
                        {/* <img src="public\images\ad-units.svg" alt="Phone"/> */}
                        <span class="label-s">0904944193</span>
                    </div></a></li>
                    <li><a href="#"><div class="label-link-icon">
                        {/* <img src="public\images\drafts.svg" alt="Mail"/> */}
                        <MailIcon/>
                        <span class="label-s">pop4u@gmail.com</span>
                    </div></a></li>
                    <li><a href="#"><div class="label-link-icon">
                        {/* <img src="public\images\apartment.svg" alt="Mail"/> */}
                        <ApartmentIcon/>
                        <span class="label-s">669 QL1A, khu phố 3, Thủ Đức, Thành phố Hồ Chí Minh</span>
                    </div></a></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="footer-line">
                <hr/>
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 footer-list-social-icon">
                <a href="#">
                    {/* <img src="public/images/icon-facebook-icon.svg" alt="Facebook" class="footer-social-icon"/> */}
                    <FacebookIcon class="icon-social" />
                </a>
                <a href="#">
                    {/* <img src="public/images/icon-youtube-round-2.svg" alt="Facebook" class="footer-social-icon"/> */}
                    <YoutubeIcon class="icon-social"/>
                </a>
                <a href="#">
                    {/* <img src="public/images/icon-instagram-icon.svg" alt="Facebook" class="footer-social-icon"/> */}
                    <InstagramIcon class="icon-social"/>
                </a>
                <a href="#">
                    {/* <img src="public/images/icon-tik-tok.svg" alt="Facebook" class="footer-social-icon"/> */}
                    <TiktokIcon class="icon-social"/>
                </a>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="copy-right">
                    <span class="body-small">© Bản quyền thuộc về Pop4u 2023.</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
