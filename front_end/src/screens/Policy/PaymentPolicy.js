import React from "react";

function PaymentPolicy() {
  return (
    <div className="container">
      <h2 className="text-center margin">Chính sách thanh toán</h2>
      <hr></hr>
      <p>
        Đây là chính sách thanh toán của cửa hàng chúng tôi. Vui lòng đọc kỹ trước khi
        mua hàng.
      </p>
      <h3>Phương thức thanh toán</h3>
      <p>
        Chúng tôi cung cấp các phương thức thanh toán sau:
        <ul>
          <li>Thanh toán khi nhận hàng (COD)</li>
          <li>Thanh toán thông qua thẻ Napas</li>
          <li>Thanh toán thông qua Ví điện tử MoMo</li>
        </ul>
      </p>
      <h3>Quy trình thanh toán</h3>
      <p>
        Để thanh toán cho đơn hàng của bạn, bạn có thể thực hiện theo các bước sau:
        <ol>
          <li>Chọn phương thức thanh toán mà bạn muốn sử dụng.</li>
          <li>Nhập thông tin thanh toán của bạn.</li>
          <li>Xác nhận thanh toán.</li>
        </ol>
      </p>
      <h3>An toàn thanh toán</h3>
      <p>
        Chúng tôi sử dụng các biện pháp bảo mật tiên tiến để đảm bảo an toàn cho thông tin thanh toán của bạn.
      </p>
    </div>
  );
}
export {PaymentPolicy}