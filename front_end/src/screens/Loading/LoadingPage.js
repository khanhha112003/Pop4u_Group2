import React from 'react'
import './style.css'

export default function LoadingPage() {
    return (
        <div className="spinner">
            <span className='body-large'>Bạn chờ Pop4u một chút nhé...</span>
            <div className="half-spinner"></div>
        </div>
    );
}

