import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bootstrap';

export default function NotFoundPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
        style={{ width: '50%', maxWidth: '400px' }} // Adjust the width of the image here
      />
      <Link
        className="btn btn-primary"
        role="button"
        to="/about"
        style={{ width: '200px' }} // Adjust the width of the button here
      >
        Về trang chủ
      </Link>
    </div>
  );
}
