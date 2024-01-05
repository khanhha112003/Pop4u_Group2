import React from 'react';
import 'react-bootstrap'
import './BadgeList.css'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export const BadgeList = ({ data, small = true }) => {
	const list_badge_dict = {
		"Mới": data.is_new,
		"Bán chạy": data.is_hot,
		"Free ship": data.is_freeship,
		"Giảm giá": data.is_sale
	};

	const list_badge = Object.entries(list_badge_dict)
		.filter(([_, value]) => value)
		.map(([key, _]) => key)
		.slice(0, 2);

  return (
    <div>
      {small ? (
        <div className='d-flex'>
          {list_badge.map((item, idx) => (
            <div key={data.product_code + idx} className='product-badge'>
              <span className='label-s'>{item}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className='d-flex'>
          {list_badge.map((item, idx) => (
            <div key={data.product_code + idx} className='product-badge'>
              <h4 className='label-s'>{item}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
