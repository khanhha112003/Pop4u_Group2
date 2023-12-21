import React from "react";
import './ProductPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import banner_tet from './images/banner_tet.png'

function ProductPage () {
return (
    <>
    
    <div className="container">
        <img src={banner_tet} className='img-fuild img-thumbnail' alt='banner' />
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