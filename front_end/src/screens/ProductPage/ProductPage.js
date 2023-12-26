import React, { useState } from "react";
import './ProductPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner_tet from './images/banner_tet.png'
import { ReactComponent as Star } from './images/grade.svg'
import img_album from './images/img_album.png'

// import Category from "./Category";
// import Card from "./Card/Card";


function ProductPage () {
    
     
return (
    <>
    
    <div className="container">
        <img src={banner_tet} className='img-fluid img-thumbnail' alt='banner' />
    </div>
   

    <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
            <div className="col-md-3">
                <h4 className="sidebar-title">Bộ lọc sản phẩm</h4>
                <label className="filtering">
                    <input type="checkbox" name="test" ></input>
                    <span className="checkmark">  All</span>
                </label>
                <br/>
                <label className="filtering">
                    <input type="checkbox" name="test"></input>
                    <span className="checkmark">  Album</span>
                </label>
                <br/>
                <label className="filtering">
                    <input type="checkbox" name="test"></input>
                    <span className="checkmark">  Photobook</span>
                </label>
                <br/>
                <label className="filtering">
                    <input type="checkbox" name="test"></input>
                    <span className="checkmark">  Vinyl</span>
                </label>
                <br/>
                <label className="filtering">
                    <input type="checkbox" name="test"></input>
                    <span className="checkmark">  Merch</span>
                </label>
                <br/>
                <label className="filtering">
                    <input type="checkbox" name="test"></input>
                    <span className="checkmark">  Lightstick</span>
                </label>
            </div>


            <div className="col-md-9">
                <div className="row">
                    
                    <div className="col-md-4 mb-4">
                    
                    <div className="card">
                        <img className="card-img" src={img_album} alt="img"></img>
                        <div className="card-details">
                        <span className="tag">Mới</span>
                        <span className="tag">Freeship</span>
                        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                        <div className="card-reviews"> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/>
                            <span className="rating">(12)</span>
                        </div>
                            <div className="product-box-price">
                                <div className="price-sale">
                                    <span className="price-inner">400.000₫</span>
                                </div>
                                    <del className="price-del">500.000₫</del>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 mb-4">
                    
                    <div className="card">
                        <img className="card-img" src={img_album} alt="img"></img>
                        <div className="card-details">
                        <span className="tag">Mới</span>
                        <span className="tag">Freeship</span>
                        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                        <div className="card-reviews"> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/>
                            <span className="rating">(12)</span>
                        </div>
                            <div className="product-box-price">
                                <div className="price-sale">
                                    <span className="price-inner">400.000₫</span>
                                </div>
                                    <del className="price-del">500.000₫</del>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 mb-4">
                    
                    <div className="card">
                        <img className="card-img" src={img_album} alt="img"></img>
                        <div className="card-details">
                        <span className="tag">Mới</span>
                        <span className="tag">Freeship</span>
                        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                        <div className="card-reviews"> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/>
                            <span className="rating">(12)</span>
                        </div>
                            <div className="product-box-price">
                                <div className="price-sale">
                                    <span className="price-inner">400.000₫</span>
                                </div>
                                    <del className="price-del">500.000₫</del>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 mb-4">
                    
                    <div className="card">
                        <img className="card-img" src={img_album} alt="img"></img>
                        <div className="card-details">
                        <span className="tag">Mới</span>
                        <span className="tag">Freeship</span>
                        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                        <div className="card-reviews"> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/>
                            <span className="rating">(12)</span>
                        </div>
                            <div className="product-box-price">
                                <div className="price-sale">
                                    <span className="price-inner">400.000₫</span>
                                </div>
                                    <del className="price-del">500.000₫</del>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 mb-4">
                    
                    <div className="card">
                        <img className="card-img" src={img_album} alt="img"></img>
                        <div className="card-details">
                        <span className="tag">Mới</span>
                        <span className="tag">Freeship</span>
                        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                        <div className="card-reviews"> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/>
                            <span className="rating">(12)</span>
                        </div>
                            <div className="product-box-price">
                                <div className="price-sale">
                                    <span className="price-inner">400.000₫</span>
                                </div>
                                    <del className="price-del">500.000₫</del>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 mb-4">
                    
                    <div className="card">
                        <img className="card-img" src={img_album} alt="img"></img>
                        <div className="card-details">
                        <span className="tag">Mới</span>
                        <span className="tag">Freeship</span>
                        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                        <div className="card-reviews"> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/>
                            <span className="rating">(12)</span>
                        </div>
                            <div className="product-box-price">
                                <div className="price-sale">
                                    <span className="price-inner">400.000₫</span>
                                </div>
                                    <del className="price-del">500.000₫</del>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 mb-4">
                    
                    <div className="card">
                        <img className="card-img" src={img_album} alt="img"></img>
                        <div className="card-details">
                        <span className="tag">Mới</span>
                        <span className="tag">Freeship</span>
                        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                        <div className="card-reviews"> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/>
                            <span className="rating">(12)</span>
                        </div>
                            <div className="product-box-price">
                                <div className="price-sale">
                                    <span className="price-inner">400.000₫</span>
                                </div>
                                    <del className="price-del">500.000₫</del>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 mb-4">
                    
                    <div className="card">
                        <img className="card-img" src={img_album} alt="img"></img>
                        <div className="card-details">
                        <span className="tag">Mới</span>
                        <span className="tag">Freeship</span>
                        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                        <div className="card-reviews"> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/>
                            <span className="rating">(12)</span>
                        </div>
                            <div className="product-box-price">
                                <div className="price-sale">
                                    <span className="price-inner">400.000₫</span>
                                </div>
                                    <del className="price-del">500.000₫</del>
                            </div>
                            </div>
                        </div>

                    </div> 
                    <div className="col-md-4 mb-4">
                    
                    <div className="card">
                        <img className="card-img" src={img_album} alt="img"></img>
                        <div className="card-details">
                        <span className="tag">Mới</span>
                        <span className="tag">Freeship</span>
                        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                        <div className="card-reviews"> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/>
                            <span className="rating">(12)</span>
                        </div>
                            <div className="product-box-price">
                                <div className="price-sale">
                                    <span className="price-inner">400.000₫</span>
                                </div>
                                    <del className="price-del">500.000₫</del>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 mb-4">
                    
                    <div className="card">
                        <img className="card-img" src={img_album} alt="img"></img>
                        <div className="card-details">
                        <span className="tag">Mới</span>
                        <span className="tag">Freeship</span>
                        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                        <div className="card-reviews"> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/>
                            <span className="rating">(12)</span>
                        </div>
                            <div className="product-box-price">
                                <div className="price-sale">
                                    <span className="price-inner">400.000₫</span>
                                </div>
                                    <del className="price-del">500.000₫</del>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 mb-4">
                    
                    <div className="card">
                        <img className="card-img" src={img_album} alt="img"></img>
                        <div className="card-details">
                        <span className="tag">Mới</span>
                        <span className="tag">Freeship</span>
                        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                        <div className="card-reviews"> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/>
                            <span className="rating">(12)</span>
                        </div>
                            <div className="product-box-price">
                                <div className="price-sale">
                                    <span className="price-inner">400.000₫</span>
                                </div>
                                    <del className="price-del">500.000₫</del>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 mb-4">
                    
                    <div className="card">
                        <img className="card-img" src={img_album} alt="img"></img>
                        <div className="card-details">
                        <span className="tag">Mới</span>
                        <span className="tag">Freeship</span>
                        <h5 className="card-title">j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                        <div className="card-reviews"> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/> 
                            <Star className="rating-start"/>
                            <span className="rating">(12)</span>
                        </div>
                            <div className="product-box-price">
                                <div className="price-sale">
                                    <span className="price-inner">400.000₫</span>
                                </div>
                                    <del className="price-del">500.000₫</del>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>

                
            </div>
        </div>
    </div>
    
    </>

)
}

export {ProductPage};