import React, { useState } from 'react';
import './ProductList.css';

const ProductListAdmin = () => {
  const data = [
    {
      "_id": {"$numberInt": "2"},
      "category": "Album",
      "artist_code": "BP01",
      "num_of_rating": {"$numberInt": "24"},
      "artist": "BLACKPINK",
      "product_name": "BLACKPINK - 1st FULL ALBUM [THE ALBUM]",
      "discount_price": {"$numberInt": "450000"},
      "sell_price": {"$numberInt": "500000"},
      "option": ["Ver 1", "Ver 2", "Ver 3", "Ver 4"],
      "description": "BLACKPINK - THE ALBUM (Random Ver.)\n \n* Date of Release : 2020. 10. 06\n \nVER : Ver.1 / Ver2 / Ver.3 / Ver.4\nPHOTOBOOK : 96p\nPOSTCARD SET : 4p 1set\nCREDITS SHEET : 2p\nLYRICS BOOKET : 14p\nPHOTOCARD : Random 2p out of 20p\nPOSTCARD : Random 2p out of 20p\nSTICKER : Random 1p out of 4p\nMOUNTED PHOTOCARD",
      "stock": {"$numberInt": "100"},
      "rating": {"$numberInt": "5"},
      "photo": [
        "https://upload.wikimedia.org/wikipedia/vi/5/5f/Blackpink-_The_Album.png",
        "https://kpopersxela.com/wp-content/uploads/2021/03/product.22099.159858902587810.jpg",
        "https://shop.koari.net/client_info/KOARI/itemimage/KC02151/KC02151_01.jpg",
        "https://shop.koari.net/client_info/KOARI/itemimage/KC02152/KC02152_01.jpg",
        "https://kpopersxela.com/wp-content/uploads/2021/03/product.22102.159858979386078.jpg"
      ],
      "product_code": "ABP1001"
    },
    {"_id":{"$numberInt":"20"},
    "category":"Photobook",
    "artist_code":"JS01",
    "num_of_rating":{"$numberInt":"28"},
    "artist":"JISOO",
    "product_name":"JISOO [ME] (PHOTOBOOK) (SPECIAL EDITION)",
    "discount_price":{"$numberInt":"950000"},
    "sell_price":{"$numberInt":"1000000"},
    "option":[],
    "description":"- SLEEVE (1ea)\n- PHOTOBOOK (1ea / 176p)\n- POSTCARDBOOK (1ea / 20pcs)\n- SELFIE PHOTOCARD (RANDOM 1 of 2)\n- POLAROID (RANDOM 1 of 2)\n- STICKER (1ea)\n- CLEAR PHOTOCARD (1ea)\n- LUGGAGE TAG (1ea)\n- INSTAX PHOTO FILM (ONLY 103ea / RANDOM 1 of 5)\n* Random Instax Photo Film : Limited quantity of 103ea \n* The components of the product may be subject to slight changes during the manufacturing process",
    "stock":{"$numberInt":"60"},
    "rating":{"$numberInt":"5"},
    "photo":["https://img.ws.mms.shopee.vn/vn-11134207-7r98o-lnooxpp4dkvh5f","https://img.joomcdn.net/3d2d3c6ddaaa72ea04b6ced639c4c7f1f8143a5f_original.jpeg","https://cdn-amz.woka.io/images/I/61l-ONBuC6L.SS400.jpg"],
    "product_code":"PJS1001"},
    {"_id":{"$numberInt":"34"},"category":"Album","artist_code":"BT01","num_of_rating":{"$numberInt":"35"},"artist":"BTS","product_name":"ALBUM BTS - MAP OF THE SOUL : 7","discount_price":{"$numberInt":"450000"},"sell_price":{"$numberInt":"500000"},"option":["Ver 1","Ver 2","Ver 3","Ver 4"],"description":"\"BTS - MAP OF THE SOUL : 7 (Random Ver.)\n\nVER : Ver. 1 / Ver. 2 / Ver. 3 / Ver. 4\nSIZE : 223*295*24mm\nPHOTOBOOK : 205 x 277 (mm) / 36 Pages (different inside leaf photo for each version)\nLYRIC BOOK : 140 x 185 (mm) / 52 Pages\nMINI BOOK (HYYH The Notes) : 90 x 127 (mm) / 20 Pages\nPHOTO CARD : Random 1p out of 8p\nPOSTCARD : 1p\nSTICKER : 1p\nCOLORING PAPER : 1p\"","stock":{"$numberInt":"100"},"rating":{"$numberInt":"5"},"photo":["https://bandina.vn/wp-content/uploads/2023/02/product.19709.161103869334845.jpg","https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51XLchG8d7L._UF1000,1000_QL80_.jpg","https://m.media-amazon.com/images/I/61dMr8RTFvL._UF894,1000_QL80_.jpg","https://m.media-amazon.com/images/I/61Rh1cFUnZL._UF1000,1000_QL80_.jpg","https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61Pj0N8bp2L._UF1000,1000_QL80_.jpg"],"product_code":"ABT1001"}, 
    
    // Add more products here
  ];

  const [filterCategory, setFilterCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = data.filter((product) =>
    product.category.toLowerCase().includes(filterCategory.toLowerCase()) &&
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container margin">
      <h2 className="text-center">Danh sách sản phẩm</h2>
      <button className="input-button" type="submit"><a href="/admin/add_product">Tạo mới</a></button>
      <div>
      <label htmlFor="categoryFilter">Filter by Category:</label>
      <select
        id="categoryFilter"
        onChange={(e) => setFilterCategory(e.target.value)}
        value={filterCategory}
      >
        <option value="">All</option>
        {/* Tạo các option từ danh sách category duy nhất */}
        {[...new Set(data.map((product) => product.category))].map(
          (category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          )
        )}
      </select>
      </div>
        <div className="margin">
      <input
        type="text"
        placeholder="Search by Product Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
      {/* Bảng hiển thị danh sách sản phẩm */}
      <table>
        <thead>
          <tr>
            <th>Product Photo</th>
            <th>Product Name</th>
            <th>Product Code</th>
            <th>Category</th>
            <th>Discount Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>
                <img
                  src={product.photo[0]}
                  alt={product.product_name}
                  style={{ width: '50px', height: '50px' }}
                />
              </td>
              <td>{product.product_name}</td>
              <td>{product.product_code}</td>
              <td>{product.category}</td>
              <td>{product.discount_price.$numberInt}</td>
              <td>{product.stock.$numberInt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { ProductListAdmin };
