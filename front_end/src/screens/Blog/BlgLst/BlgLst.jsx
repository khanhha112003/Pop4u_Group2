import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderImg from '../../Blog/img/blog-bg.png';
import PostImg from '../img/postimg.png';
import { ReactComponent as FilterIcon } from '../img/filtericon.svg';
// import Blgdata from '../data.js'
import './BlgLst.css';

export default function BlgLst(){
    return(
        <div className="BlgLst">
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-12 header position-relative">
                        <img src={HeaderImg} alt="HeaderImg" className="img-fluid" />
                        <h2 className="title position-absolute top-50 start-50 translate-middle">Bài Viết</h2>
                    </div>
                </div>
            </div>

            <div className='FilterBar' style={{ marginBottom: '20px' ,marginTop:'20px'}} >
            <div className="container">
                <div className="row">
                <div className="col-12">
                <h5>
                    <FilterIcon/>Lọc bài viết theo thẻ
                    <div className="outerTag">
                    <div className="innerTag" style={{ background: '#D8E2FF' }}>
                        <div className="textTag">Tin tức</div>
                    </div>
                    <div className="innerTag" style={{ background: '#D8E2FF' }}>
                        <div className="textTag">Thời trang</div>
                    </div>
                    <div className="innerTag" style={{ border: '1px #325DA8 solid' }}>
                        <div className="textTag">Sự kiện</div>
                    </div>
                    <div className="innerTag" style={{ border: '1px #325DA8 solid' }}>
                        <div className="textTag">Lễ trao giải</div>
                    </div>
                    <div className="innerTag" style={{ border: '1px #325DA8 solid' }}>
                        <div className="textTag">Tất cả</div>
                    </div>

                    </div>
                </h5>
                </div>
                </div>
            </div>
            </div>

            <div className='Posts'>
                <div className="container">
                <div className="row">
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col- mb-5">
                        <a href='#' class="d-block"><img src={PostImg} alt="PostImg" className="img-fluid" />
                        <h5>Lorem ipsum dolor sit amet</h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, metus vitae efficitur consectetur, nisi erat vulputate mi, volutpat ornare nisl nunc at leo.
                        </a>
                        <div className="outerTag">
                        <div className="innerTag" style={{ background: '#D8E2FF' }}>
                            <div className="textTag">Tin tức</div>
                        </div>
                        <div className="innerTag" style={{ background: '#D8E2FF' }}>
                            <div className="textTag">Thời trang</div>
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col- mb-5">
                        <a href='#' class="d-block"><img src={PostImg} alt="PostImg" className="img-fluid" />
                        <h5>Lorem ipsum dolor sit amet</h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, metus vitae efficitur consectetur, nisi erat vulputate mi, volutpat ornare nisl nunc at leo.
                        </a>
                        <div className="outerTag">
                            <div className="innerTag" style={{ background: '#D8E2FF' }}>
                            <div className="textTag">Tin tức</div>
                        </div>
                        <div className="innerTag" style={{ background: '#D8E2FF' }}>
                            <div className="textTag">Thời trang</div>
                        </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col- mb-5">
                        <a href='#' class="d-block"><img src={PostImg} alt="PostImg" className="img-fluid" />
                        <h5>Lorem ipsum dolor sit amet</h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, metus vitae efficitur consectetur, nisi erat vulputate mi, volutpat ornare nisl nunc at leo.
                        </a>
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col- mb-5">
                        <a href='#' class="d-block"><img src={PostImg} alt="PostImg" className="img-fluid" />
                        <h5>Lorem ipsum dolor sit amet</h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, metus vitae efficitur consectetur, nisi erat vulputate mi, volutpat ornare nisl nunc at leo.
                        </a>
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col- mb-5">
                        <a href='#' class="d-block"><img src={PostImg} alt="PostImg" className="img-fluid" />
                        <h5>Lorem ipsum dolor sit amet</h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, metus vitae efficitur consectetur, nisi erat vulputate mi, volutpat ornare nisl nunc at leo.
                        </a>
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col- mb-5">
                        <a href='#' class="d-block"><img src={PostImg} alt="PostImg" className="img-fluid" />
                        <h5>Lorem ipsum dolor sit amet</h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, metus vitae efficitur consectetur, nisi erat vulputate mi, volutpat ornare nisl nunc at leo.
                        </a>
                    </div>

                </div>
            </div>
         
         </div>
         </div>
    )
}