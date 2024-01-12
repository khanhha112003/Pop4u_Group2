import React from "react";

function ESG() {
  const communityImg = 'https://lh3.googleusercontent.com/566Rx2zqHP_GsHPDeKf_HGOgI5js78fO6Hzu_NTRGGAWt4MttCzgwQXwwU1cHXgWUEdAXyE76srsfkSeB7NVOSPJfEhnh5KTaNvb_5JAIGg4Bn_ImWI=w2400';
  const environmentImg = 'https://www.apple.com/newsroom/images/2023/08/a-new-generation-preserves-tribal-land-and-culture-in-americas-national-parks-html/article/Apple-national-parks-2023-El-Capitan-Meadow_Full-Bleed-Image.jpg.large.jpg';
  const educationImg = 'https://www.apple.com/v/education-initiative/a/images/overview/canada__f2c0ppsbeqy6_large.jpg';
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <h4 className="head4 text-center" 
            style={{ color: 'var(--color-primary-light)', marginTop: '24px'}}>
            Trách Nhiệm Xã Hội (ESG) của Pop4u
          </h4>
        </div> 
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <hr></hr>
          <h6 className="head6" 
            style={{color: 'var(--color-primary-light)', marginBottom: '20px'}}>
              Chăm Sóc Môi Trường - Đường Đi Xanh
          </h6>
          <p className="body-small" style={{marginBottom: '32px'}}>
            Pop4u không chỉ dừng lại ở việc chọn lựa sản phẩm có chứng nhận môi trường mà còn thực hiện 
            những sáng kiến xanh khác như sử dụng bao bì tái chế và ưu tiên vận chuyển bằng phương tiện 
            giao thông thân thiện với môi trường. Chúng tôi đặt ra mục tiêu không chỉ làm giảm tác động 
            tiêu cực mà còn làm tăng giá trị xanh cho mỗi sản phẩm.
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
          <div style={{ backgroundImage: `url(${environmentImg})`, width: '100%', height: '480px', objectFit: 'cover', marginBottom: '48px', borderRadius: '20px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
          </div>
        </div>
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <h6 className="head6" 
            style={{color: 'var(--color-primary-light)', marginBottom: '20px'}}>
              Chất Lượng Sản Phẩm và Tác Động Tích Cực
          </h6>
          <p className="body-small" style={{marginBottom: '32px'}}>
            Pop4u cam kết mang đến cho khách hàng không chỉ là những sản phẩm chất lượng cao mà còn là trải 
            nghiệm tích cực cho cộng đồng. Chúng tôi hợp tác chặt chẽ với các nghệ sĩ KPop và các đối tác để 
            đảm bảo rằng mỗi sản phẩm không chỉ là một đĩa nhạc mà còn là cơ hội để thể hiện tình yêu và 
            sự ủng hộ đối với nghệ sĩ.
          </p>
        </div>
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <h6 className="head6" 
            style={{color: 'var(--color-primary-light)', marginBottom: '20px'}}>
              Chia Sẻ Lợi Nhuận Cùng Giáo Dục
          </h6>
          <p className="body-small" style={{marginBottom: '32px'}}>
            Với mỗi sản phẩm được bán, Pop4u cam kết đóng góp một phần lợi nhuận để xây dựng và nâng 
            cấp cơ sở hạ tầng giáo dục tại các vùng khó khăn như Đắk Lắk, Gia Lai, Kon Tum, Bắc Kạn, 
            Lạng Sơn. Chúng tôi tin rằng giáo dục là chìa khóa mở 
            cửa cho tương lai, và việc đóng góp vào lĩnh vực này là cách chúng tôi thực hiện trách nhiệm 
            xã hội và hỗ trợ sự phát triển bền vững.
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
          <div style={{ backgroundImage: `url(${educationImg})`, width: '100%', height: '480px', objectFit: 'cover', marginBottom: '48px', borderRadius: '20px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
          </div>
        </div>
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <h6 className="head6" 
            style={{color: 'var(--color-primary-light)', marginBottom: '20px'}}>
              Tôn Trọng Đa Dạng và Bao Hàm
          </h6>
          <p className="body-small" style={{marginBottom: '32px'}}>
            Pop4u không chỉ là người phân phối sản phẩm KPop mà còn là đại diện cho sự đa dạng và sự 
            kết nối trong cộng đồng. Chúng tôi tự hào hỗ trợ cộng đồng LGBT bằng cách tạo ra không gian 
            an toàn, đồng hành cùng các chiến dịch và sự kiện quy tụ cộng đồng, và hỗ trợ 
            các tổ chức ổn định về quyền cơ bản và bình đẳng. Bên cạnh đó, chúng tôi còn cố gắng xây dựng 
            một môi trường làm việc năng động, bình đẳng, coi sự khác biệt là một lợi thế thú vị của mỗi người.
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
          <div style={{ backgroundImage: `url(${communityImg})`, width: '100%', height: '480px', objectFit: 'cover', marginBottom: '48px', borderRadius: '20px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
          </div>
        </div>
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <h6 className="head6" 
            style={{color: 'var(--color-primary-light)', marginBottom: '20px'}}>
              Hướng Tới Dài Hạn
          </h6>
          <p className="body-small" style={{marginBottom: '48px'}}>
            Pop4u không chỉ nhìn thấy trách nhiệm xã hội như một nhiệm vụ ngắn hạn mà còn là sứ mệnh 
            dài hạn. Chúng tôi liên tục đầu tư vào nghiên cứu và phát triển để đưa ra các sáng tạo mới 
            về sản phẩm và dịch vụ, nhằm mang lại trải nghiệm tốt nhất cho cộng đồng yêu thích âm nhạc 
            KPop.
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
          <div style={{ backgroundColor: 'var(--color-primary-container-light)', padding: '56px 40px', borderRadius: '20px', marginBottom: '64px'}}>
            <h5 className="head5 text-center employee-name" style={{ marginBottom: '16px'}}>
              Đồng Hành và Gắn Kết
            </h5>
            <p className="body-big text-center" style={{ color: 'var(--color-on-primary-container-light)', marginBlockEnd: '0'}}>
              "Pop4u không chỉ là nơi mua sắm, mà là cộng đồng đồng hành cùng nhau. Hãy cùng nhau chia sẻ 
              niềm đam mê, tạo ra giá trị và kết nối với trách nhiệm xã hội để xây dựng một tương lai bền vững 
              và đầy năng lượng tích cực. Đến với Pop4u, bạn không chỉ là khách hàng, mà còn là một phần của 
              hành trình chúng tôi xây dựng!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export {ESG}