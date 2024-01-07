import './BadgeList.css'
import React from 'react';
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

	const list_badge_item = <Stack direction="horizontal" gap={2}>
		{list_badge.map((item, idx) => (
			<Badge key={data.product_code + idx} bg="info" className='product-badge'>
				{item}
			</Badge>
		))}
	</Stack>;

	return (
		<div>
			{small ? (
				list_badge_item
			) : (
				<h4>
					{list_badge_item}
				</h4>
			)}
		</div>
	);
};


