import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Blgdata from '../data.jsx';
import './SinglePost.css';
import ContentImg from '../img/contentimg.png';
import FBicon from '../img/FB-icon.png';
import IGicon from '../img/IG-icon.png';
import Xicon from '../img/X-icon.png';
import { ReactComponent as PreIcon } from '../img/chevron_left.svg';
import { ReactComponent as NextIcon } from '../img/chevron_right.svg';
import { ReactComponent as OutIcon } from '../img/arrow_outward.svg';

export function SinglePost(){
    const { postId } = useParams(); // Retrieve the post ID from the URL
    const post = Blgdata.BlgPosts.find((post) => post.id === 3);   
    return(
        <div className="BlgLst">
            <div className="container text-center">
                <div className="row">
                <div className="col-12 header position-relative">
                    {
                        Blgdata.BlgBanner.map ((BannerImg) => (
                        <div>
                            <img src={BannerImg.image} className="banner-image" alt="Banner Image"/>
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
                    <div style={{ display: 'inline-block' }}>Tin tức</div>
                    </div>
                    <div className='PostTitle'>
                        <h1>{post.name}</h1>
                        <div className="subtext" style={{ marginBottom: '20px'}} >
                            <div>Tác giả: Thanh Lực</div>
                            <div>Ngày đăng: 02/01/2024</div>
                        </div>
                        <div className='brieftext'>
                        Ngày 2.1, Xports News đưa tin, Jisoo (Blackpink) sẽ thực hiện các hoạt động solo dưới sự quản lý của công ty gia đình - Biomom - do anh trai ruột thành lập.
                        </div>
                    </div>
                </div>

                <div className='Content' style={{ marginTop: '20px'}}>
                    <div className='ContentTitle'>
                    Phản ứng của người hâm mộ
                    </div>
                    <div className='ContentPara'>
                    Ngay sau khi thông tin được đăng tải, những người hâm mộ đã vô cùng háo hức về những hoạt động cá nhân tiếp theo của Jisoo. Theo dự đoán, nữ thần tượng sẽ tập trung cho mảng diễn xuất, đúng với sở thích và đam mê của cô.
                    </div>
                    <div className='ParaImg' style={{ marginTop: '20px'}}>
                    <img src="https://c4.wallpaperflare.com/wallpaper/405/4/946/jisoo-blackpink-kim-ji-soo-hd-wallpaper-preview.jpg" alt="ContentImg" className="img-fluid" />
                    </div>  
                </div>
                
                <div className='Content' style={{ marginTop: '20px'}}>
                    <div className='ContentTitle'>
                    Phản hồi của Biomom
                    </div>
                    <div className='ContentPara'>
                    Ở thời điểm hiện tại, đại diện của Biomom từ chối đưa ra bình luận về vấn đề này: "Thật phức tạp để xác định mối quan hệ giữa công ty với Blissoo. Tôi cũng không biết về mối quan hệ gia đình của giám đốc điều hành".
                    </div>
                </div>

                <div className='Content' style={{ marginTop: '20px'}}>
                    <div className='ContentTitle'>
                    Còn hoạt động nhóm với tư cách là thành viên của Blackpink
                    </div>
                    <div className='ContentPara'>
                    Mặc dù tất cả các thành viên BLACKPINK đều không tái ký hợp đồng độc quyền cá nhân với YG Entertainment nhưng bốn cô gái đều xác nhận tiếp tục hợp đồng nhóm với công ty này. Như vậy, Jisoo cùng ba thành viên còn lại có thể tiếp tục hoạt động với tư cách BLACKPINK, đồng thời theo đuổi sự nghiệp solo của riêng mình.
                    </div>
                    <div className='ParaImg' style={{ marginTop: '20px'}}>
                    <img src="https://c4.wallpaperflare.com/wallpaper/85/136/873/music-blackpink-wallpaper-preview.jpg" alt="ContentImg" className="img-fluid" />
                    </div>
                </div>

                <div className='SharePost' style={{ marginTop: '40px'}}>
                    <div className='spTitle'>Chia sẻ bài viết</div>
                    <div className='spIcon' style={{ marginTop: '20px'}}>
                        <img src={FBicon} className="icon" />
                        <img src={IGicon} className="icon" />
                        <img src={Xicon} className="icon" />
                    </div>
                </div>

                <div className='PostFooter' style={{ marginTop: '40px'}} >
    
                   
                            <div className='PrePost'style={{ marginRight: 'auto' }}>
                            <PreIcon/>Bài viết trước</div>
                        
                            <div className='RetrnBlg' style={{ flex: 2, textAlign: 'center' }}>
                                <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Quay về trang Blog <OutIcon/>
                                </Link></div>
                                        
                       
                            <div className='NextPost'style={{ marginLeft: 'auto' }}>
                            Bài viết tiếp theo<NextIcon/></div>
                    
                   

                </div>
        </div>
        </div>
        </div>
        )


    }

