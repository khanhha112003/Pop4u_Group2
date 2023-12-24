import React from "react";
import './ProductPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import banner_tet from './images/banner_tet.png'
import { ReactComponent as Star } from './images/grade.svg';

function ProductPage () {
return (
    <>
    
    <div className="container">
        <img src={banner_tet} className='img-fuild img-thumbnail' alt='banner' />
    </div>
    

    <div className="card-container">
        <div className="col-md-4">
            <div className="card">
                <img src="" alt=""></img>
                <div className="card-body">
                    <span className="tag">Mới</span>
                    <span className="tag">Freeship</span>
                    <h5 className="card-title">  j-hope (BTS) 'Jack In The Box' (HOPE Edition)</h5>
                    <div className="card-reviews"> 
                        <Star/> <Star/> <Star/> <Star/> <Star/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container grid grid-filter-column"> 
    <div> <filtersection/></div>
    
    <section className="product-view--sort">
        <div className="sort-filter">
            <sort />
        </div>
        <div>

        </div>
    </section>
    
    </div>
    
    </>

)
}

export {ProductPage};