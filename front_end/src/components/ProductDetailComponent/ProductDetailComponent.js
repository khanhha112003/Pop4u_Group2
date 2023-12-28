
import ImageProductMain from '../../theme/images/Blackpink-The_Album.png'
import ImageProductv1 from '../../theme/images/TA_v1.jpg'
import ImageProductv2 from '../../theme/images/TA_v2.jfif'
import ImageProductv3 from '../../theme/images/TA_v3.jpg'
import ImageProductv4 from '../../theme/images/TA_v4.jpg'
import './ProductDetailComponent.css'
import React, { useState } from 'react';
import 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { ReactComponent as Arrow } from '../../screens/HomePage/icons/icon_arrow.svg';
import img_product from '../../screens/HomePage/icons/img_product.png';
import { ReactComponent as Star } from '../../screens/HomePage/icons/icon_star.svg';
import { ReactComponent as Plus } from '../../theme/images/icon_plus.svg';
import { ReactComponent as Minus } from '../../theme/images/icon_minus.svg';



function ProductDetailComponent () {
    const [quantity, setQuantity] = useState(1);
    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
  const [option, setOption] = useState('Main');
  const [index, setIndex] = useState(0);
  const [activeVersion, setActiveVersion] = useState(option); // Track active version

  const handleOptionSelection = (selectedOption) => {
    setOption(selectedOption);
    setActiveVersion(selectedOption); // Update active version

    switch (selectedOption) {
      case 'Main':
        setIndex(0);
        break;
      case 'v1':
        setIndex(1);
        break;
      case 'v2':
        setIndex(2);
        break;
      case 'v3':
        setIndex(3);
        break;
      case 'v4':
        setIndex(4);
        break;
      default:
        setIndex(0);
        break;
    }
  };

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="image-size">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img className="d-block w-100" src={ImageProductMain} alt="Main" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={ImageProductv1} alt="V1" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={ImageProductv2} alt="V2" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={ImageProductv3} alt="V3" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="d-block w-100" src={ImageProductv4} alt="V4" />
                  </Carousel.Item>
                </Carousel>

                <div style={{ marginTop: '3px', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={ImageProductMain}
                    alt="Thumbnail 1"
                    style={{ width: '20%', marginRight: '1px', cursor: 'pointer' }}
                    onClick={() => handleOptionSelection('Main')}
                  />
                  <img
                    src={ImageProductv1}
                    alt="Thumbnail 2"
                    style={{ width: '20%', marginRight: '1px', cursor: 'pointer' }}
                    onClick={() => handleOptionSelection('v1')}
                  />
                  <img
                    src={ImageProductv2}
                    alt="Thumbnail 3"
                    style={{ width: '20%', marginRight: '1px', cursor: 'pointer' }}
                    onClick={() => handleOptionSelection('v2')}
                  />
                  <img
                    src={ImageProductv3}
                    alt="Thumbnail 4"
                    style={{ width: '20%', marginRight: '1px', cursor: 'pointer' }}
                    onClick={() => handleOptionSelection('v3')}
                  />
                  <img
                    src={ImageProductv4}
                    alt="Thumbnail 5"
                    style={{ width: '20%', marginRight: '1px', cursor: 'pointer' }}
                    onClick={() => handleOptionSelection('v4')}
                  />
              </div>
            </div>
          </div>
            <div className="col-md-6 col-sm-12">
              <h2 className="">BLACKPINK - 1st FULL ALBUM [THE ALBUM]</h2>
              <div>
                <div className="price-sale margin">
                  <span className="price-inner">400.000 VND</span>
                  <del className="price-del">500.000 VND</del>
                </div>
              </div>
              <div className="margin">
                <label class="tag">New</label>
                <label class="tag">Freeship</label>
              </div>
              <a href="#" ><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> (12)
              <hr></hr>
              <div>
                <h5 className="margin">Ver:</h5>
                <div>
                <button className={`btn option-box ${activeVersion === 'v1' ? 'active' : ''}`}  onClick={() => handleOptionSelection('v1')}>Version 1</button>
                <button className={`btn option-box ${activeVersion === 'v2' ? 'active' : ''}`}  onClick={() => handleOptionSelection('v2')}>Version 2</button>
                <button className={`btn option-box ${activeVersion === 'v3' ? 'active' : ''}`} onClick={() => handleOptionSelection('v3')}>Version 3</button>
                <button className={`btn option-box ${activeVersion === 'v4' ? 'active' : ''}`} onClick={() => handleOptionSelection('v4')}>Version 4</button>
                </div>
                <div>
                  <h5 className="margin">Số lượng:</h5>
                  <label style={{ cursor: 'pointer' }} onClick={decreaseQuantity}><Minus/></label>
                  <input className="quantity" type="text" value={quantity} readOnly />
                  <label style={{ cursor: 'pointer' }} onClick={increaseQuantity}><Plus/></label>
                </div>
                <div>
                  <button className='btn add-cart' ><span className="label-l" style={{ color: 'var(--theme-primary1, #325DA8)'}}>Thêm vào giỏ hàng</span></button>
                  <button className='btn pay' ><span className="label-l" style={{ color: 'var(--theme-typo-label-light, #FFF)'}} >Thanh toán ngay</span></button>
                </div>
                <hr></hr>
                <div>
                  <h5 className="margin">Mô tả sản phẩm:</h5>
                  <p className="body-small margin">BLACKPINK - THE ALBUM (Random Ver.).<br/>
                   Ngày phát hành : 2020. 10. 06; <br/> 
                   VER : Ver.1 / Ver2 / Ver.3 / Ver.4; <br/> 
                   - PHOTOBOOK : 96p; <br/>
                   - POSTCARD SET : 4p 1set; <br/>
                   - CREDITS SHEET : 2p; <br/>
                   - LYRICS BOOKET : 14p; <br/> 
                   - PHOTOCARD : Random 2p out of 20p;<br/>
                   - POSTCARD : Random 2p out of 20p; <br/>
                   - STICKER : Random 1p out of 4p; <br/> 
                   - MOUNTED PHOTOCARD</p>
                </div>
            </div>
            </div>
            </div>
            <p className='center'
            style={{  marginTop: '60px', cursor: 'pointer' }}>
            <h3 >Sản phẩm liên quan </h3>
            <h6>Xem tất cả <a href="#"><Arrow/></a></h6>
            </p>
            <div className="product">
          <div className="row">
            <div className="col-md-3 product_1">
              <img src={img_product} alt="Product Image" />
                <div>
                  <span className="tag">Mới</span>
                  <span className="tag">Freeship</span>
                <div className="product-box-title">
                  <h4>
                    <a href="" title="j-hope (BTS) 'Jack In The Box' (HOPE Edition)">
                      j-hope (BTS) 'Jack In The Box' (HOPE Edition)
                    </a>
                  </h4>
                </div>
              <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> (12)
              <div className="product-box-price d-flex align-items-center">
                <div className="price-sale">
                  <span className="price-inner">400.000₫</span>
                </div>
                <del className="price-del">500.000₫</del>
              </div>
              </div>
            </div>

            <div className="col-md-3 product_1">
              <img src={img_product} alt="Product Image" />
                <div>
                  <span className="tag">Mới</span>
                  <span className="tag">Freeship</span>
                <div className="product-box-title">
                  <h4>
                    <a href="" title="j-hope (BTS) 'Jack In The Box' (HOPE Edition)">
                      j-hope (BTS) 'Jack In The Box' (HOPE Edition)
                    </a>
                  </h4>
                </div>
              <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> (12)
              <div className="product-box-price d-flex align-items-center">
                <div className="price-sale">
                  <span className="price-inner">400.000₫</span>
                </div>
                <del className="price-del">500.000₫</del>
              </div>
              </div>
            </div>

            <div className="col-md-3 product_1">
              <img src={img_product} alt="Product Image" />
                <div>
                  <span className="tag">Mới</span>
                  <span className="tag">Freeship</span>
                <div className="product-box-title">
                  <h4>
                    <a href="" title="j-hope (BTS) 'Jack In The Box' (HOPE Edition)">
                      j-hope (BTS) 'Jack In The Box' (HOPE Edition)
                    </a>
                  </h4>
                </div>
              <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> (12)
              <div className="product-box-price d-flex align-items-center">
                <div className="price-sale">
                  <span className="price-inner">400.000₫</span>
                </div>
                <del className="price-del">500.000₫</del>
              </div>
              </div>
            </div>

            <div className="col-md-3 product_1">
              <img src={img_product} alt="Product Image" />
                <div>
                  <span className="tag">Mới</span>
                  <span className="tag">Freeship</span>
                <div className="product-box-title">
                  <h4>
                    <a href="" title="j-hope (BTS) 'Jack In The Box' (HOPE Edition)">
                      j-hope (BTS) 'Jack In The Box' (HOPE Edition)
                    </a>
                  </h4>
                </div>
              <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> <a href="#"><Star /></a> (12)
              <div className="product-box-price d-flex align-items-center">
                <div className="price-sale">
                  <span className="price-inner">400.000₫</span>
                </div>
                  <del className="price-del">500.000₫</del>
                </div>
              </div>
            </div>
          </div>
        </div>

            </div>



    );
  };
  
  export default ProductDetailComponent;