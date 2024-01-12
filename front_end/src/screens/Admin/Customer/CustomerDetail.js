import React from "react";
import "./CustomerDetail.css"


function CustomerDetail (){

    const data = [
    {
      "_id":'1',
      "name": "Xuân Thiều",
      "email": "thieuntx21411@st.uel.edu.vn",
      "phone": "0975109849",
      "datebirth": "01/01/2003",
      "point":"20",
      'type':"Thân thiết",
    },
    {
      "_id":'2',
      "name": "Thanh Lực",
      "email": "lucnt21411@st.uel.edu.vn",
      "phone": "08132943943",
      "datebirth": "01/01/2003",
      "point":"200",
      'type':"VIP",
    },
    {
      "_id":'3',
      "name": "Thanh Tâm",
      "email": "tamltt21411@st.uel.edu.vn",
      "phone": "0294241424",
      "datebirth": "01/01/2003",
      "point":20,
      'type':"Thân thiết",
    },
    {
      "_id":'4',
      "name": "Khánh Hà",
      "email": "hapnk21411@st.uel.edu.vn",
      "phone": "0294241424",
      "datebirth": "01/01/2003",
      "point":400,
      'type':"VIP",
    },
    {
      "_id":'5',
      "name": "Anh Thuy",
      "email": "thuybta21411@st.uel.edu.vn",
      "phone": "0192434224",
      "datebirth": "01/01/2003",
      "point":20,
      'type':"Thân thiết",
    },
    {
      "_id":'6',
      "name": "Gia Huy",
      "email": "huylg21411@st.uel.edu.vn",
      "phone": "07213144",
      "datebirth": "01/01/2003",
      "point":200,
      'type':"VIP",
    },
    {
      "_id":'7',
      "name": "Như Ý",
      "email": "thieuntx21411@st.uel.edu.vn",
      "phone": "0294241424",
      "datebirth": "01-01-2003",
      "point":60,
      'type':"Thân thiết",
    },
    
  ];

  const customer =data[1];
  
  return (
    <div className="customer-detail-container">
    <h2>Thông tin chi tiết khách hàng</h2>
    <div className="customer-detail">
      <div>
        <label>Tên Khách hàng:</label>
        <span>{customer.name}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{customer.email}</span>
      </div>
      <div>
        <label>Số điện thoại:</label>
        <span>{customer.phone}</span>
      </div>
      <div>
        <label>Ngày sinh:</label>
        <span>{customer.datebirth}</span>
      </div>
      <div>
        <label>Điểm tích lũy:</label>
        <span>{customer.point}</span>
      </div>
      <div>
        <label>Loại khách hàng:</label>
        <span>{customer.type}</span>
      </div>
    </div>
  </div>
  );


};
export {CustomerDetail};