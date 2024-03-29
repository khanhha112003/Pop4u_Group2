import React, { useEffect, useState } from 'react';
import "./StyleAboutUs.css"
import "react-bootstrap"

import { ReactComponent as LogoIcon } from './images/logo.svg';
import { ReactComponent as MusicSpectrum } from './images/music-spectrum.svg';
import {ReviewCarousel} from '../../components/ReviewCarousel/ReviewCarousel'

import Inclusion1 from './images/inclusion_signtime__cjyg7gx31w2u_large.jpg';
import Inclusion2 from './images/inclusion_veterans__c8iynwo4wtea_large.jpg';
import Inclusion3 from './images/inclusion_hispanic__d4rhg33wt26a_large.jpg'
import MascotPop4u from '../../theme/images/MascotPop4u.png';


function AboutUs() {
   
    const TypingEffect = ({ text, loop }) => {
        const [displayText, setDisplayText] = useState('');
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
          let interval;
          if (currentIndex < text.length) {
            interval = setInterval(() => {
              setDisplayText((prevText) => prevText + text[currentIndex]);
              setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 20); 
          } else {
            if (loop) {
              setTimeout(() => {
                setDisplayText('');
                setCurrentIndex(0);
              }, 5000); 
            }
          }

          return () => clearInterval(interval);
        }, [currentIndex, text, loop]);

        return <span>{displayText}</span>;
    };

    const employees = [
        { name: 'Khánh Hà', position: 'Nhóm trưởng', img: 'https://myuel.uel.edu.vn/Modules/UIS/upload/HinhSV/K214110796.jpg'},
        { name: 'Thanh Lực', position: 'Thành viên', img: 'https://myuel.uel.edu.vn/Modules/UIS/upload/HinhSV/K214110807.jpg'},
        { name: 'Xuân Thiều', position: 'Thành viên', img: 'https://myuel.uel.edu.vn/Modules/UIS/upload/HinhSV/K214110821.jpg'},
        { name: 'Anh Thuy', position: 'Thành viên', img: 'https://myuel.uel.edu.vn/Modules/UIS/upload/HinhSV/K214110823.jpg'},
        { name: 'Thanh Tâm', position: 'Thành viên', img: 'https://myuel.uel.edu.vn/Modules/UIS/upload/HinhSV/K214111951.jpg'}
    ];

    const reviews = [
        { id: 1, name: 'Minh Tú', content: '"Pop4u là địa chỉ tin cậy cho Kpop lovers! Sản phẩm chính hãng, giá phải chăng và trách nhiệm xã hội làm nổi bật thương hiệu này. Tôi hài lòng với chất lượng và dịch vụ chuyên nghiệp."', img: 'https://cdn.24h.com.vn/upload/2-2019/images/2019-04-02/1554196355-742-vi-sao-kha-banh-tro-thanh-hien-tuong-dinh-dam-tren-mang-xa-hoi-khabanh-1554192528-width660height597.jpg'},
        { id: 2, name: 'Lan Khuê', content: '"Pop4u là nguồn cung uy tín cho sản phẩm Kpop tại Việt Nam. Giá hợp lý, đa dạng sản phẩm và cam kết trách nhiệm xã hội tạo nên một trải nghiệm mua sắm tốt."', img: 'https://kenh14cdn.com/thumb_w/600/2016/lankhue1-1466319092446-1477973742987-39-121-302-543-crop-1477973764243.png'},
        { id: 3, name: 'Thanh Hằng', content: '"Pop4u là đối tác lý tưởng cho người hâm mộ Kpop. Chất lượng, giá cả hợp lý và sự cam kết với trách nhiệm xã hội làm cho mỗi lần mua sắm ở đây trở nên đặc biệt và ý nghĩa."', img: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/7/17/photo-4-16895567273911182507904.jpeg'}
    ]


    const reviewsSlides = reviews.map((review, index) => (
        <div key={index} style={{ width: '100%' }}>
            <div className='col-lg-10 col-xl-10 col-md-12 col-sm-12 mx-auto'>
                <div className='d-flex review-content' style={{ width: '100%' }}>
                    <div className='review-content-pic'>
                        <div>
                            <img src={review.img} alt={`Review by ${review.name}`} />
                        </div>
                    </div>
                    <div className='review-content-text'>
                        <h5 className='head5'>{review.name}</h5>
                        <p className='body-medium'>{review.content}</p>
                    </div>
                </div>
            </div>
        </div>
    ));
     
  return (
    <div>
        <div className="container">
            <div className="row justify-content-center section-1">
                <div className="col-12">
                    <div className="about-us-logo">
                        <LogoIcon alt="Pop4u Logo"></LogoIcon>
                    </div>
                </div>
                <div className="col-12 section-content-main">
                    <h1 className="main-statement">By your side. 
                    Together.</h1>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                    <div className='main-des'>
                        <p className="body-large" id="main-des">
                        {' '}
                        <TypingEffect
                            text="Pop4u đã được 1 tuổi. Mang sứ mệnh phục vụ đến hàng triệu bạn trẻ Việt Nam, tạo ra giá trị tinh thần mạnh mẽ cho Gen Z. Chúng tôi mang đầy hoài bão của tuổi trẻ 20 như các bạn."
                            loop={true} 
                        />
                        </p>                
                    </div>
                </div>
            </div>
            <div className="row justify-content-center section-2">
                <div className="col-12">
                    <div className="music-spectrum">
                        <MusicSpectrum ></MusicSpectrum>
                    </div>
                </div>
            </div>
            <div className="row align-items-center section-3">
                <div className="col-lg-5 col-xl-5 col-sm-12 col-md-12">
                    <div>
                        <h6 className="head6 heading-about-us-left">Pop4u là Ai?</h6>
                        <p className="body-medium">Pop4u là một doanh nghiệp trẻ phân phối các sản phẩm KPop tại Việt Nam. 
                            Chúng tôi, có thể nói, là doanh nghiệp đầu tiên phân phối đa dạng và chính hãng tất
                            cả các sản phẩm của những công ty giải trí hàng đầu.</p>
                        <p className="body-medium">Chúng tôi nhận thức được mục đích hoạt động tiên quyết là mang tới cơ hội tiếp cận các sản phẩm 
                            đặc biệt tới các bạn với mức giá linh hoạt nhất.</p>
                    </div>
                </div>
                <div className="col-sm-0 col-md-0 col-lg-1 col-xl-1"></div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="side-img">
                        <img className="mascot-pic" src={MascotPop4u} alt="Ảnh Inclusion 1"/>                  
                    </div>
                </div>
            </div>
            <div className="row align-items-center section-5">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" >
                    <h6 className="head6 heading-about-us-center">Giá Trị Cốt Lõi</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" id="core-value">
                    <div className="core-value-card">
                        <span className='head4'>Inclusivity.</span>
                    </div>
                    <div className="core-value-card">
                        <span className='head4'>Trust.</span>
                    </div>
                    <div className="side-img">
                        <img src={Inclusion1} alt="Ảnh Inclusion 1"/>                  
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" id="core-value">
                    <div className="side-img">
                    <img src={Inclusion2} alt="Ảnh Inclusion 2"/>                  
                    </div>
                    <div className="core-value-card">
                        <span className='head4'>Connectivity.</span>
                    </div>
                    <div className="core-value-card">
                        <span className='head4'>Novelty.</span>
                    </div>
                </div>
            </div>
            <div className="row section-6">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="section-vision">
                        <h6 className="head6 heading-about-us-center">Tầm Nhìn</h6>
                        <div className="vision">
                            <h4 className="head4 statement-script-center">Trở thành doanh nghiệp thương mại điện tử phân phối sản 
                            phẩm K-Pop uy tín hàng đầu Việt Nam.</h4>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center section-7">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <h6 className="head6 heading-about-us-left">Sứ Mệnh</h6>
                    <span className="head4 statement-script-side">Phá bỏ mọi rào cản trong việc tiếp cận sản phẩm K-Pop
                        của người hâm mộ tại Việt Nam.</span>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="side-img">
                        <img src={Inclusion3} alt="Ảnh Inclusion 2"/>                  
                    </div>
                </div>
            </div>
            <div className="row section-8">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="section-esg">
                        <h6 className="head6 heading-about-us-center">Trách Nhiệm Xã Hội</h6>
                        <div className="esg">
                            <h4 className="head4 statement-script-center">Mang trong mình sức trẻ, Pop4u biết mình phải làm gì để cống hiến cho môi trường, xã hội và những giá trị nội bộ.</h4>    
                        </div>
                    </div>
                </div>
            </div> 
            <div className='row mx-auto justify-content-center section-9'>
                <div className='col-12'>
                    <h6 className="head6 heading-about-us-center">Gặp Gỡ Chúng Tôi - POP4U TEAM</h6>
                </div>
                {employees.map((employee, name) =>
                    <div key={name} className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <div className="employee-card">
                            <div className='employee-img'> 
                                <img src={employee.img} alt={employee.name}/>
                            </div>
                            <span className='head5 employee-name'>{employee.name}</span>
                            <p className='body-medium employee-pos'>{employee.position}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className='row section-10' >
                <div className='col-12'>
                    <h6 className="head6 heading-about-us-center">Khách Hàng Nói Gì Về Pop4u?</h6>
                </div>
                <ReviewCarousel slides={reviewsSlides}/>
            </div>
        </div>
    </div>

  )
}

export { AboutUs }