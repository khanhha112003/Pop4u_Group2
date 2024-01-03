import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
import data from './data.js'
import { items } from './list_product.js'
import { Container, Row, Col, Pagination } from 'react-bootstrap';

const itemsPerPage = 16;

function ProductList() {
    const [index, setIndex] = useState(0);
    const { sort } = useParams();

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
   
//Active btn

    
    //Input filter
    const [filterName, setFilterName] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [filteredData, setFilteredData] = useState(items);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setFilterName(inputValue);
    
        const newFilteredItems = items.filter((item) =>
          item.product_name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredData(newFilteredItems);
        setCurrentPage(1); // Reset to the first page when searching
       

        // // Clear previous timeout
        // if (searchTimeout) {
        //     clearTimeout(searchTimeout);
        // }

        // // Set new timeout for 2 seconds
        // const newTimeout = setTimeout(() => {
        //     const newFilteredData = data.filter(artist =>
        //         artist.name.toLowerCase().includes(inputValue.toLowerCase())
        //     );
        //     setFilteredData(newFilteredData);
        // }, 150);

        // // Save the new timeout ID
        // setSearchTimeout(newTimeout);
    };
// filter 1
            const [isPromotion, setIsPromotion] = useState(false);
            const [isNewProduct, setIsNewProduct] = useState(false);
            const [isHotProduct, setIsHotProduct] = useState(false);

            const handlePromotionChange = (event) => {
                setIsPromotion(event.target.checked);
            };

            const handleNewProductChange = (event) => {
                setIsNewProduct(event.target.checked);
            };

            const handleHotProductChange = (event) => {
                setIsHotProduct(event.target.checked);
            };

            const filteredItems = filteredData.filter((item) => {
                const isPromotionItem = isPromotion ? item.is_sale : true;
                const isNew = isNewProduct ? item.is_new : true;
                const isHot = isHotProduct ? item.is_hot : true;

                return isPromotionItem && isNew && isHot;
            });

//filter 2
            const [ascendingPrice, setAscendingPrice] = useState(false);
            const [descendingPrice, setDescendingPrice] = useState(false);
          
            // Handler for ascending price
            const handleAscendingChange = () => {
              setAscendingPrice(!ascendingPrice);
              setDescendingPrice(false);
            };
          
            // Handler for descending price
            const handleDescendingChange = () => {
              setDescendingPrice(!descendingPrice);
              setAscendingPrice(false);
            };
          
            // Filtering based on price
            const filterByPrice = () => {
              let filtered = filteredData;
          
              if (ascendingPrice) {
                filtered = filtered.sort((a, b) => a.discount_price - b.discount_price);
              } else if (descendingPrice) {
                filtered = filtered.sort((a, b) => b.discount_price - a.discount_price);
              }
          
              setFilteredData(filtered);
            };

/// filter 3
            const [selectedCategory, setSelectedCategory] = useState(null);
            const filterByCategory = (category) => {
                setSelectedCategory(category);

                const filteredByCategory = items.filter((item) => item.category === category);

                setFilteredData(filteredByCategory);
                setCurrentPage(1); // Reset to the first page when changing the category
            };

            const showAllProducts = () => {
                setSelectedCategory(null); // Reset selected category to null
                setFilteredData(items); // Set filteredData back to all products
                setCurrentPage(1); // Reset to the first page when showing all products
            };

             
    return (


        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-center">
                    <div className='banner-product'>
                        <span className='head3'>Sản phẩm của chúng tôi</span>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className='search-product'>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-center">
                        <label htmlFor="filterInput" className='label-xxxl search-label'>Bạn Muốn Tìm Sản Phẩm Nào?</label>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-center">
                        <input
                        className='label-m'
                        type="text"
                        id="filterInput"
                        value={filterName}
                        onChange={handleInputChange}
                        placeholder="Tên sản phẩm..."
                        />
                    </div>
                </div>

                <div className="buttons col-sm-12 col-md-12 col-lg-12 col-xl-12 row justify-content-right justify-content-md-center">
                <button className="rec-btn" onClick={showAllProducts}>Tất cả</button>
                    <button className="rec-btn" onClick={() => filterByCategory('Album')}>Album</button>
                    <button className="rec-btn" onClick={() => filterByCategory('Lightstick')}>Lightstick</button>
                    <button className="rec-btn" onClick={() => filterByCategory('Photobook')}>Photobook</button>
                    <button className="rec-btn"onClick={() => filterByCategory('Vinyl')}>Vinyl</button>
                    <button className="rec-btn" onClick={() => filterByCategory('Merch')}>Merch</button>

                </div>
                <div className="col-md-3 col-lg-2">
                    <span className="mb-3 label-xl">Bộ lọc sản phẩm</span>
                    <div className="d-flex flex-column mb-4">
                    <div className="d-flex flex-column mb-4">
                        <label className="filtering">
                        <input
                            type="checkbox"
                            className="mycheckbox"
                            onChange={handlePromotionChange}
                        />
                        <span className="label-m">Khuyến mãi</span>
                        </label>
                        <label className="filtering">
                        <input
                            type="checkbox"
                            className="mycheckbox"
                            onChange={handleNewProductChange}
                        />
                        <span className="label-m">Sản phẩm mới</span>
                        </label>
                        <label className="filtering">
                        <input
                            type="checkbox"
                            className="mycheckbox"
                            onChange={handleHotProductChange}
                        />
                        <span className="label-m">Sản phẩm hot</span>
                        </label>
                    </div>
                    </div>

                    <br />
                    <span className="mb-3 label-xl">Giá yêu thương</span>
                    <div className="d-flex flex-column mb-4">
                        <label className="filtering">
                        <input 
                        type="checkbox"
                        className="mycheckbox"
                        checked={ascendingPrice}
                        onChange={handleAscendingChange} 
                        />
                        <span className="label-m">Giá tăng dần</span>
                        </label>
                        <label className="filtering">
                        <input 
                        type="checkbox"
                        className="mycheckbox"
                        checked={descendingPrice}
                        onChange={handleDescendingChange}
                        />
                        <span className="label-m">Giá giảm dần</span>
                        </label>
                    </div>
                 </div>
                    
                <div className="col-md-9">

                    <Container>
                        <Row>
                            {filteredItems.map((item, index) => (
                                <Col key={index} sm={3}>
                                    <HomepageProductItem
                                        key={'product' + index}
                                        data={item}
                                    />
                                </Col>
                            ))}
                        </Row>
                        <Row className="mt-3 d-flex justify-content-center">
                            <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Pagination>
                                    {[...Array(totalPages)].map((_, index) => (
                                        <Pagination.Item
                                            key={index + 1}
                                            active={index + 1 === currentPage}
                                            onClick={() => handlePageChange(index + 1)}
                                        >
                                            {index + 1}
                                        </Pagination.Item>
                                    ))}
                                </Pagination>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export { ProductList }