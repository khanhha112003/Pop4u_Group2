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
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
import ArtistCardItem from "../../components/ArtistCardItem/ArtistCardItem";
import { Carousel, Card, Stack } from "react-bootstrap";


function HomePage() {
  const reviews = [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
  ];
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
           <Carousel style={{ height: 600 }}>
           {reviews.map((review, index) => (
            <Carousel.Item style={{ height: 600 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                  <HomepageProductItem
                    data={
                      {
                        product_name: "j-hope (BTS) 'Jack In The Box' (HOPE Edition)",
                        discount_price: 400000,
                        sell_price: 500000,
                        img_product: img_product
                      }}
                    onClickHandler={() => { }} />
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                  <HomepageProductItem
                    data={
                      {
                        product_name: "j-hope (BTS) 'Jack In The Box' (HOPE Edition)",
                        discount_price: 400000,
                        sell_price: 500000,
                        img_product: img_product
                      }}
                    onClickHandler={() => { }} />
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                  <HomepageProductItem
                    data={
                      {
                        product_name: "j-hope (BTS) 'Jack In The Box' (HOPE Edition)",
                        discount_price: 400000,
                        sell_price: 500000,
                        img_product: img_product
                      }}
                    onClickHandler={() => { }} />
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>


        <h2>Mới ra mắt. Nóng cả tay</h2>
        <h6>Xem tất cả <a href="#"><Arrow /></a></h6>

        <div className="product">
          <div className="row" >
            <HomepageProductItem
              data={
                {
                  product_name: "j-hope (BTS) 'Jack In The Box' (HOPE Edition)",
                  discount_price: 400.000,
                  sell_price: 500.000,
                  img_product: img_product
                }}
              onClickHandler={() => { }} />
            <HomepageProductItem  // them 1 item hehe ma e nho hoi nay a co gui cai vong for k
              data={
                {
                  product_name: "j-hope (BTS) 'Jack In The Box' (HOPE Edition)",
                  discount_price: 400000,
                  sell_price: 500000,
                  img_product: img_product
                }}
              onClickHandler={() => { }} />

            <HomepageProductItem  // them 1 item hehe ma e nho hoi nay a co gui cai vong for k
              data={
                {
                  product_name: "j-hope (BTS) 'Jack In The Box' (HOPE Edition)",
                  discount_price: 400000,
                  sell_price: 500000,
                  img_product: img_product
                }}
              onClickHandler={() => { }} />

            <HomepageProductItem  // them 1 item hehe ma e nho hoi nay a co gui cai vong for k
              data={
                {
                  product_name: "j-hope (BTS) 'Jack In The Box' (HOPE Edition)",
                  discount_price: 400000,
                  sell_price: 500000,
                  img_product: img_product
                }}
              onClickHandler={() => { }} />

          </div>
        </div>

        <h2>Idol siêu chất, nổi bần bật</h2>
        <h6>Xem tất cả nghệ sĩ<a href="#"><Arrow /></a></h6>
        <div className="artist" id="client-paginator">
          <ul className="pagination">
          <ArtistCardItem />
          <ArtistCardItem />
          <ArtistCardItem />
          </ul>
        </div>
      </div>
    </div>
  );
};
export { HomePage };
