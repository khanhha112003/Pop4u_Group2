import React from 'react'
import './style.css'

export default function LoadingPage() {
    return (
        <div className="spinner">
            <span>Loading...</span>
            <div className="half-spinner"></div>
        </div>
    );
}

