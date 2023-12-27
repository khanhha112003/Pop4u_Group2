import "./HomePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Music } from './icons/icon_album.svg';
import { ReactComponent as Merch } from './icons/icon_merch.svg';
import { ReactComponent as Vinyl } from './icons/icon_vinyl.svg';
import { ReactComponent as Photobook } from './icons/icon_photobook.svg';
import { ReactComponent as Lightstick } from './icons/icon_lightstick.svg';
import { ReactComponent as Arrow } from './icons/icon_arrow.svg';

import React, { useState, useEffect } from 'react';
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
import ArtistCardItem from "../../components/ArtistCardItem/ArtistCardItem";
import HorizontalPagination from "../../components/HorizontalPagination/HorizontalPaginaton";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
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
                <button
                  onClick={() => console.log('View Album')}
                  type="button"
                  className="btn btn-default"
                >
                  <i className="fa fa-album" />
                  Xem ngay
                </button>
              </div>
              <a href="#"><Music /></a>
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
              <a href="#"><Merch /></a>
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
              <a href="#"><Vinyl /></a>
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
                <a href="#"><Photobook /></a>
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
                <a href="#"><Lightstick /></a>
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
                onClickHandler={() => { console.log("click") }}
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
                onClickHandler={() => { }}
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
