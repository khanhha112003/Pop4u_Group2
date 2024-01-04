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
      <h2>Thông tin voucher</h2>
      <div className="section-frame ">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            ID: <br></br>
            <input
              type="text"
              name="id"
              value={voucherData.id}
              onChange={handleChange}
              className="input-custom-voucher margin-voucher"
            />
          </label>
        </div>
        <div>
          <label>
            Mã voucher: <br></br>
            <input
              type="text"
              name="voucher_code"
              value={voucherData.voucher_code}
              onChange={handleChange}
              className="input-custom-voucher margin-voucher"
            />
          </label>
        </div>
        <div>
          <label>
            Mô tả: <br></br>
            <input
              type="text"
              name="description"
              value={voucherData.description}
              onChange={handleChange}
              className="input-custom-voucher margin-voucher"
            />
          </label>
        </div>
        <div>
          <label>
            Ngày bắt đầu: <br></br>
            <input
              type="date"
              name="startDate"
              value={voucherData.startDate}
              onChange={handleChange}
              className="input-custom-voucher margin-voucher"
            />
          </label>
        </div>
        <div>
          <label>
            Ngày kết thúc: <br></br>
            <input
              type="date"
              name="endDate"
              value={voucherData.endDate}
              onChange={handleChange}
              className="input-custom-voucher margin-voucher"
            />
          </label>
        </div>
        <div>
          <label>
            Loại voucher:<br></br>
            <select name="category" onChange={handleChange} value={voucherData.category} className="margin" >
              <option value="">Chọn loại voucher</option>
              <option value="Discount">Giảm giá (%)</option>
              <option value="Money Off">Giảm tiền (VND)</option>
              <option value="Free Shipping">FreeShip</option>
            </select>
          </label>
        </div>
        {voucherData.category === 'Discount' && (
          <div>
            <label>
              Phần trăm giảm: <br></br>
              <input
                type="text"
                name="discountAmount"
                value={voucherData.discountAmount}
                onChange={handleChange}
                className="input-custom-voucher margin-voucher"
              />
              %
            </label>
          </div>
        )}
        {voucherData.category === 'Money Off' && (
          <div>
            <label>
              Số tiền giảm: <br></br>
              <input
                type="text"
                name="discountAmount"
                value={voucherData.discountAmount}
                onChange={handleChange}
                className="input-custom-voucher margin-voucher"
              />
              $
            </label>
          </div>
        )}
        
        
      </form>
      
      </div>
      <button className="input-button"type="submit">Lưu</button>
      
    </div>
  );
};

export {AddVoucher};
