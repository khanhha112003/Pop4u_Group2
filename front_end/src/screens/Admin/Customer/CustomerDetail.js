import React, { useState } from "react";
import "./CustomerDetail.css"
const CustomerDetail = ({ customer, onClose }) => {
  const [formData, setFormData] = useState({
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    datebirth: customer.datebirth,
    point: customer.point,
    type: customer.type,
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    })); 
    const { name, value } = e.target;
   
    if ((name === "phone" || name === "datebirth") && !(/^\d*$/).test(value)) {
      return; 
    }
  };

  const handleSave = () => {
    console.log("Form data saved:", formData);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="customer-detail-container">
      <h3>Chi tiết khách hàng</h3>
      <form>
      <label>Họ và tên:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={{color: "#000"}} />
       
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} style={{color: "#000"}}/>

        <label>Số điện thoại:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} style={{color: "#000"}}/>

        <label>Ngày sinh:</label>
        <input type="text" name="datebirth" value={formData.datebirth} onChange={handleInputChange} style={{color: "#000"}}/>

        <label>Điểm tích lũy:</label>
        <input type="text" name="point" value={formData.point} onChange={handleInputChange} style={{color: "#000"}} />

        <label>Loại khách hàng:</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          style={{color: "#000"}}
        >
          <option value="VIP">VIP</option>
          <option value="Thân Thiết">Thân Thiết</option>
        </select>

     

        <div>
          <button type="button" className="save" onClick={handleSave}>
            Save
          </button>
          <button type="button" className="cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerDetail;