import { Carousel, Card, Stack } from "react-bootstrap";


const HorizontalPagination = ({ gap, items, itemwidth, itemHeight, padding  }) => {
    return (
        <Carousel style={{ height: itemHeight + padding}}>
           {reviews.map((review, index) => (
            <Carousel.Item style={{ height: itemHeight }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={gap}>
                    {
                        items.map((item, index) => (
                            <Card style={{ width: itemwidth }}>
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
                        ))
                    }
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
    );
};

export default HorizontalPagination;