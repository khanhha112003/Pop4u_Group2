import React from "react";

function PersonalData() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <h4 className="head4 text-center" 
            style={{ color: 'var(--color-primary-light)', marginTop: '24px'}}>
              Dữ Liệu Cá Nhân
          </h4>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <hr></hr>
          <div style={{ backgroundColor: 'var(--color-primary-container-light)', padding: '56px 32px', borderRadius: '20px', marginBottom: '32px'}}>
            <p className="body-big text-center" style={{ color: 'var(--color-on-primary-container-light)', marginBlockEnd: '0'}}>
              "Dữ liệu cá nhân của khách hàng sẽ được bảo mật tuyệt đối."
            </p>
          </div>
          <p className="body-small" style={{marginBottom: '32px'}}>
            Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp
            tốt nhất bảo vệ thông tin và việc thanh toán của quý khách. Thông tin của quý khách
            trong quá trình thanh toán sẽ được đảm bảo an toàn. Sau khi quý khách hoàn thành quá trình 
            đặt hàng, quý khách sẽ thoát khỏi chế độ an toàn.
          </p>
          <p className="body-small" style={{marginBottom: '32px'}}>
            Quý khách không được sử dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can thiệp 
            vào hệ thống hay làm thay đổi cấu trúc dữ liệu. Trang web cũng nghiêm cấm việc phát tán, 
            truyền bá hay cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu 
            của hệ thống. Cá nhân hay tổ chức vi phạm sẽ bị tước bỏ mọi quyền lợi cũng như sẽ bị truy tố 
            trước pháp luật nếu cần thiết.
          </p>
          <p className="body-small" style={{marginBottom: '32px'}}>
            Mọi thông tin giao dịch sẽ được bảo mật ngoại trừ trong trường hợp cơ quan pháp luật yêu cầu.
          </p>
        </div>
      </div>
    </div>
  );
}
export {PersonalData}