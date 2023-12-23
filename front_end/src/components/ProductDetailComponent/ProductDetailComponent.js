
import ImageProductMain from '../../theme/images/Blackpink-The_Album.png'
import ImageProductv1 from '../../theme/images/TA_v1.jpg'
import ImageProductv2 from '../../theme/images/TA_v2.jfif'
import ImageProductv3 from '../../theme/images/TA_v3.jpg'
import ImageProductv4 from '../../theme/images/TA_v4.jpg'
import './ProductDetailComponent.css'
import React, { useState } from 'react';
import 'react-bootstrap';
import { Carousel } from 'react-bootstrap';


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
    const [index, setIndex] = useState(0);
    const [option, setOption] = useState('Main');
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    const handleOptionSelection = (selectedOption) => {
      setOption(selectedOption);
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
              <div>
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

                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={ImageProductMain}
                    alt="Thumbnail 1"
                    style={{ width: '50px', height: '50px', margin: '0 5px', cursor: 'pointer' }}
                    onClick={() => handleOptionSelection('Main')}
                  />
                  <img
                    src={ImageProductv1}
                    alt="Thumbnail 2"
                    style={{ width: '50px', height: '50px', margin: '0 5px', cursor: 'pointer' }}
                    onClick={() => handleOptionSelection('v1')}
                  />
                  <img
                    src={ImageProductv2}
                    alt="Thumbnail 3"
                    style={{ width: '50px', height: '50px', margin: '0 5px', cursor: 'pointer' }}
                    onClick={() => handleOptionSelection('v2')}
                  />
                  <img
                    src={ImageProductv3}
                    alt="Thumbnail 3"
                    style={{ width: '50px', height: '50px', margin: '0 5px', cursor: 'pointer' }}
                    onClick={() => handleOptionSelection('v3')}
                  />
                  <img
                    src={ImageProductv4}
                    alt="Thumbnail 3"
                    style={{ width: '50px', height: '50px', margin: '0 5px', cursor: 'pointer' }}
                    onClick={() => handleOptionSelection('v4')}
                  />
              </div>
            </div>
          </div>
            <div className="col-md-6 col-sm-12">
              <h2 className="">BLACKPINK - 1st FULL ALBUM [THE ALBUM]</h2>
              <div>
                <div className="price-sale">
                  <span className="price-inner">400.000 VND</span>
                  <del className="price-del">500.000 VND</del>
                </div>
              </div>
              <div>
                <label class="tag">New</label>
                <label class="tag">Freeship</label>
              </div>
              <div>
                <h5>Option:</h5>
                <div style={{ marginTop: '20px' }}>
                <button className="btn option-box"  onClick={() => handleOptionSelection('v1')}>Version 1</button>
                <button className="btn option-box"  onClick={() => handleOptionSelection('v2')}>Version 2</button>
                <button className="btn option-box" onClick={() => handleOptionSelection('v3')}>Version 3</button>
                <button className="btn option-box" onClick={() => handleOptionSelection('v4')}>Version 4</button>
                </div>
                <div>
                  <h5>Số lượng:</h5>
                  <button onClick={decreaseQuantity}>-</button>
                  <input type="text" value={quantity} readOnly />
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <div>
                  <h5>Mô tả sản phẩm:</h5>
                  <p className="body-small">BLACKPINK - THE ALBUM (Random Ver.). Ngày phát hành : 2020. 10. 06; VER : Ver.1 / Ver2 / Ver.3 / Ver.4; PHOTOBOOK : 96p; POSTCARD SET : 4p 1set; CREDITS SHEET : 2p; LYRICS BOOKET : 14p; PHOTOCARD : Random 2p out of 20p; POSTCARD : Random 2p out of 20p; STICKER : Random 1p out of 4p; MOUNTED PHOTOCARD</p>
                </div>
            </div>
            </div>
            </div>
            
            </div>




    );
  };
  
  export default ProductDetailComponent;