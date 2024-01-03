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

    const [selectedCategory, setSelectedCategory] = useState(null)
   
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
                    <button className="rec-btn">Tất cả</button>
                    <button className="rec-btn">Album</button>
                    <button className="rec-btn">Lightstick</button>
                    <button className="rec-btn">Photobook</button>
                    <button className="rec-btn">Vinyl</button>
                    <button className="rec-btn">Merch</button>

                </div>
                <div className="col-md-3 col-lg-2">
                    <span className="mb-3 label-xl">Bộ lọc sản phẩm</span>
                    <div className="d-flex flex-column mb-4">
                        <label className="filtering">
                        <input type="checkbox" className="mycheckbox" />
                        <span className="label-m">Khuyến mãi</span>
                        </label>
                        <label className="filtering">
                        <input type="checkbox" className="mycheckbox" />
                        <span className="label-m">Sản phẩm mới</span>
                        </label>
                        <label className="filtering">
                        <input type="checkbox" className="mycheckbox" />
                        <span className="label-m">Sản phẩm hot</span>
                        </label>
                    </div>

                    <br />
                    <span className="mb-3 label-xl">Giá yêu thương</span>
                    <div className="d-flex flex-column mb-4">
                        <label className="filtering">
                        <input type="checkbox" className="mycheckbox" />
                        <span className="label-m">Giá tăng dần</span>
                        </label>
                        <label className="filtering">
                        <input type="checkbox" className="mycheckbox" />
                        <span className="label-m">Giá giảm dần</span>
                        </label>
                    </div>
                 </div>
                    
                <div className="col-md-9">

                    <Container>
                        <Row>
                            {currentItems.map((item, index) => (
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