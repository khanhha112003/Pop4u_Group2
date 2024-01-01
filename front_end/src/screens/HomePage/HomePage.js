import "./HomePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Music } from './icons/icon_album.svg';
import { ReactComponent as Merch } from './icons/icon_merch.svg';
import { ReactComponent as Vinyl } from './icons/icon_vinyl.svg';
import { ReactComponent as Photobook } from './icons/icon_photobook.svg';
import { ReactComponent as Lightstick } from './icons/icon_lightstick.svg';
import { ReactComponent as Arrow } from './icons/icon_arrow.svg';
import BestPriceIcon from './icons/icon_bestprice.png';
import FreeshipIcon from './icons/icon_freeship.png';
import EnviromentIcon from './icons/icon_enviroment.png';
import ChangeIcon from './icons/icon_change.png';
import React, { useState, useEffect } from 'react';

import { Col, Row, Button, Card, CardGroup } from 'react-bootstrap';
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
import HorizontalPagination from "../../components/HorizontalPagination/HorizontalPaginaton";
import ArtistCardItem from "../../components/ArtistCardItem/ArtistCardItem";
import NotFoundPage from "../Error/NotFoundError";
import LoadingPage from "../Loading/LoadingPage";

import { basicGetRequets, combineMultipleRequests } from "../../app_logic/APIHandler";

function HomePage() {
  const [content, setContent] = useState({ new_product: [], sale_product: [], hot_artits: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const newProductRequest = basicGetRequets("/product_list", { type: "new" });
    const saleProductRequest = basicGetRequets("/product_list", { type: "sale" });
    const hotArtistRequest = basicGetRequets("/artist_list", { type: "hot" });
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

  return (
    <div className="App">
      <h2>Danh mục sản phẩm</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4 album">
            <div className="d-flex justify-content-between">
              <div className="content">
                <h3>Album</h3>
                <p>Khám phá album từ những nghệ sĩ hàng đầu</p>
                <Button
                  href="/product_list/album"
                  style={{
                    color: "black",
                    borderRadius: 20,
                    border: '1px solid var(--color-primary-light)'
                  }}
                  variant="outline-primary"
                >Xem ngay
                </Button>
              </div>
              <div>
                <Music />
              </div>
            </div>
          </div>

          <div className="col-md-4 merch">
            <div className="d-flex justify-content-between">
              <div className="content">
                <h3>Merch</h3>
                <p>Vật phẩm ghi dấu thương hiệu, mang đầy cảm xúc</p>
                <Button
                  href="/product_list/merch"
                  style={{
                    color: "black",
                    borderRadius: 20,
                    border: '1px solid var(--color-primary-light)'
                  }}
                  variant="outline-primary"
                >Xem ngay
                </Button>
              </div>
              <div>
                <Merch />
              </div>
            </div>
          </div>

          <div className="col-md-4 vinyl">
            <div className="d-flex justify-content-between">
              <div className="content">
                <h3>Vinyl</h3>
                <p>Đĩa than retro, dành cho người "sành" hướng về xưa cũ</p>
                <Button
                  href="/product_list/vynil"
                  style={{
                    color: "black",
                    borderRadius: 20,
                    border: '1px solid var(--color-primary-light)'
                  }}
                  variant="outline-primary"
                >Xem ngay
                </Button>
              </div>
              <div>
                <Vinyl />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 photobook">
            <div className="d-flex justify-content-between">
              <div>
                <h3>Photobook</h3>
                <p>Những concept siêu đỉnh do các idol thể hiện qua các dịp quan trọng</p>
                <Button
                  href="/product_list/photobook"
                  style={{
                    color: "black",
                    borderRadius: 20,
                    border: '1px solid var(--color-primary-light)'
                  }}
                  variant="outline-primary"
                >Xem ngay
                </Button>
              </div>
              <div>
                <Photobook />
              </div>
            </div>
          </div>

          <div className="col-md-6 lightstick">
            <div className="d-flex justify-content-between">
              <div>
                <h3>Lightstick</h3>
                <p>Đẹp lỗng lẫy, sáng rạng ngời, một tình yêu với idol mãi</p>
                <Button
                  href="/product_list/lightstick"
                  style={{
                    color: "black",
                    borderRadius: 20,
                    border: '1px solid var(--color-primary-light)'
                  }}
                  variant="outline-primary"
                >Xem ngay
                </Button>
              </div>
              <div>
                <Lightstick />
              </div>
            </div>
          </div>
        </div>

        <h2 style={{ marginTop: 40 }}>Sale đến "ngất"</h2>
        <h6>Xem tất cả <a href="#"><Arrow /></a></h6>

        <div className="product" style={{ marginBottom: 40 }}>
          <HorizontalPagination
            key={"sale_product"}
            gap={10} // Adjust the gap between items as needed
            background_color="white"
            items={content.sale_product.map((item, index) => (
              <HomepageProductItem
                key={index}
                data={{
                  product_name: item.product_name,
                  discount_price: item.discount_price,
                  sell_price: item.sell_price,
                  img_product: item.img_product,
                  rating_detail: item.rating_detail,
                  rating: item.rating,
                  special_badge: item.special_badge
                }}
              />
            ))}
            itemWidth={250} 
            itemHeight={450} 
            paddingItem={10} 
          />
        </div>


        <h2>Mới ra mắt. Nóng cả tay</h2>
        <h6>Xem tất cả <a href="#"><Arrow /></a></h6>

        <div className="product" style={{ marginBottom: 30 }}>
          <HorizontalPagination
            key={"hot_product"}
            gap={10} // Adjust the gap between items as needed
            background_color="white"
            items={content.new_product.map((item, index) => (
              <HomepageProductItem
                key={index}
                data={{
                  product_name: item.product_name,
                  discount_price: item.discount_price,
                  sell_price: item.sell_price,
                  img_product: item.img_product,
                  rating_detail: item.rating_detail,
                  rating: item.rating,
                  special_badge: item.special_badge
                }}
              />
            ))}
            itemWidth={250} 
            itemHeight={450} 
            paddingItem={20}
          />
        </div>

        <h2>Idol siêu chất, nổi bần bật</h2>
        <h6>Xem tất cả nghệ sĩ<a href="#"><Arrow /></a></h6>
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
        <h2>Mua hàng tự tin, dẹp đi vặt vãnh</h2>
        <CardGroup style={{height: 150}} key={"bread_crub"}>
          {
          [
            {
              title: "Giá tốt nhất",
              img_src: BestPriceIcon
            },
            {
              title: "Freeship từ 500k",
              img_src: FreeshipIcon
            },
            {
              title: "Vì môi trường",
              img_src: EnviromentIcon
            },
            {
              title: "Miễn phí đổi trả",
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
      </div>
    </div>
  );
};
export { HomePage };
