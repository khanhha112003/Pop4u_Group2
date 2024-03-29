import "./HomePage.css"
import "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import BestPriceIcon from './icons/new_releases.svg';
import FreeshipIcon from './icons/local_shipping.svg';
import EnviromentIcon from './icons/spa.svg';
import ChangeIcon from './icons/model_training.svg';
import BannerBlue from "../../theme/images/Banner-Blue.png";
import BannerTet from '../../theme/images/Banner-Tet.png'
import BannerWelcome from '../../theme/images/Banner-Welcome.png'


import { ReactComponent as Music } from './icons/icon_album.svg';
import { ReactComponent as Merch } from './icons/icon_merch.svg';
import { ReactComponent as Vinyl } from './icons/icon_vinyl.svg';
import { ReactComponent as Photobook } from './icons/icon_photobook.svg';
import { ReactComponent as Lightstick } from './icons/icon_lightstick.svg';
import { ReactComponent as Arrow } from './icons/icon_arrow.svg';

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import "react-bootstrap";
import HomepageProductItem from "../../components/HomepageProductItem/HomepageProductItem";
import HorizontalPagination from "../../components/HorizontalPagination/HorizontalPaginaton";
import { ArtistCardItem } from "../../components/ArtistCardItem/ArtistCardItem";
import NotFoundPage from "../Error/NotFoundError";
import LoadingPage from "../Loading/LoadingPage";

import { basicGetRequets, combineMultipleRequests } from "../../app_logic/APIHandler";

function HomePage() {
    const [content, setContent] = useState({ new_product: [], sale_product: [], hot_artits: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const newProductRequest = basicGetRequets("/product/product_list", { type_filter: "new", limit: 12 });
        const saleProductRequest = basicGetRequets("/product/product_list", { type_filter: "sale", limit: 12 });
        const hotArtistRequest = basicGetRequets("/artist/artist_list", { type_filter: "hot", limit: 4 });
        const result = combineMultipleRequests([newProductRequest, saleProductRequest, hotArtistRequest])
            .then((responses) => {
                let data = {
                    new_product: responses[0].data,
                    sale_product: responses[1].data,
                    hot_artits: responses[2].data
                }
                setContent(data)
            }).catch(error => {
                setError(error);
            }).finally(() => {
                setLoading(false);
            });

    }, []);

    const navigateToAnotherProduct = async (product_code, artist_code) => {
        navigate("/product_detail?product_code=" + product_code + "&artist_code=" + artist_code, { replace: true });
        navigate(0)
    };

    if (loading) {
        return <LoadingPage />;
    }

    if (error) {
        return <NotFoundPage />
    }

    return (
        <div className="App">
            <div className="container">
                <div className="row" style={{ marginBottom: '48px' }}>
                    <div className="hp-banner">
                        <Carousel className="banner-carousel">
                            <Carousel.Item className="banner-carousel-item">
                                <img
                                    className="d-block w-100 carousel-banner-img"
                                    src={BannerWelcome}
                                    alt="First slide"
                                    onClick={() => navigate("/product_list")}
                                />
                            </Carousel.Item>
                            <Carousel.Item className="banner-carousel-item">
                                <img
                                    className="d-block w-100 carousel-banner-img"
                                    src={BannerTet}
                                    alt="Second slide"
                                    onClick={() => navigate("/product_list")}
                                />
                            </Carousel.Item>
                            <Carousel.Item className="banner-carousel-item">
                                <img
                                    className="d-block w-100 carousel-banner-img"
                                    src={BannerBlue}
                                    alt="Third slide"
                                    onClick={() => navigate("/product_list")}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="row" style={{ marginBottom: '48px' }}>
                    <div className="col-12">
                        <div className="homepage-header">
                            <h4 className="head4">Danh mục sản phẩm</h4>
                            <a onClick={() => navigate("/product_list")}><span className="label-l">Xem tất cả sản phẩm</span><Arrow /></a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex justify-content-between" >
                        <div className="d-flex justify-content-between cat-card">
                            <div className="cat-card-content">
                                <h5 className="head5">Album</h5>
                                <p className="body-small">Khám phá album từ những nghệ sĩ hàng đầu</p>
                                <button
                                    className="cat-card-button"
                                    onClick={() => navigate("/product_list/album")}
                                >
                                    <span className="label-m">Xem ngay</span>
                                </button>
                            </div>
                            <div className="cat-card-icon">
                                <Music className="rotatable-svg" width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex justify-content-between" >
                        <div className="d-flex justify-content-between cat-card">
                            <div className="cat-card-content">
                                <h5 className="head5">Merch</h5>
                                <p className="body-small">Vật phẩm ghi dấu thương hiệu, mang đầy cảm xúc</p>
                                <button
                                    className="cat-card-button"
                                    onClick={() => navigate("/product_list/merch")}
                                >
                                    <span className="label-m">Xem ngay</span>
                                </button>
                            </div>
                            <div className="cat-card-icon">
                                <Merch className="rotatable-svg" width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex justify-content-between">
                        <div className="d-flex justify-content-between cat-card">
                            <div className="cat-card-content">
                                <h5 className="head5">Vinyl</h5>
                                <p className="body-small">Đĩa than retro, dành cho người "sành" hướng về xưa cũ</p>
                                <button
                                    className="cat-card-button"
                                    onClick={() => navigate("/product_list/vinyl")}
                                >
                                    <span className="label-m">Xem ngay</span>
                                </button>
                            </div>
                            <div className="cat-card-icon">
                                <Vinyl className="rotatable-svg" width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex">
                        <div className="d-flex justify-content-between cat-card">
                            <div className="cat-card-content">
                                <h5 className="head5">Photobook</h5>
                                <p className="body-small">Những concept siêu đỉnh do các idol thể hiện qua các dịp quan trọng</p>
                                <button
                                    className="cat-card-button"
                                    onClick={() => navigate("/product_list/photobook")}
                                >
                                    <span className="label-m">Xem ngay</span>
                                </button>
                            </div>
                            <div className="cat-card-icon">
                                <Photobook className="rotatable-svg" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex">
                        <div className="d-flex justify-content-between cat-card">
                            <div className="cat-card-content">
                                <h5 className="head5">Lightstick</h5>
                                <p className="body-small">Đẹp lỗng lẫy, sáng rạng ngời, một tình yêu với idol mãi</p>
                                <button
                                    className="cat-card-button"
                                    onClick={() => navigate("/product_list/lightstick")}
                                >
                                    <span className="label-m">Xem ngay</span>
                                </button>
                            </div>
                            <div className="cat-card-icon">
                                <Lightstick className="rotatable-svg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginBottom: '48px' }}>
                    <div className="col-12">
                        <div className="homepage-header">
                            <h4 className="head4">Sale đến "ngất".</h4>
                            <a onClick={() => navigate("/product_list")}><span className="label-l">Xem tất cả</span><Arrow /></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="product" style={{ marginBottom: 40 }}>
                            <HorizontalPagination
                                key={"sale_product"}
                                gap={10} // Adjust the gap between items as needed
                                background_color="white"
                                items={content.sale_product.map((item, index) => (
                                    <div
                                        onClick={() => navigateToAnotherProduct(item.product_code, item.artist_code)}
                                        style={{ padding: 0, height: '100%', width: '100%' }}>
                                        <HomepageProductItem
                                            key={index}
                                            data={item}
                                        />
                                    </div>
                                ))}
                                itemWidth={250}
                                itemHeight={425}
                                paddingItem={10}
                            />
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginBottom: '48px' }}>
                    <div className="col-12">
                        <div className="homepage-header">
                            <h4 className="head4">Mới ra mắt. Nóng cả tay.</h4>
                            <a onClick={() => navigate("/product_list")}><span className="label-l">Xem tất cả</span><Arrow /></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="product" style={{ marginBottom: 30 }}>
                            <HorizontalPagination
                                key={"hot_product"}
                                gap={10} // Adjust the gap between items as needed
                                background_color="white"
                                items={content.new_product.map((item, index) => (
                                    <div
                                        onClick={() => navigateToAnotherProduct(item.product_code, item.artist_code)}
                                        style={{ padding: 0, height: '100%', width: '100%' }}>
                                        <HomepageProductItem
                                            key={index}
                                            data={item}
                                        />
                                    </div>
                                ))}
                                itemWidth={250}
                                itemHeight={425}
                                paddingItem={10}
                            />
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginBottom: '48px' }} >
                    <div className="col-12">
                        <div className="homepage-header">
                            <h4 className="head4">Idol siêu chất, nổi bần bật.</h4>
                            <a onClick={() => navigate("/artists")}><span className="label-l">Xem tất cả nghệ sĩ</span><Arrow /></a>
                        </div>
                    </div>
                    {content.hot_artits.map((data, index) => (
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex" key={index}>
                            <ArtistCardItem
                                className='artist-card-item'
                                data={data}
                                onMoreInfoClick={() => { /* Your click handler logic here */ }}
                            />
                        </div>
                    ))}
                </div>
                <div className="row" style={{ marginBottom: '48px' }}>
                    <div className="col-12">
                        <div className="homepage-header">
                            <h4 className="head4">Mua hàng tự tin. Dẹp đi vặt vãnh.</h4>
                        </div>
                    </div>
                    {
                        [
                            {
                                title: "Giá tốt nhất.",
                                img_src: BestPriceIcon,
                            },
                            {
                                title: "Freeship từ 500K.",
                                img_src: FreeshipIcon,
                            },
                            {
                                title: "Vì môi trường.",
                                img_src: EnviromentIcon,
                            },
                            {
                                title: "Miễn phí đổi trả.",
                                img_src: ChangeIcon,
                            }
                        ].map((variant) => (
                            <div key={variant.title} className="col-sm-12 col-md-6 col-xl-3 col-lg-3">
                                <div className="benefit-card">
                                    <div className="benefit">
                                        <ReactSVG className="rotatable-svg" src={variant.img_src} />
                                        <h6 className="head6">{variant.title}</h6>
                                    </div>

                                </div>
                            </div>
                        )
                        )

                    }
                </div>
            </div>
        </div>
    );
};
export { HomePage };
