import React from "react";

function ShipPolicy() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <h4 className="head4 text-center" 
            style={{ color: 'var(--color-primary-light)', marginTop: '24px'}}>
              Chính Sách Giao Hàng
          </h4>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <hr></hr>
          <p className="body-small" style={{marginBottom: '32px'}}>
            Đây là chính sách giao hàng của cửa hàng chúng tôi. Vui lòng đọc kỹ trước khi
            mua hàng.
          </p>
          <h6 className="head6" 
          style={{color: 'var(--color-primary-light)', marginBottom: '20px'}}>
            Phí vận chuyển
          </h6>
          <p className="body-small" style={{marginBottom: '32px'}}>
            Phí vận chuyển sẽ được tính dựa trên địa chỉ giao hàng và phương thức vận chuyển
            mà bạn lựa chọn.
          </p>
          <h6 className="head6" 
          style={{color: 'var(--color-primary-light)', marginBottom: '20px'}}>
            Thời gian vận chuyển
          </h6>
          <p className="body-small" style={{marginBottom: '64px'}}>
            Thời gian vận chuyển dự kiến là từ 2-5 ngày làm việc.
          </p>

          </div>
      </div>
    </div>
  );
}
export {ShipPolicy}