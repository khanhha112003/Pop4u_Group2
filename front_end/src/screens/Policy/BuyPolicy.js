import React from "react";
import 'react-bootstrap'
import {ReactComponent as NewRelease} from '../../theme/images/new_releases.svg';

function BuyPolicy() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <h4 className="head4 text-center" 
          style={{ color: 'var(--color-primary-light)', marginTop: '24px'}}>
            Chính Sách Mua Hàng
          </h4>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <hr></hr>
          <p className="body-small" style={{marginBottom: '32px'}}>
          Cảm ơn bạn đã mua sắm tại Pop4u. Chúng tôi trân trọng việc bạn quan tâm mua sắm 
          những sản phẩm thú vị do chúng tôi tạo ra. 
          Chúng tôi cũng muốn đảm bảo rằng bạn có một trải nghiệm xứng đáng trong quá trình khám phá, 
          đánh giá, và mua sắm các sản phẩm của chúng tôi, cho dù bạn ở đâu trên khắp Việt Nam.
            Đây là chính sách mua hàng của cửa hàng chúng tôi. Vui lòng đọc kỹ trước khi
            mua hàng.
          </p>
          <h6 className="head6" style={{color: 'var(--color-primary-light)', marginBottom: '24px'}}>Điều khoản chung</h6>
          <ul>
            <li>
              <p className="body-small" style={{marginBottom: '16px'}}>
                Tất cả các sản phẩm được bán trên cửa hàng của chúng tôi đều là hàng chính hãng, mới 100%.
              </p>
            </li>
            <li>
              <p className="body-small" style={{marginBottom: '16px'}}>
                Giá sản phẩm được niêm yết trên website là giá bán cuối cùng.
              </p>
            </li>
            <li>
              <p className="body-small" style={{marginBottom: '16px'}}>
                Khách hàng có thể thanh toán bằng tiền mặt, thẻ tín dụng hoặc chuyển khoản ngân hàng.
              </p>
            </li>
          </ul>
          <h6 className="head6" style={{color: 'var(--color-primary-light)', marginBottom: '24px', marginTop: '24px'}}>Chính sách đổi trả</h6>
          <ul>
            <li>
              <p className="body-small" style={{marginBottom: '16px'}}>
                Khách hàng được đổi trả sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng.
              </p>
            </li>
            <li>
              <p className="body-small" style={{marginBottom: '64px'}}>
                Sản phẩm đổi trả phải còn nguyên tem mác, chưa qua sử dụng và còn nguyên hộp.
              </p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
export {BuyPolicy} 