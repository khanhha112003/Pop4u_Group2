import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Blgdata from '../data.jsx';
import './BlgFilter.css'
import { ReactComponent as FilterIcon } from '../img/filtericon.svg';
import { ReactComponent as LoadIcon } from '../img/loadm-icon.svg';

export function Blog(){
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredBlgPosts, setFilteredBlgPosts] = useState(Blgdata.BlgPosts);
    const [visiblePosts, setVisiblePosts] = useState(6); // Number of initially visible posts
    const postsPerPage = 6; 

    let filters = ["Tin tức", "Thời trang", "Lễ trao giải", "Lối sống","Thành tích"];

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
        let filters = selectedFilters.filter((el) => el !== selectedCategory);
        setSelectedFilters(filters);
        } else {
        setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    useEffect(() => {
        filterBlgPosts();
    }, [selectedFilters]);

    const filterBlgPosts = () => {
        if (selectedFilters.length > 0) {
            setFilteredBlgPosts(
                Blgdata.BlgPosts.filter((post) =>
                    selectedFilters.some((selectedCategory) =>
                        post.category.includes(selectedCategory)
                    )
                )
            );
        } else {
            setFilteredBlgPosts([...Blgdata.BlgPosts]);
        }
    };
    
    const loadMorePosts = () => {
        setVisiblePosts((prevVisiblePosts) =>
            Math.min(prevVisiblePosts + postsPerPage, filteredBlgPosts.length)
        );
    };
    
    useEffect(() => {
        let sortedPosts = [...filteredBlgPosts]; // Create a copy of the filtered posts

        // Sort the posts by date (assuming post.date is in a sortable format)
        sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        setFilteredBlgPosts(sortedPosts); // Update the state with sorted posts
    }, [selectedFilters, Blgdata.BlgPosts]);
    
    return(
        <div className="BlgLst">
            <div className="container">
                <div className="row">
                <div className="col-12 header position-relative">
                    {
                        Blgdata.BlgBanner.map ((BannerImg) => (
                        <div>
                            <img src={BannerImg.image} className="banner-image" alt="Banner Image" />
                        </div>
                        ))
                    }
                    <h2 className="title position-absolute top-50 start-50 translate-middle">Bài Viết</h2>   
                </div>
                </div>
                </div>
            
               
                <div className='FilterBar' style={{marginTop:'20px'}}  >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <h5><FilterIcon/>Lọc bài viết theo thẻ</h5>
                            {filters.map((category, idx) => (
                            <button
                                onClick={() => handleFilterButtonClick(category)}
                                className={`button ${
                                selectedFilters?.includes(category) ? "active" : ""
                                }`}
                                key={`filters-${idx}`}
                            >
                                {category}
                            </button>
                            ))}
                        </div>
                </div>
                </div>  
            
            <div className='Posts' style={{marginTop:'20px'}} >
                <div class="container">
                <div className="row">
                    {filteredBlgPosts.slice(0, visiblePosts).map((post, idx) => (
                        <div key={`BlgPosts-${idx}`} className="col- col-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="Post mb-5">
                            <Link to={`/single-post/${post.id}`} className="post-link">
                                <img src={post.image} 
                                alt={post.name} 
                                className="img-fluid" 
                                style={{ borderRadius: '30px', transition: 'transform 0.3s ease',  width: '100%', 
                                height: '250px',
                                objectFit: 'cover', }}
                                onMouseOver={(e) => { e.target.style.transform = 'scale(1.1)'; }} 
                                onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; }} 
                                />
                                <div className="postinfo">
                                        <h5 className="posttitle">{post.name}</h5>
                                        <div className="postdate">Ngày đăng: {post.date} </div>
                                        <div className="postdes" style={{marginTop:'8px'}}>{post.description} </div>
                                        <div className="postcategories">
                                        {Array.isArray(post.category) && post.category.map((category, index) => (
                                    <div key={`category-${index}`} className="postcategory">
                                        {category}
                                    </div>
                                ))}
                            </div>
                                </div>
                            </Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            {(visiblePosts < filteredBlgPosts.length) && (
                <div className='LoadmoreBlg'>
                    <div className="container-fluid text-center">
                        <div className="row">
                            <div className="col-12 header position-relative">
                                <div className='LoadButton' onClick={loadMorePosts}>
                                    Xem thêm bài viết <LoadIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
         </div>
        </div>
        
    )
}