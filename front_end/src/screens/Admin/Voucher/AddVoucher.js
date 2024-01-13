import React, { useState } from 'react';
import './AddVoucher.css'
import { useAuth } from '../../../hooks/useAuth';
import axios from 'axios';
import { BASE_URL } from '../../../app_logic/APIHandler';
import { useNavigate } from 'react-router-dom';

const AddVoucher = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [voucherData, setVoucherData] = useState({
        code: '',
        number_of_use: '',
        discount_amount: '',
        is_active: true,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVoucherData({
            ...voucherData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        async function sendData() {
            try {
                const req = await axios.post(BASE_URL + '/product/create_voucher',
                    voucherData,
                    {
                        headers: {
                            'Authorization': `Bearer ${user.access_token}`,
                            'Access-Control-Allow-Origin': '*',
                            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                            'Content-Type': 'application/json'
                        }
                    })
                if (req) {
                    alert("Tạo voucher thành công!");
                    navigate('/admin/voucher_list');
                }
            } catch (error) {
                console.log(error);
                if (error.response.status === 401) {
                    alert("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!");
                    logout((val) => { });
                } else {
                    alert("Đã có lỗi xảy ra. Vui lòng thử lại sau!");
                }
            }
        }
        await sendData();
    };

    return (
        <div className="container">
            <div className="col-sm-12 col-md-12 col-xl-12 col-lg-12">
                <h2 className="text-center">Thông tin voucher</h2>
                <div className="section-frame ">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                Mã voucher: <br></br></label>
                            <input
                                type="text"
                                name="code"
                                value={voucherData.code}
                                onChange={handleChange}
                                className="input-custom-voucher "
                            />

                        </div>
                        <div>
                            <label>
                                Số lần sử dụng: <br></br></label>
                            <input
                                type="text"
                                name="number_of_use"
                                value={voucherData.number_of_use}
                                onChange={handleChange}
                                className="input-custom-voucher "
                            />
                        </div>
                        <div>
                            <label>
                                Giá trị giảm giá: <br></br></label>
                            <input
                                type="text"
                                name="discount_amount"
                                value={voucherData.discount_amount}
                                onChange={handleChange}
                                className="input-custom-voucher "
                            />
                        </div>

                        <button
                            className='voucher-button label-l'
                            type="submit">
                            Lưu
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export { AddVoucher };
