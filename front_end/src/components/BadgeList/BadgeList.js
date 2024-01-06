// import React from 'react';
// import 'react-bootstrap'
// import './BadgeList.css'
// import Badge from 'react-bootstrap/Badge';
// import Stack from 'react-bootstrap/Stack';

// export const BadgeList = ({ data, small = true }) => {
// 	const list_badge_dict = {
// 		"Mới": data.is_new,
// 		"Bán chạy": data.is_hot,
// 		"Free ship": data.is_freeship,
// 		"Giảm giá": data.is_sale
// 	};

// 	const list_badge = Object.entries(list_badge_dict)
// 		.filter(([_, value]) => value)
// 		.map(([key, _]) => key)
// 		.slice(0, 2);

//   return (
//     <div>
//       {small ? (
//         <div className='d-flex'>
//           {list_badge.map((item, idx) => (
//             <div key={data.product_code + idx} className='product-badge'>
//               <span className='label-s'>{item}</span>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className='d-flex'>
//           {list_badge.map((item, idx) => (
//             <div key={data.product_code + idx} className='product-badge'>
//               <h4 className='label-s'>{item}</h4>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// look at this you stupid bitch, do you even know what is '!important' flag is ?
// send you best fuck
// let other can code or you code alone for now: <Note: ductran>
// about !important flag, the pagination is jiggling because you not set the proper class style for other element
// and it affected worked code, understand ?

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


