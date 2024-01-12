import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { basicGetRequets } from "../../app_logic/APIHandler.js";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import LoadingPage from "../Loading/LoadingPage.js";
import NotFoundPage from "../Error/NotFoundError.js";

const itemsPerPage = 16;

function filterWithFilterInfo(items, filter_info = {}) {
    var filterItemWithCategory = [];
    if (filter_info.category === "All") {
        filterItemWithCategory = items
    } else {
        filterItemWithCategory = items.filter((item) => { return item.category === filter_info.category });
    }
    var filteredItemsWithFilterName = filterItemWithCategory
    if (filter_info.filterName !== "") {
        filteredItemsWithFilterName = filterItemWithCategory.filter((item) => item.product_name.toLowerCase().includes(filter_info.filterName.toLowerCase()));
    }
    var filteredItemsWithSale = filteredItemsWithFilterName
    if (filter_info.isSaleProduct) {
        filteredItemsWithSale = filteredItemsWithFilterName.filter((item) => item.is_sale);
    }
    var filteredItemsWithNew = filteredItemsWithSale
    if (filter_info.isNewProduct) {
        filteredItemsWithNew = filteredItemsWithSale.filter((item) => item.is_new);
    }
    var filteredItemsWithHot = filteredItemsWithNew
    if (filter_info.isHotProduct) {
        filteredItemsWithHot = filteredItemsWithNew.filter((item) => item.is_hot);
    }
    if (filter_info.ascendingPrice || filter_info.descendingPrice) {
        filteredItemsWithHot.sort((a, b) => {
            const a_price = (a.discount_price !== undefined && a.discount_price !== 0) ? a.discount_price : a.sell_price;
            const b_price = (b.discount_price !== undefined && b.discount_price !== 0) ? b.discount_price : b.sell_price;

            if (filter_info.ascendingPrice) {
                return a_price - b_price;
            } else if (filter_info.descendingPrice) {
                return b_price - a_price;
            } else {  
                return 0;
            }
        });
    }
    return filteredItemsWithHot;
}

function calulatePageInformation(items, currentPage = 1) {
    const totalPage = Math.ceil(items.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = items.slice(start, end);
    return { filtered_product: items, current_page: currentPage, current_item: currentItems, total_page: totalPage };
}

function ProductList() {
    const { sort } = useParams();
    const [total_product, setTotalProduct] = useState([]);
    const [currentPageInfo, setCurrentPageInfo] = useState({ filtered_product: [], current_page: 0, current_item: [], total_page: 0 });
    const [filter_info, setFilterInfo] = useState({
        isSaleProduct: false,
        isNewProduct: false,
        isHotProduct: false,
        ascendingPrice: false,
        descendingPrice: false,
        category: (sort === undefined || sort === "") ? "All" : sort.charAt(0).toUpperCase() + sort.slice(1),
        filterName: ""
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const handlePageChange = (page) => {
        const newState = calulatePageInformation(currentPageInfo.filtered_product, page);
        setCurrentPageInfo(newState);
    };

    useEffect(() => {
        const reg = basicGetRequets("/product/product_list", { type_filter: "all", limit: 1000 });

        reg.then((data) => {
            const serverItem = data.data.list_product;
            const filteredItems = filterWithFilterInfo(serverItem, filter_info);
            const newState = calulatePageInformation(filteredItems);
            setTotalProduct(serverItem);
            setCurrentPageInfo(newState);
        }).catch(error => {
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    //Input filter
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const newFilterInfo = { ...filter_info, filterName: inputValue };
        const filteredItems = filterWithFilterInfo(total_product, newFilterInfo);
        const newState = calulatePageInformation(filteredItems);
        setFilterInfo(newFilterInfo);
        setCurrentPageInfo(newState);
    };

    const handleSaleProductChange = (event) => {
        const newFilterInfo = { ...filter_info, isSaleProduct: event.target.checked };
        const filteredItems = filterWithFilterInfo(total_product, newFilterInfo);
        const newState = calulatePageInformation(filteredItems);
        setFilterInfo(newFilterInfo);
        setCurrentPageInfo(newState);
    };

    const handleNewProductChange = (event) => {
        const newFilterInfo = { ...filter_info, isNewProduct: event.target.checked };
        const filteredItems = filterWithFilterInfo(total_product, newFilterInfo);
        const newState = calulatePageInformation(filteredItems);
        setFilterInfo(newFilterInfo);
        setCurrentPageInfo(newState);
    };

    const handleHotProductChange = (event) => {
        const newFilterInfo = { ...filter_info, isHotProduct: event.target.checked };
        const filteredItems = filterWithFilterInfo(total_product, newFilterInfo);
        const newState = calulatePageInformation(filteredItems);
        setCurrentPageInfo(newState);
        setFilterInfo(newFilterInfo);
    };


    // Handler for price price
    const handleRadioChange = (value) => {
        var newFilterInfo = {};
        if (value === 'ascending') {
            newFilterInfo = { ...filter_info, ascendingPrice: true, descendingPrice: false };
        } else if (value === 'descending') {
            newFilterInfo = { ...filter_info, ascendingPrice: false, descendingPrice: true };
        }
        const filteredItems = filterWithFilterInfo(total_product, newFilterInfo);
        const newState = calulatePageInformation(filteredItems);
        setCurrentPageInfo(newState);
        setFilterInfo(newFilterInfo);
    };

    /// filter 3
    const filterByCategory = (category) => {
        // const filteredByCategory = items.filter((item) => item.category === category);
        const newFilterInfo = { ...filter_info, category: category };
        const filteredItems = filterWithFilterInfo(total_product, newFilterInfo);
        const newState = calulatePageInformation(filteredItems);
        setCurrentPageInfo(newState);
        setFilterInfo(newFilterInfo);
    };

    const clearFilter = () => {
        const newFilterInfo = { isSaleProduct: false, isNewProduct: false, isHotProduct: false, ascendingPrice: false, descendingPrice: false, category: "All", filterName: "" };
        const filteredItems = filterWithFilterInfo(total_product, newFilterInfo);
        const newState = calulatePageInformation(filteredItems);
        setCurrentPageInfo(newState);
        setFilterInfo(newFilterInfo);
    }

    if (loading) {
        return <LoadingPage />;
    }

    if (error) {
        return <NotFoundPage />
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-center text-center">
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
                            // value={filterName}
                            onChange={handleInputChange}
                            placeholder="Tên sản phẩm..."
                        />
                    </div>
                </div>

                <div className="buttons col-sm-12 col-md-12 col-lg-12 col-xl-12 row justify-content-right justify-content-md-center">
                      <button
                        className={`rec-btn ${filter_info.category === 'All' ? 'active' : ''}`}
                        onClick={() => filterByCategory('All')}>
                        Tất cả
                    </button>
                    <button
                        className={`rec-btn ${filter_info.category === 'Album' ? 'active' : ''}`}
                        onClick={() => filterByCategory('Album')}>
                        Album
                    </button>
                    <button
                        className={`rec-btn ${filter_info.category === 'Lightstick' ? 'active' : ''}`}
                        onClick={() => filterByCategory('Lightstick')}>
                        Lightstick
                    </button>
                    <button
                        className={`rec-btn ${filter_info.category === 'Photobook' ? 'active' : ''}`}
                        onClick={() => filterByCategory('Photobook')}>
                        Photobook
                    </button>
                    <button
                        className={`rec-btn ${filter_info.category === 'Vinyl' ? 'active' : ''}`}
                        onClick={() => filterByCategory('Vinyl')}>
                        Vinyl
                    </button>
                    <button
                        className={`rec-btn ${filter_info.category === 'Merch' ? 'active' : ''}`}
                        onClick={() => filterByCategory('Merch')}>
                        Merch
                    </button>

                </div>
                <div className="col-md-3 col-lg-2">
                    <span className="mb-3 label-xl">Bộ lọc sản phẩm</span>
                    <div className="d-flex flex-column mb-4" style={{ marginLeft: '-10px'}}>
                        <div className="d-flex flex-column mb-4">
                            <label className="filtering">
                                <input
                                    type="checkbox"
                                    className="mycheckbox"
                                    onChange={handleSaleProductChange}
                                    checked={filter_info.isSaleProduct}
                                />
                                <span className="label-m">Khuyến mãi</span>
                            </label>
                            <label className="filtering">
                                <input
                                    type="checkbox"
                                    className="mycheckbox"
                                    onChange={handleNewProductChange}
                                    checked={filter_info.isNewProduct}
                                />
                                <span className="label-m">Sản phẩm mới</span>
                            </label>
                            <label className="filtering">
                                <input
                                    type="checkbox"
                                    className="mycheckbox"
                                    onChange={handleHotProductChange}
                                    checked={filter_info.isHotProduct}
                                />
                                <span className="label-m">Sản phẩm hot</span>
                            </label>
                        </div>
                    </div>

                    <br />
                    <span className="mb-3 label-xl">Giá yêu thương</span>
                    <div className="d-flex flex-column mb-4" style={{ marginLeft: '-15px'}}>
                        <label className="filtering">
                            <input
                                type="radio" style={{ margin: '3px' }}
                                value="ascending"
                                checked={filter_info.ascendingPrice}
                                onChange={() => handleRadioChange('ascending')}
                            />
                            <span className="label-m">Giá tăng dần</span>
                        </label>
                        <label className="filtering" >
                            <input
                                type="radio" style={{ margin: '3px' }}
                                value="descending"
                                checked={filter_info.descendingPrice}
                                onChange={() => handleRadioChange('descending')}
                            />
                            <span className="label-m">Giá giảm dần</span>
                        </label>
                    </div>

                    <br />
                    <div className="d-flex flex-column mb-4">
                        <Button onClick={clearFilter} variant="outline-primary" className="filtering">
                            Xoá bộ lọc
                        </Button>
                    </div>
                </div>

                <div className="col-md-9" style={{ width: '80%' }}>
                    <Container>
                        <Row>
                            {currentPageInfo.current_item.map((item, index) => (
                                <Col key={index} sm={3}>
                                    <HomepageProductItem
                                        key={'product' + index}
                                        data={item}
                                    />
                                </Col>
                            ))}
                        </Row>
                        <Row className="mt-3 d-flex justify-content-center">
                            <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Pagination>
                                    {[...Array(currentPageInfo.total_page)].map((_, index) => (
                                        <Pagination.Item
                                            key={index + 1}
                                            active={index + 1 === currentPageInfo.current_page}
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