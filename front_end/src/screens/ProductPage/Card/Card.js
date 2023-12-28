import { ReactComponent as Star } from './icons/grade.svg';
import img_album from './icons/img_album.png'
import "./Card.css"


 function Card() {
    return (
                       <div className="card">

      <img className="card-img" src={img_album} alt="img"></img>
      <div className="card-details">
        <span className="tag">Mới</span>
        <span className="tag">Freeship</span>
        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
        <div className="card-reviews"> 
            <Star className="rating-start"/> 
            <Star className="rating-start"/> 
            <Star className="rating-start"/> 
            <Star className="rating-start"/> 
            <Star className="rating-start"/>
            <span className="rating">(12)</span>
        </div>
            <div className="product-box-price">
                <div className="price-sale">
                    <span className="price-inner">400.000₫</span>
                </div>
                    <del className="price-del">500.000₫</del>
            </div>
            </div>
      </div>

        
    );
 }
 export default Card;