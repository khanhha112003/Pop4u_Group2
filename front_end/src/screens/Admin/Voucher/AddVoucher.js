import React, { useState } from 'react';
import './AddVoucher.css'
const AddVoucher = () => {
  const [voucherData, setVoucherData] = useState({
    id: '',
    voucher_code: '',
    description: '',
    startDate: '',
    endDate: '',
    category: '',
    discountAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoucherData({
      ...voucherData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitted Voucher Data:', voucherData);
  };

  return (
    <div className="container">
       <div className="col-sm-12 col-md-12 col-xl-12 col-lg-12">
      <h2 className="text-center">Thông tin voucher</h2>
      <div className="section-frame ">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            ID: <br></br></label>
            <input
              type="text"
              name="id"
              value={voucherData.id}
              onChange={handleChange}
              className="input-custom-voucher "
            />
          
        </div>
        <div>
          <label>
            Mã voucher: <br></br></label>
            <input
              type="text"
              name="voucher_code"
              value={voucherData.voucher_code}
              onChange={handleChange}
              className="input-custom-voucher "
            />
          
        </div>
        <div>
          <label>
            Mô tả: <br></br></label>
            <input
              type="text"
              name="description"
              value={voucherData.description}
              onChange={handleChange}
              className="input-custom-voucher "
            />
          
        </div>
        <div>
          <label>
            Ngày bắt đầu: <br></br></label>
            <input
              type="date"
              name="startDate"
              value={voucherData.startDate}
              onChange={handleChange}
              className="input-custom-voucher"
            />
          
        </div>
        <div>
          <label>
            Ngày kết thúc: <br></br></label>
            <input
              type="date"
              name="endDate"
              value={voucherData.endDate}
              onChange={handleChange}
              className="input-custom-voucher "
            />
          
        </div>
        <div>
          <label>
            Loại voucher:<br></br></label>
            <select name="category" onChange={handleChange} value={voucherData.category} className="margin" >
              <option value="">Chọn loại voucher</option>
              <option value="Discount">Giảm giá (%)</option>
              <option value="Money Off">Giảm tiền (VND)</option>
              <option value="Free Shipping">FreeShip</option>
            </select>
          
        </div>
        {voucherData.category === 'Discount' && (
          <div>
            <label>
              Phần trăm giảm: <br></br></label>
              <input
                type="text"
                name="discountAmount"
                value={voucherData.discountAmount}
                onChange={handleChange}
                className="input-custom-voucher "
              />
              %
            
          </div>
        )}
        {voucherData.category === 'Money Off' && (
          <div>
            <label>
              Số tiền giảm: <br></br></label>
              <input
                type="text"
                name="discountAmount"
                value={voucherData.discountAmount}
                onChange={handleChange}
                className="input-custom-voucher"
              />
              $
            
          </div>
        )}
        
        
      </form>
      
      </div>
      <button button className='voucher-button label-l' type="submit">Lưu</button>
      </div>
    </div>
  );
};

export {AddVoucher};
