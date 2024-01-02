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
    const [filterName, setFilterName] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [filteredData, setFilteredData] = useState(data);

    const handleFilterChange = event => {
        const inputValue = event.target.value;
        setFilterName(inputValue);

        // Clear previous timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        // Set new timeout for 2 seconds
        const newTimeout = setTimeout(() => {
            const newFilteredData = data.filter(artist =>
                artist.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredData(newFilteredData);
        }, 150);

        // Save the new timeout ID
        setSearchTimeout(newTimeout);
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
                            onChange={handleFilterChange}
                            placeholder="Hãy điền tên sản phẩm vào đây..."
                        />
                    </div>
                </div>

                <div className="buttons col-sm-12 col-md-12 col-lg-12 col-xl-12 row justify-content-right justify-content-md-center">
                    <button className="rec-btn">BTS</button>
                    <button className="rec-btn">NCT</button>
                    <button className="rec-btn">Blackpink</button>
                    <button className="rec-btn">aespa</button>

                </div>
                <div className="col-md-3">
                    <span className="label-xl">Bộ lọc sản phẩm</span>
                    <table className="mytable">
                        <tr>
                            <td>
                                <label className="filtering">
                                    <input type="checkbox" className="mycheckbox" ></input>
                                    <span className="label-m">All</span>
                                </label>
                            </td>
                            <td>
                                <label className="filtering">
                                    <input type="checkbox" className="mycheckbox" ></input>
                                    <span className="label-m">All</span>
                                </label>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label className="filtering">
                                    <input type="checkbox" className="mycheckbox" ></input>
                                    <span className="label-m">All</span>
                                </label>
                            </td>
                            <td>
                                <label className="filtering">
                                    <input type="checkbox" className="mycheckbox" ></input>
                                    <span className="label-m">All</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="filtering">
                                    <input type="checkbox" className="mycheckbox" ></input>
                                    <span className="label-m">All</span>
                                </label>
                            </td>
                            <td>
                                <label className="filtering">
                                    <input type="checkbox" className="mycheckbox" ></input>
                                    <span className="label-m">All</span>
                                </label>
                            </td>
                        </tr>
                    </table>

                    <br />
                    <span className="label-xl">Giá yêu thương</span>
                    <table className="mytable">
                        <tr>
                            <td>
                                <label className="filtering">
                                    <input type="checkbox" className="mycheckbox" ></input>
                                    <span className="label-m">All</span>
                                </label>
                            </td>
                            <td>
                                <label className="filtering">
                                    <input type="checkbox" className="mycheckbox" ></input>
                                    <span className="label-m">All</span>
                                </label>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label className="filtering">
                                    <input type="checkbox" className="mycheckbox" ></input>
                                    <span className="label-m">All</span>
                                </label>
                            </td>
                            <td>
                                <label className="filtering">
                                    <input type="checkbox" className="mycheckbox" ></input>
                                    <span className="label-m">All</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="filtering">
                                    <input type="checkbox" className="mycheckbox" ></input>
                                    <span className="label-m">All</span>
                                </label>
                            </td>
                            <td>
                                <label className="filtering">
                                    <input type="checkbox" className="mycheckbox" ></input>
                                    <span className="label-m">All</span>
                                </label>
                            </td>
                        </tr>
                    </table>

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