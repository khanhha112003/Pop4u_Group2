import 'bootstrap/dist/css/bootstrap.min.css';
import Blgdata from '../data.jsx';
import './SinglePost.css';
import ContentImg from '../img/contentimg.png';
import FBicon from '../img/FB-icon.png';
import IGicon from '../img/IG-icon.png';
import Xicon from '../img/X-icon.png';
import { ReactComponent as PreIcon } from '../img/chevron_left.svg';
import { ReactComponent as NextIcon } from '../img/chevron_right.svg';
import { ReactComponent as OutIcon } from '../img/arrow_outward.svg';

export default function SinglePost(){
    return(
        <div className="BlgLst">
            <div className="container-fluid text-center">
                <div className="row">
                <div className="col-12 header position-relative">
                    {
                        Blgdata.BlgBanner.map ((BannerImg) => (
                        <div>
                            <img src={BannerImg.Image} className="img-fluid"/>
                        </div>
                        ))
                    }
                    <h2 className="title position-absolute top-50 start-50 translate-middle">Bài Viết</h2>  
                </div>
                </div>
                </div>

            <div className='Postcontent'>
                <div className='container'>
                <div className='PostHeader'>
                    <div className='PostTag'style={{ marginBottom: '20px' ,marginTop:'20px'}}>
                    <div style={{ display: 'inline-block', marginRight: '10px' }}>Thời trang</div>
                    <div style={{ display: 'inline-block' }}>Tin tức</div>
                   
                    </div>
                    <div className='PostTitle'>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <div className="subtext" style={{ marginBottom: '20px'}} >
                            <div>Tác giả: Thanh Lực</div>
                            <div>Ngày đăng: 20/11/2023</div>
                        </div>
                        <div className='brieftext'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada pharetra erat non porta. Morbi sapien quam, blandit et ornare nec, commodo non nunc. Morbi fermentum nibh justo, ac dignissim erat bibendum eu. Aliquam aliquet, magna sit amet blandit lacinia, dui massa bibendum lacus, sit amet posuere erat magna nec diam.
                        </div>
                    </div>
                </div>

                <div className='Content' style={{ marginTop: '20px'}}>
                    <div className='ContentTitle'>
                    Lorem ipsum dolor sit amet 01
                    </div>
                    <div className='ContentPara'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada pharetra erat non porta. Morbi sapien quam, blandit et ornare nec, commodo non nunc. Morbi fermentum nibh justo, ac dignissim erat bibendum eu. Aliquam aliquet, magna sit amet blandit lacinia, dui massa bibendum lacus, sit amet posuere erat magna nec diam. Suspendisse ornare consectetur lectus, ut gravida urna venenatis vitae. Fusce feugiat rutrum tellus id maximus. Curabitur rhoncus dui sed nunc maximus mattis.
                    </div>
                    <div className='ParaImg' style={{ marginTop: '20px'}}>
                    <img src={ContentImg} alt="ContentImg" className="img-fluid" />
                    </div>  
                </div>
                
                <div className='Content' style={{ marginTop: '20px'}}>
                    <div className='ContentTitle'>
                    Lorem ipsum dolor sit amet 01
                    </div>
                    <div className='ContentPara'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada pharetra erat non porta. Morbi sapien quam, blandit et ornare nec, commodo non nunc. Morbi fermentum nibh justo, ac dignissim erat bibendum eu. Aliquam aliquet, magna sit amet blandit lacinia, dui massa bibendum lacus, sit amet posuere erat magna nec diam. Suspendisse ornare consectetur lectus, ut gravida urna venenatis vitae. Fusce feugiat rutrum tellus id maximus. Curabitur rhoncus dui sed nunc maximus mattis.
                    </div>
                </div>

                <div className='Content' style={{ marginTop: '20px'}}>
                    <div className='ContentTitle'>
                    Lorem ipsum dolor sit amet 01
                    </div>
                    <div className='ContentPara'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada pharetra erat non porta. Morbi sapien quam, blandit et ornare nec, commodo non nunc. Morbi fermentum nibh justo, ac dignissim erat bibendum eu. Aliquam aliquet, magna sit amet blandit lacinia, dui massa bibendum lacus, sit amet posuere erat magna nec diam. Suspendisse ornare consectetur lectus, ut gravida urna venenatis vitae. Fusce feugiat rutrum tellus id maximus. Curabitur rhoncus dui sed nunc maximus mattis.
                    </div>
                    <div className='ParaImg' style={{ marginTop: '20px'}}>
                    <img src={ContentImg} alt="ContentImg" className="img-fluid" />
                    </div>
                </div>

                <div className='SharePost' style={{ marginTop: '40px'}}>
                    <div className='spTitle'>Chia sẻ bài viết</div>
                    <div className='spIcon' style={{ marginTop: '20px'}}>
                    <img src={FBicon}  className="img-fluid" />
                    <img src={IGicon}  className="img-fluid" />
                    <img src={Xicon}  className="img-fluid" />
                    </div>
                </div>

                <div className='PostFooter' style={{ marginTop: '40px'}} >
    
                   
                            <div className='PrePost'style={{ marginRight: 'auto' }}>
                            <PreIcon/>Bài viết trước</div>
                        
                            <div className='RetrnBlg' style={{ flex: 2, textAlign: 'center' }}>
                            Quay về trang Blog<OutIcon/></div>
                       
                       
                            <div className='NextPost'style={{ marginLeft: 'auto' }}>
                            Bài viết tiếp theo<NextIcon/></div>
                    
                   

                </div>
{/* 
                <Container className='PostFooter' style={{ marginTop: '40px' }}>
                    <Row className='align-items-center'>
                        <Col xs={4} className='PrePost'>
                        <PreIcon />Bài viết trước
                        </Col>
                        <Col xs={4} className='RetrnBlg text-center'>
                        Quay về trang Blog<OutIcon/>
                        </Col>
                        <Col xs={4} className='NextPost text-right' style={{ marginLeft: 'auto' }}>
                        Bài viết tiếp theo<NextIcon/>
                        </Col>
                    </Row>
                    </Container> */}

        </div>
        </div>
        </div>
        )


    }
