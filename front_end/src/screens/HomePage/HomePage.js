import { Button } from "bootstrap";
import "./HomePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Music } from './icons/icon_album.svg';
import { ReactComponent as Merch } from './icons/icon_merch.svg';
import { ReactComponent as Vinyl } from './icons/icon_vinyl.svg';
import { ReactComponent as Photobook } from './icons/icon_photobook.svg';
import { ReactComponent as Lightstick } from './icons/icon_lightstick.svg';
import { ReactComponent as Arrow } from './icons/icon_arrow.svg';
import img_product from './icons/img_product.png'
import { ReactComponent as Star } from './icons/icon_star.svg';

function HomePage() {
  return (
    <div className="App">
      { /* TODO: fill here*/ }
      <h2>Danh mục sản phẩm</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4 album">
            <div className="d-flex justify-content-between">
              <div className="content">
                <h3>Album</h3>
                <p>Khám phá album từ những nghệ sĩ hàng đầu</p>
                <button
                  onClick={() => console.log('View Album')}
                  type="button"
                  className="btn btn-default"
                >
                  <i className="fa fa-album" />
                  Xem ngay
                </button>
              </div>
              <a href="#"><Music/></a>
            </div>
        </div>
        <div className="col-md-4 merch">
            <div className="d-flex justify-content-between">
              <div className="content">
                <h3>Merch</h3>
                <p>Vật phẩm ghi dấu thương hiệu, mang đầy cảm xúc</p>
                <button
                  onClick={() => console.log('View Merch')}
                  type="button"
                  className="btn btn-default"
                >
                  <i className="fa fa-merch" />
                  Xem ngay
                </button>
              </div>
              <a href="#"><Merch/></a>
            </div>
          </div>

          <div className="col-md-4 vinyl">
            <div className="d-flex justify-content-between">
              <div className="content">
                <h3>Vinyl</h3>
                <p>Đĩa than retro, dành cho người "sành" hướng về xưa cũ</p>
                <button
                  onClick={() => console.log('View Vinyl')}
                  type="button"
                  className="btn btn-default"
                >
                  <i className="fa fa-vinyl" />
                  Xem ngay
                </button>
              </div>
              <a href="#"><Vinyl/></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 photobook">
            <div className="d-flex justify-content-between">
              <div>
                <h3>Photobook</h3>
                <p>Những concept siêu đỉnh do các idol thể hiện qua các dịp quan trọng</p>
                <button
                  onClick={() => console.log('View Photobook')}
                  type="button"
                  className="btn btn-default"
                >
                  <i className="fa fa-photobook" />
                  Xem ngay
                </button>
              </div>
              <div>
                <a href="#"><Photobook/></a>
              </div>
            </div>
          </div>

          <div className="col-md-6 lightstick">
            <div className="d-flex justify-content-between">
              <div>
                <h3>Lightstick</h3>
                <p>Đẹp lỗng lẫy, sáng rạng ngời, một tình yêu với idol mãi</p>
                <button
                  onClick={() => console.log('View Lightstick')}
                  type="button"
                  className="btn btn-default"
                >
                  <i className="fa fa-lightstick" />
                  Xem ngay
                </button>
              </div>
              <div>
                <a href="#"><Lightstick/></a>
              </div>
            </div>
          </div>
        </div>

        <h2>Sale đến "ngất"</h2>
        <h6>Xem tất cả <a href="#"><Arrow/></a></h6>
        
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


        <h2>Mới ra mắt. Nóng cả tay</h2>
        <h6>Xem tất cả <a href="#"><Arrow/></a></h6>

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

        <h2>Idol siêu chất, nổi bần bật</h2>
        <h6>Xem tất cả nghệ sĩ<a href="#"><Arrow/></a></h6>


      </div>
    </div>
  );
};
export { HomePage };
