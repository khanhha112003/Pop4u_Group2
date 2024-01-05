// import React, { useState } from 'react';
// import "react-bootstrap";

// function ArtistAdmin() {
//     const [searchTerm, setSearchTerm] = useState('');
  
//     const filteredArtist = data.filter((artist) =>
//       artist.artist_name.toLowerCase().includes(searchTerm.toLowerCase()),
//       artist.artist_code.toLowerCase().includes(searchTerm.toLowerCase())
//     );
  
//   return (
//     <div>
//         <div>
//             <input
//             type="text"
//             placeholder="Tìm kiếm nghệ sĩ"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             />
//         </div>
//         <table>
//             <thead>
//                 <tr>
//                     <th>STT</th>
//                     <th>Mã Nghệ sĩ</th>
//                     <th>Tên Nghệ sĩ</th>
//                     <th>Thẻ</th>
//                     <th>Ảnh logo</th>
//                     <th>Ảnh đại diện</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {filteredArtist.map((product, index) => (
//                 <tr key={index}>
//                     <td>{artist._id}</td>
//                     <td>{artist.artist_code}</td>
//                     <td>{artist.artist_name}</td>
//                     <td>
//                         <div className='hot-artist-tag'>
//                             <span>{artist.is_hot ? 'hot' : ''}</span>
//                         </div>
//                     </td>
//                     <td>
//                         <img
//                         src={artist.artist_logo}
//                         alt={product.product_name}
//                         style={{ width: '50px', height: '50px' }}
//                         />
//                     </td>
//                     <td>
//                         <img
//                         src={artist.artist_avatar}
//                         alt={product.product_name}
//                         style={{ width: '50px', height: '50px' }}
//                         />
//                     </td>
//                 </tr>
//             ))}
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export { ArtistAdmin }