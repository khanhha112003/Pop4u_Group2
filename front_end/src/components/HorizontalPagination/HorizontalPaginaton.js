import React from "react";
import { Carousel, Card, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your custom SVG icons
import { ReactComponent as CustomNextIcon } from "./icons/arrow_right.svg";
import { ReactComponent as CustomPrevIcon } from "./icons/arrow_left.svg";

const HorizontalPagination = ({ gap, items, itemWidth, itemHeight, paddingItem }) => {
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
      indicators={false}
      style={{ height: itemHeight, margin: `0 -${gap / 2}px` }} // Set negative margin for gap
      nextIcon={<CustomNextIcon />} // Use custom SVG for next arrow
      prevIcon={<CustomPrevIcon />} // Use custom SVG for prev arrow
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
                <Card key={i} style={{ width: itemWidth, margin: paddingItem, padding: 0 }}>
                  <Card.Body style={{padding: 0}}>
                    {item}
                  </Card.Body>
                </Card>
              ))}
          </Stack>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HorizontalPagination;
