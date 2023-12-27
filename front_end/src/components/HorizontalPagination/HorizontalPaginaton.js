import React from "react";
import { Carousel, Card, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const HorizontalPagination = ({ gap, items, itemWidth, itemHeight, padding }) => {
  const getItemsPerPage = () => {
    // Define the number of items to display based on window width
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1200) {
      return 3; // Display 3 items for large screens
    } else if (windowWidth >= 768) {
      return 2; // Display 2 items for medium screens
    } else {
      return 1; // Display 1 item for small screens
    }
  };

  const itemsPerPage = getItemsPerPage();

  return (
    <Carousel
      interval={null}
      style={{ height: itemHeight }}
    >
      {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => (
        <Carousel.Item key={index} style={{ height: itemHeight }}>
          <Stack
            direction="horizontal"
            className="h-100 justify-content-center align-items-center"
            gap={gap}
          >
            {items
              .slice(index * itemsPerPage, (index + 1) * itemsPerPage)
              .map((item, i) => (
                <Card key={i} style={{ width: itemWidth }}>
                  <Card.Body>{item}</Card.Body>
                </Card>
              ))}
            {items
              .slice(index * itemsPerPage, (index + 1) * itemsPerPage)
              .map((item, i) => (
                console.log(item)
              ))}
          </Stack>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HorizontalPagination;
