import React from "react";

function PaymentPolicy() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <h4 className="head4 text-center" 
            style={{ color: 'var(--color-primary-light)', marginTop: '24px'}}>
            Chính Sách Thanh Toán
          </h4>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
        <hr></hr>
        <p className="body-small" style={{marginBottom: '16px'}}>
          Đây là chính sách thanh toán của cửa hàng chúng tôi. Vui lòng đọc kỹ trước khi
          mua hàng.
        </p>
        <h6 className="head6" style={{color: 'var(--color-primary-light)', marginBottom: '24px', marginTop: '24px'}}>
          Phương thức thanh toán
        </h6>
        <p className="body-small" style={{marginBottom: '16px'}}>
          Chúng tôi cung cấp các phương thức thanh toán sau:
        </p>
        <ul>
          <li>
            <p className="body-small" style={{marginBottom: '16px'}}>
              Thanh toán khi nhận hàng (COD)
            </p>
          </li>
          <li>
            <p className="body-small" style={{marginBottom: '16px'}}>
              Thanh toán thông qua thẻ Napas
            </p>
          </li>
          <li>
            <p className="body-small" style={{marginBottom: '32px'}}>
              Thanh toán thông qua Ví điện tử MoMo
            </p>
          </li>
        </ul>
        <h6 className="head6" style={{color: 'var(--color-primary-light)', marginBottom: '24px', marginTop: '24px'}}>
          Quy trình thanh toán
        </h6>
        <p className="body-small" style={{marginBottom: '16px'}}>
          Để thanh toán cho đơn hàng của bạn, bạn có thể thực hiện theo các bước sau:
        </p>
        <ol>
          <li className="body-small">
            <p className="body-small" style={{marginBottom: '16px'}}>
              Chọn phương thức thanh toán mà bạn muốn sử dụng.
            </p>
          </li>
          <li className="body-small">
            <p className="body-small" style={{marginBottom: '16px'}}>
            Nhập thông tin thanh toán của bạn.
            </p>
          </li>
          <li className="body-small">
            <p className="body-small" style={{marginBottom: '32px'}}>
            Xác nhận thanh toán.
            </p>
          </li>
        </ol>
        <h6 className="head6" style={{color: 'var(--color-primary-light)', marginBottom: '24px', marginTop: '24px'}}>
          An toàn thanh toán
        </h6>
        <p className="body-small" style={{marginBottom: '64px'}}>
        Chúng tôi sử dụng các biện pháp bảo mật tiên tiến để đảm bảo an toàn cho thông tin thanh toán của bạn.</p>
        </div>
      </div>
    </div>
  );
}
export {PaymentPolicy}