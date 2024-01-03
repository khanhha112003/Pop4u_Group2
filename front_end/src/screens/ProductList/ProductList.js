import React, { useState } from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner_tet from './images/banner_tet.png'
import { ReactComponent as Star } from './images/grade.svg'
import img_album from './images/img_album.png'
import Carousel from 'react-bootstrap/Carousel';
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
import data from './data.js'
import NotFoundPage from "../Error/NotFoundError";
import LoadingPage from "../Loading/LoadingPage";

import { basicGetRequets, combineMultipleRequests } from "../../app_logic/APIHandler";

// import Category from "./Category";
// import Card from "./Card/Card";

function ProductList() {
    const [index, setIndex] = useState(0);

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
    

    if (loading) {
        return <LoadingPage />;
      }
    
      if (error) {
        return <NotFoundPage />
      }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-center">
                    <div className='banner-product'>
                        <span className='head3'>Sản phẩm của chúng tôi</span>
                    </div>
                </div>
            </div>
                   
                    {/* <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <div className='banner-artist col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-center'>
                                <Carousel.Caption>
                                    <span className='head3'>Sản phẩm của chúng tôi</span>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="banner_tet d-block w-100" src={banner_tet} alt='second_banner' />
                            <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                <img className="d-block w-100" src={banner_tet} alt='banner' />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                    </Carousel> */}

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
                        placeholder="Tên sản phẩm..."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-lg-2 bg-light p-4 sidebar">
                    <h5 className="mb-3">Bộ lọc sản phẩm</h5>
                    <div className="d-flex flex-column mb-4">
                        <label className="filtering">
                        <input type="checkbox" className="mycheckbox" />
                        <span className="label-m">All</span>
                        </label>
                        <label className="filtering">
                        <input type="checkbox" className="mycheckbox" />
                        <span className="label-m">All</span>
                        </label>
                        {/* Add more filters as needed */}
                    </div>

                    <h5 className="mb-3">Giá yêu thương</h5>
                    <div className="d-flex flex-column mb-4">
                        <label className="filtering">
                        <input type="checkbox" className="mycheckbox" />
                        <span className="label-m">All</span>
                        </label>
                        <label className="filtering">
                        <input type="checkbox" className="mycheckbox" />
                        <span className="label-m">All</span>
                        </label>
                        {/* Add more price options as needed */}
                    </div>
                    </div>
                    <div className="col-md-9 col-lg-10">
                    {/* Main content here */}
                    </div>
                </div>
                </div>


                <div className="col-md-9">

                    <div className="col-md-3">
                        <div className="row">
                            <div className="product">
                                <div className="row" >
                                    <HomepageProductItem
                                        data={
                                            {
                                                product_name: "j-hope (BTS) 'Jack In The Box' (HOPE Edition)",
                                                discount_price: 400000,
                                                sell_price: 500000,
                                                img_product: img_album,
                                                rating_detail: "",
                                                rating: 4.3,
                                                special_badge: []
                                            }}
                                        onClickHandler={() => { }} />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>





                {/* <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-right">
                    
            <div className="product">
                <div className="row" >
                <HomepageProductItem
                data={
                    {
                    product_name: "j-hope (BTS) 'Jack In The Box' (HOPE Edition)",
                    discount_price: 400000,
                    sell_price: 500000,
                    img_product: img_album
                    }}
                onClickHandler={() => { }} />
            </div>    
                    
                    </div>
                </div>

                
            </div> */}

            </div>
    )
}

export { ProductList }