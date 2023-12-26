import { ReactComponent as Arrow } from './icons/icon_arrow.svg';
import logo_blackpink from './icons/logo_blackpink.png'
import img_blackpink from './icons/img_blackpink.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ArtistCardItem() {
    return (
        <li>
        <div className="col-6">
            <div className="blackpink row">
            <div className="col-md-6">
                <img src={img_blackpink} alt="Blackpink Image" />
            </div>
            <div className="col-6">
                <img src={logo_blackpink} alt="Blackpink Logo" />
                <h3>BLACKPINK</h3>
                <h6>Xem sản phẩm<a href="#"><Arrow /></a></h6>
            </div>
            </div>
        </div>
        </li>
    );
}