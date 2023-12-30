import "./HomePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Music } from './icons/icon_album.svg';
import { ReactComponent as Merch } from './icons/icon_merch.svg';
import { ReactComponent as Vinyl } from './icons/icon_vinyl.svg';
import { ReactComponent as Photobook } from './icons/icon_photobook.svg';
import { ReactComponent as Lightstick } from './icons/icon_lightstick.svg';
import { ReactComponent as Arrow } from './icons/icon_arrow.svg';

import React, { useState, useEffect } from 'react';
import LoadingPage from "../Loading/LoadingPage";
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
import ArtistCardItem from "../../components/ArtistCardItem/ArtistCardItem";
import HorizontalPagination from "../../components/HorizontalPagination/HorizontalPaginaton";
import {Col, Row, Button} from 'react-bootstrap';
import NotFoundPage from "../Error/NotFoundError";

function HomePage() {
  const dummy_product = [
    {
      product_name: "BTS Photocard",
      discount_price: 0,
      sell_price: 300,
      rating: 4,
      numOfRating: 100,
      img_product: "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
      product_name: "BTS Photocard",
      discount_price: 0,
      sell_price: 300,
      rating: 4,
      numOfRating: 100,
      img_product: "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
      product_name: "BTS Photocard",
      discount_price: 0,
      sell_price: 300,
      rating: 4,
      numOfRating: 10,
      img_product: "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
      product_name: "BTS Photocard",
      discount_price: 200,
      sell_price: 300,
      rating: 4,
      numOfRating: 1,
      img_product: "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
      product_name: "BTS Photocard",
      discount_price: 200,
      sell_price: 300,
      rating: 4,
      numOfRating: 1,
      img_product: "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
      product_name: "BTS Photocard",
      discount_price: 200,
      sell_price: 300,
      rating: 4,
      numOfRating: 1,
      img_product: "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
      product_name: "BTS Photocard",
      discount_price: 200,
      sell_price: 300,
      rating: 4,
      numOfRating: 1,
      img_product: "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
      product_name: "BTS Photocard",
      discount_price: 200,
      sell_price: 300,
      rating: 4,
      numOfRating: 1,
      img_product: "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
  ]

  const dummy_artist = [
    {
      artist_name: "BTS",
      img_artist: "https://i.pinimg.com/originals/6a/6e/9e/6a6e9e0b6b5b9b0b9b0b9b0b9b0b9b0b.jpg",
    },
    {
      artist_name: "BTS",
      img_artist: "https://i.pinimg.com/originals/6a/6e/9e/6a6e9e0b6b5b9b0b9b0b9b0b9b0b9b0b.jpg",
    },
    {
      artist_name: "BTS",
      img_artist: "https://i.pinimg.com/originals/6a/6e/9e/6a6e9e0b6b5b9b0b9b0b9b0b9b0b9b0b.jpg",
    },
    {
      artist_name: "BTS",
      img_artist: "https://i.pinimg.com/originals/6a/6e/9e/6a6e9e0b6b5b9b0b9b0b9b0b9b0b9b0b.jpg",
    },
    ]
  const [artist, setArtist] = useState(dummy_artist);
  const [products, setProduct] = useState(dummy_product);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/test_product');
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        // setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty array ensures that this effect runs only once, like componentDidMount

  if (loading) {
    return  <LoadingPage/>;
  }

  if (error) {
    return <NotFoundPage/>
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
              <Music/>
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
              <Merch/>
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
              <Vinyl/>
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

        <h2>Sale đến "ngất"</h2>
        <h6>Xem tất cả <a href="#"><Arrow /></a></h6>

        <div className="product">
          <HorizontalPagination
            gap={10} // Adjust the gap between items as needed
            items={products.map((item, index) => (
              <HomepageProductItem
                key={index}
                data={{
                  product_name: item.product_name,
                  discount_price: item.discount_price,
                  sell_price: item.sell_price,
                  img_product: item.img_product,
                  numOfRating: item.numOfRating,
                  rating: item.rating,
                }}
              />
            ))}
            itemWidth={250} // Set the width of each item as needed
            itemHeight={550} // Set the height of each item as needed
            paddingItem={20} // Set the padding as needed
          />
        </div>


        <h2>Mới ra mắt. Nóng cả tay</h2>
        <h6>Xem tất cả <a href="#"><Arrow /></a></h6>

        <div className="product">
          <HorizontalPagination
            gap={10} // Adjust the gap between items as needed
            items={products.map((item, index) => (
              <HomepageProductItem
                key={index}
                data={{
                  product_name: item.product_name,
                  discount_price: item.discount_price,
                  sell_price: item.sell_price,
                  img_product: item.img_product,
                }}
              />
            ))}
            itemWidth={250} // Set the width of each item as needed
            itemHeight={550} // Set the height of each item as needed
            paddingItem={20} // Set the padding as needed
          />
        </div>

        <h2>Idol siêu chất, nổi bần bật</h2>
        <h6>Xem tất cả nghệ sĩ<a href="#"><Arrow /></a></h6>
        <div className="artist">
          <Row xs={1} md={2} className="g-4">
            {artist.map((data, index) => (
              <Col key={index}>
                <ArtistCardItem
                  data={data}
                  onMoreInfoClick={() => { /* Your click handler logic here */ }}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};
export { HomePage };
