import React, { useState } from 'react';
import './AddProduct.css';

const ProductDetailEdit = () => {
    const handleImageChange = (index) => (e) => {
        const files = e.target.files;
        const updatedImages = [...product.photo];
    
        if (files.length > 0) {
          const reader = new FileReader();
          reader.readAsDataURL(files[0]);
          reader.onload = () => {
            updatedImages[index] = reader.result;
            setProduct({
              ...product,
              photo: updatedImages,
            });
          };
        }
      };
    
      const renderProductImages = () => {
        return product.photo.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Product Image ${index}`} style={{ width: '300px', height: '300px', margin: '20px' }} />
            <input type="file" onChange={handleImageChange(index)} />
          </div>
        ));
      };
    
    const [product, setProduct] = useState(
        {
          "_id": {"$numberInt": "2"},
          "category": "Album",
          "artist_code": "BP01",
          "num_of_rating": {"$numberInt": "24"},
          "artist": "BLACKPINK",
          "product_name": "BLACKPINK - 1st FULL ALBUM [THE ALBUM]",
          "discount_price": {"$numberInt": "450000"},
          "sell_price": {"$numberInt": "500000"},
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
        },)


  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

  };



  return (
<div className="container">
<form onSubmit={handleSubmit}>

  <div className="row">
    <h2 className="text-center">Thông tin sản phẩm</h2>

    <div className="col-md-8">
      <div className="section-frame-admin margin">
        <div className="margin">
        <label>
          Tên sản phẩm: <br></br>
          <input className="input-custom margin" type="text" name="product_name" value={product.product_name} onChange={handleChange} />
         </label>
         </div>
         <div className="margin">
         Mã Sản phẩm: <br></br>
        <label>
          <input className="input-custom margin" type="text" name="product_code" value={product.product_code} onChange={handleChange} />
        </label>
        </div>
        <div className="margin">
         Nghệ sĩ: <br></br>
        <label>
          <input className="input-custom margin" type="text"  name="artist" value={product.artist} onChange={handleChange} />
        </label>
        </div>
        <div className="margin">
        Mô tả sản phẩm: <br></br>
        <label>
          <input className="input-custom margin" type="text"  name="description" value={product.description} onChange={handleChange} />
        </label>
        </div>
      </div>
    </div>


                
                <div className="col-md-4">    
                <div className="section-frame-admin margin">
                <div className="margin">
        <label>
          Giá bán: <br></br>
          <input className="input-custom-price margin" type="number" name="discount_price" value={product.discount_price.$numberInt} onChange={handleChange} />
         </label>
         </div>
         <div className="margin">
         Giá khuyến mãi: <br></br>
        <label>
          <input className="input-custom-price margin" type="number" name="sell_price" value={product.sell_price.$numberInt} onChange={handleChange} />
        </label>
        </div>
                </div>
            </div>
            </div>

            <div className='row'>
            <div className="col-md-8">
            <div className="section-frame-admin margin">
            <div className="margin">
         </div>
         <div className="margin">
         Nhóm sản phẩm: <br></br>
        <label>
        <div>
      <select
        id="productClassification"
        name="classification"
        value={product.category}
      >
        <option value="">{product.category}</option>
      </select>
    </div>
        </label>
        </div>
        <div>
        
        <div className="margin" >
      Số lượng: <br></br>
      <input className="input-custom-price margin" type="number" name="stock" value={product.stock.$numberInt} onChange={handleChange} />
    </div>
        </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="section-frame-admin margin">
            
<div>{renderProductImages()}</div>
      
          </div>
      </div>
      </div>
            
      <button className="input-button"type="submit">Lưu</button>
            </form>        
        </div>
         
  );
};

export {ProductDetailEdit};

