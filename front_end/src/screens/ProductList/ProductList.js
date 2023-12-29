import React, { useState } from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner_tet from './images/banner_tet.png'
import { ReactComponent as Star } from './images/grade.svg'
import img_album from './images/img_album.png'
import Carousel from 'react-bootstrap/Carousel';
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
// import Category from "./Category";
// import Card from "./Card/Card";

function ProductList() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (


        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-center">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <div className='banner-artist'>
                                <Carousel.Caption>
                                    <span className='head3'>Sản phẩm của chúng tôi</span>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="banner_tet d-block w-100" src={banner_tet} alt='second_banner' />
                            {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                        </Carousel.Item>
                        {/* <Carousel.Item>
                <img className="d-block w-100" src={banner_tet} alt='banner' />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                    </Carousel>

                </div>

                <div >

                </div>
            </div>


            <div className="row">
                <div className="recommend justify-content-right justify-content-md-center">
                    <input type="text" className="searchbar" placeholder="Nhập tên sản phẩm" ></input>
                </div>

                <div className="buttons row justify-content-right justify-content-md-center">
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
                                                img_product: img_album
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
        </div>
    )
}

export { ProductList }