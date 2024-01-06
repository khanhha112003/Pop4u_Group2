import React, { useState, useLayoutEffect } from "react";
import { Carousel, Card, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
// Import your custom SVG icons
import { ReactComponent as CustomNextIcon } from "./icons/arrow_right.svg";
import { ReactComponent as CustomPrevIcon } from "./icons/arrow_left.svg";

const numberOfMaxItems = 4;

const HorizontalPagination = (
    { gap,
        items,
        itemWidth,
        itemHeight,
        paddingItem,
        background_color = 'var(--color-surface-light)',
        innerPadding = 0
    }) => {

    const [itemsPerPage, setItemsPerPage] = useState(Math.min(numberOfMaxItems, Math.floor(window.innerWidth / itemWidth)));

    useLayoutEffect(() => {
        const handleResize = () => {
            const currentMaxItem = Math.min(Math.floor(window.innerWidth / itemWidth), numberOfMaxItems)
            setItemsPerPage(currentMaxItem);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Carousel
            interval={null}
            indicators={false}
            style={{ height: itemHeight, margin: `0 -${gap / 2}px` }} // Set negative margin for gap
            nextIcon={<CustomNextIcon />} // Use custom SVG for next arrow
            prevIcon={<CustomPrevIcon />} // Use custom SVG for prev arrow
        >
            {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => (
                <Carousel.Item
                    key={index}
                    style={{
                        padding: innerPadding,
                        height: itemHeight,
                        backgroundColor: background_color,
                        border: 'none'
                    }}
                >
                    <Stack
                        direction="horizontal"
                        className="h-100 justify-content-center align-items-center"
                        gap={gap}
                    >
                        {items
                            .slice(index * itemsPerPage, (index + 1) * itemsPerPage)
                            .map((item, i) => (
                                <Card key={i} style={{ width: itemWidth, margin: paddingItem, padding: 0, height: "100%" }}>
                                    <Card.Body style={{ padding: 0 }}>
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
