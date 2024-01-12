import React from 'react'
import './style.css'

export default function LoadingPage({isAdmin = false}) {
    return (
        <div className="spinner">
            <span className='body-large'>
                {!isAdmin ? "Bạn chờ Pop4u một chút nhé..." : "Đang tải dữ liệu..."}
            </span>
            <div className="half-spinner"></div>
        </div>
    );
}

