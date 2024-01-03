import "./HomePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Music } from './icons/icon_album.svg';
import { ReactComponent as Merch } from './icons/icon_merch.svg';
import { ReactComponent as Vinyl } from './icons/icon_vinyl.svg';
import { ReactComponent as Photobook } from './icons/icon_photobook.svg';
import { ReactComponent as Lightstick } from './icons/icon_lightstick.svg';
import { ReactComponent as Arrow } from './icons/icon_arrow.svg';
import { ReactComponent as NewReleases } from '../../theme/images/new_releases.svg';

import BestPriceIcon from './icons/icon_bestprice.png';
import FreeshipIcon from './icons/icon_freeship.png';
import EnviromentIcon from './icons/icon_enviroment.png';
import ChangeIcon from './icons/icon_change.png';
import React, { useState, useEffect } from 'react';


import { Col, Row, Button, Card, CardGroup } from 'react-bootstrap';
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
import HorizontalPagination from "../../components/HorizontalPagination/HorizontalPaginaton";
import { ArtistCardItem } from "../../components/ArtistCardItem/ArtistCardItem";
import NotFoundPage from "../Error/NotFoundError";
import LoadingPage from "../Loading/LoadingPage";

import { basicGetRequets, combineMultipleRequests } from "../../app_logic/APIHandler";

function HomePage() {
  const [content, setContent] = useState({ new_product: [], sale_product: [], hot_artits: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const newProductRequest = basicGetRequets("/product/product_list", { type_filter: "new", limit: 12 });
    const saleProductRequest = basicGetRequets("/product/product_list", { type_filter: "sale", limit: 12 });
    const hotArtistRequest = basicGetRequets("/artist/artist_list", { type_filter: "hot", limit: 4 });
    const result = combineMultipleRequests([newProductRequest, saleProductRequest, hotArtistRequest])
      .then((responses) => {
        let data = {
          new_product: responses[0].data,
          sale_product: responses[1].data,
          hot_artits: responses[2].data
        }
        setContent(data)
      }).catch(error => {
        setError(error);
      }).finally(() => {
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <NotFoundPage />
  }

  const handleClickAlbum = () => {
    window.location.href = '/product_list/album';
  };

  const handleClickMerch = () => {
    window.location.href = '/product_list/merch';
  };

  const handleClickVinyl = () => {
    window.location.href = '/product_list/vinyl';
  };

  const handleClickPhotobook = () => {
    window.location.href = '/product_list/photobook';
  };

  const handleClickLightstick = () => {
    window.location.href = '/product_list/lightstick';
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="homepage-header">
              <h4 className="head4">Danh mục sản phẩm</h4>
              <a href="/artists"><span className="label-l">Xem tất cả sản phẩm</span><Arrow/></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex justify-content-between" style={{padding: '0px'}}>
            <div className="d-flex justify-content-between cat-card">
              <div className="cat-card-content">
                <h5 className="head5">Album</h5>
                <p className="body-small">Khám phá album từ những nghệ sĩ hàng đầu</p>
                <button
                  className="cat-card-button"
                  onClick={handleClickAlbum}
                >
                  <span className="label-m">Xem ngay</span>
                </button>
              </div>
              <div className="cat-card-icon">
                <Music width="100%" height="100%"/>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex justify-content-between" style={{padding: '0px'}}>
            <div className="d-flex justify-content-between cat-card">
              <div className="cat-card-content">
                <h5 className="head5">Merch</h5>
                <p className="body-small">Vật phẩm ghi dấu thương hiệu, mang đầy cảm xúc</p>
                <button
                  className="cat-card-button"
                  onClick={handleClickMerch}
                >
                  <span className="label-m">Xem ngay</span>
                </button>
              </div>
              <div className="cat-card-icon">
                <Merch width="100%" height="100%"/>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex justify-content-between" style={{padding: '0px'}}>
            <div className="d-flex justify-content-between cat-card">
              <div className="cat-card-content">
                <h5 className="head5">Vinyl</h5>
                <p className="body-small">Đĩa than retro, dành cho người "sành" hướng về xưa cũ</p>
                <button
                  className="cat-card-button"
                  onClick={handleClickVinyl}
                >
                  <span className="label-m">Xem ngay</span>
                </button>
              </div>
              <div className="cat-card-icon">
                <Vinyl width="100%" height="100%"/>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-between" style={{padding: '0px'}}>
            <div className="d-flex justify-content-between cat-card">
              <div className="cat-card-content">
                <h5 className="head5">Photobook</h5>
                <p className="body-small">Những concept siêu đỉnh do các idol thể hiện qua các dịp quan trọng</p>
                <button
                  className="cat-card-button"
                  onClick={handleClickPhotobook}
                >
                  <span className="label-m">Xem ngay</span>
                </button>
              </div>
              <div className="cat-card-icon">
                <Photobook width="100%" height="100%"/>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 d-flex justify-content-between" style={{padding: '0px'}}>
            <div className="d-flex justify-content-between cat-card">
              <div className="cat-card-content">
                <h5 className="head5">Lightstick</h5>
                <p className="body-small">Đẹp lỗng lẫy, sáng rạng ngời, một tình yêu với idol mãi</p>
                <button
                  className="cat-card-button"
                  onClick={handleClickLightstick}
                >
                  <span className="label-m">Xem ngay</span>
                </button>
              </div>
              <div className="cat-card-icon">
                <Lightstick/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="homepage-header">
              <h4 className="head4">Sale đến "ngất".</h4>
              <a href="#"><span className="label-l">Xem tất cả </span><Arrow/></a>
            </div>
          </div>
          <div className="col-12">
            <div className="product" style={{ marginBottom: 40 }}>
              <HorizontalPagination
                key={"sale_product"}
                gap={10} // Adjust the gap between items as needed
                background_color="white"
                items={content.sale_product.map((item, index) => (
                  <HomepageProductItem
                    key={index}
                    data={item}
                  />
                ))}
                itemWidth={250} 
                itemHeight={425} 
                paddingItem={10} 
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="homepage-header">
              <h4 className="head4">Mới ra mắt. Nóng cả tay.</h4>
              <a href="#"><span className="label-l">Xem tất cả </span><Arrow/></a>
            </div>
          </div>
          <div className="col-12">
            <div className="product" style={{ marginBottom: 30 }}>
              <HorizontalPagination
                key={"hot_product"}
                gap={10} // Adjust the gap between items as needed
                background_color="white"
                items={content.new_product.map((item, index) => (
                  <HomepageProductItem
                    key={index}
                    data={item}
                  />
                ))}
                itemWidth={250} 
                itemHeight={425} 
                paddingItem={10} 
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="homepage-header">
              <h4 className="head4">Idol siêu chất, nổi bần bật.</h4>
              <a href="/artists"><span className="label-l">Xem tất cả nghệ sĩ </span><Arrow/></a>
            </div>

          </div>
        </div>
        <div className="artist" style={{ marginBottom: 30 }}>
          <Row xs={1} md={2} className="g-4">
            {content.hot_artits.map((data, index) => (
              <Col key={index}>
                <ArtistCardItem
                  data={data}
                  onMoreInfoClick={() => { /* Your click handler logic here */ }}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="homepage-header">
              <h4 className="head4">Mua hàng tự tin. Dẹp đi vặt vãnh.</h4>
            </div>
          </div>
          {
            [
              {
                title: "Giá tốt nhất.",
                img_src: BestPriceIcon,
                link: '#'
              },
              {
                title: "Freeship từ 500K.",
                img_src: FreeshipIcon,
                link: '#'
              },
              {
                title: "Vì môi trường.",
                img_src: EnviromentIcon,
                link: '#'
              },
              {
                title: "Miễn phí đổi trả.",
                img_src: ChangeIcon,
                link: '#'
              }
            ].map((variant) => (
              <div key={variant.title} className="col-sm-12 col-md-6 col-xl-3 col-lg-3">
                <div className="benefit-card">
                  <div className="benefit">
                    {/* <div>{variant.img_src}</div> */}
                    <img src={variant.img_src} alt={variant.title}/>
                    <h6 className="head6">{variant.title}</h6>
                  </div>
                  <div className="benefit-reference">
                    <a href={variant.link}><span className="label-l">Tham khảo </span><Arrow/></a>
                  </div>
                </div>
              </div>
              )
            )
            
          }
          {/* <div className="col-sm-12 col-md-6 col-xl-4 col-lg-4">

            <CardGroup style={{height: 150}} key={"bread_crub"}>
            {
            [
              {
                title: "Giá tốt nhất.",
                img_src: BestPriceIcon
              },
              {
                title: "Freeship từ 500K.",
                img_src: FreeshipIcon
              },
              {
                title: "Vì môi trường.",
                img_src: EnviromentIcon
              },
              {
                title: "Miễn phí đổi trả.",
                img_src: ChangeIcon
              }
            ].map((variant) => (
            <Card key={'card_' + variant.title} 
                  style={
                    {
                      width: '100%', 
                      height: '100%', 
                      padding: 0, 
                      margin: 10,
                      borderRadius: 20,
                      overflow: 'hidden'
                    }
                  }>
              <Col 
                  md={6} 
                  style={{ 
                    backgroundColor: '#D8E2FF', 
                    width: '100%',
                    height: '100%',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}
                >
                <div
                  style={{ textAlign: 'center' }}>
                  <img
                    src={variant.img_src}
                    alt={variant.img_src}
                    style={{
                      width: 25,
                      height: 25,
                      objectFit: 'contain',
                      marginBottom: '10px',
                    }}
                  />
                  <h6
                    style={{ fontWeight: 600 }}>
                    {variant.title}
                  </h6>   
                  <p style={{fontSize: 14}}>
                      Tham khảo
                      <a href="#" onClick={() => {}}>
                          <Arrow />
                      </a>
                  </p>
                </div>  
              </Col>
            </Card>
          ))}
          </CardGroup>

          </div> */}
        </div>
      </div>
    </div>
  );
};
export { HomePage };
