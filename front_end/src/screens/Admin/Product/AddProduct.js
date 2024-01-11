import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    _id: undefined,
    category: '',
    artist_code: '',
    num_of_rating: 0,
    artist: '',
    product_name: '',
    discount_price: 0,
    sell_price: 0,
    description: '',
    rating: 0,
    photo: [],
    product_code: '',
    stock: 0,

  });



  


  
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

  const [productImgList, setProductImgList] = useState([]);

  // ...

  const handleProductImageUpload = (e) => {
    const files = e.target.files;

    // Loop through selected files and transform each into base64
    const imgList = Array.from(files).map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageData = {
          name: file.name,
          base64: reader.result,
        };
        setProductImgList((prevList) => [...prevList, imageData]);
      };
      return null;
    });

    // Add image data to product state
    setProduct({
      ...product,
      photo: [...product.photo, ...imgList],
    });
  };

  // Display uploaded images
  const renderUploadedImages = () => {
    return productImgList.map((imgData, index) => (
      <div key={index}>
        <img src={imgData.base64} alt={imgData.name} style={{ width: '300px', height: '300px', margin:'20px' }} />
      </div>
    ));
  };



  return (
<div className="container">
<form onSubmit={handleSubmit}>

  <div className="row">
    <h2 className="text-center">Thông tin sản phẩm</h2>

    <div className="col-xs-12 col-sm-12 col-md-12 col-xl-7 col-lg-7">
      <div className="section-frame-admin margin">
        <div className="margin">
        <label>
          Tên sản phẩm: <br></br>
          </label>
          <input className="input-custom" type="text" name="product_name" value={product.product_name} onChange={handleChange} />
         </div>
         <div className="margin">
         <label>
         Mã Sản phẩm: <br></br>
         </label>
          <input className="input-custom " type="text" name="product_code" value={product.product_code} onChange={handleChange} />
        </div>
        <div className="margin">
        <label> Nghệ sĩ: <br></br></label>
          <input className="input-custom " type="text"  name="artist" value={product.artist} onChange={handleChange} />
        </div>
        <div className="margin">
        <label>Mô tả sản phẩm: <br></br></label>
        
          <input className="input-custom " type="text"  name="description" value={product.description} onChange={handleChange} />
        
        </div>
      </div>
    </div>

                <div className="col-sm-12 col-md-12 col-xl-5 col-lg-5">    
                <div className="section-frame-admin margin">
                <div className="margin">
        <label>
          Giá bán: <br></br></label>
          <input className="input-custom-price " type="number" name="discount_price" value={product.discount_price} onChange={handleChange} />
         
         </div>
         <div className="margin">
         <label>Giá khuyến mãi: <br></br></label>
          <input className="input-custom-price " type="number" name="sell_price" value={product.sell_price} onChange={handleChange} />
        </div>
                </div>
            </div>
            </div>

            <div className='row'>
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-7 col-lg-7">
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

      >
        <option value="">Chọn phân loại</option>
        <option value="Album">Album</option>
        <option value="Lightstick">Lightstick</option>
        <option value="Merch">Merch</option>
        <option value="Merch">Photobook</option>
        <option value="Merch">Vinyl</option>
      </select>
    </div>
        </label>
        </div>
        <div>
        
        <div className="margin" >
      Số lượng: <br></br>
      <input className="input-custom-price " type="number" name="stock" value={product.stock} onChange={handleChange} />
    </div>
        </div>
            </div>
            </div>
            <div className="col-sm-12 col-md-12 col-xl-5 col-lg-5">
            <div className="section-frame-admin margin">
              <input
              id="imgUpload"
              accept="image/*"
              type="file"
              onChange={handleProductImageUpload}
              multiple // Allow multiple file selection
              required
            />
         
        {/* Render uploaded images */}
          <div style={{ marginTop: '20px'}}>{renderUploadedImages()}</div>
          </div>
      </div>
      </div>
            
      <button className="input-button"type="submit">Lưu</button>
            </form>        
        </div>
         
  );
};

export {AddProduct};

