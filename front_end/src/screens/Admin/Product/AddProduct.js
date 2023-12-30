import React, { useState, useEffect} from 'react';
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
    option: [],
    description: '',
    rating: 0,
    photo: [],
    product_code: '',
    stock: 0,
    options: [{ size: '', quantity: 0 }],

  });


  const addOption = () => {
    setProduct({
      ...product,
      options: [...product.options, { size: '', quantity: 0 }],
    });
  };

  // Xóa option
  const deleteOption = (index) => {
    const newOptions = [...product.options];
    newOptions.splice(index, 1);
    setProduct({
      ...product,
      options: newOptions,
    });
  };

  // Cập nhật thông tin của option

  const handleOptionChange = (index, event) => {
    const { name, value } = event.target;
    const updatedOptions = [...product.options];
    updatedOptions[index][name] = value;

    setProduct({
      ...product,
      options: updatedOptions,
    });
  };

  useEffect(() => {
    let stock = 0;
    product.options.forEach((option) => {
      stock += Number(option.quantity);
    });

    setProduct({
      ...product,
      stock,
    });
  }, [product.options]);
  


  
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

  const [productImg, setProductImg] = useState("");
  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    };
  }
  


  return (
<div className="container">
<form onSubmit={handleSubmit}>

  <div className="row">
    <h2 className="center">Sản phẩm </h2>

    <div className="col-md-8">
      <div className="section-frame margin">
        <h3 className="center">Thông tin sản phẩm</h3>
        <div className="margin">
        <label>
          Tên sản phẩm: <br></br>
          <textarea type="text" cols="100" name="product_name" value={product.product_name} onChange={handleChange} />
         </label>
         </div>
         <div className="margin">
         Mã Sản phẩm: <br></br>
        <label>
          <textarea type="text" cols="100" name="product_code" value={product.product_code} onChange={handleChange} />
        </label>
        </div>
        <div className="margin">
         Nghệ sĩ: <br></br>
        <label>
          <textarea type="text" cols="100" name="artist" value={product.artist} onChange={handleChange} />
        </label>
        </div>
        <div className="margin">
        Mô tả sản phẩm: <br></br>
        <label>
          <textarea type="text" cols="100" rows="5" name="description" value={product.description} onChange={handleChange} />
        </label>
        </div>
      </div>
    </div>


                
                <div className="col-md-4">    
                <div className="section-frame margin">
                <div className="margin">
        <label>
          Giá bán: <br></br>
          <textarea type="number" name="discount_price" value={product.discount_price} onChange={handleChange} />
         </label>
         </div>
         <div className="margin">
         Giá khuyến mãi: <br></br>
        <label>
          <textarea type="number" name="sell_price" value={product.sell_price} onChange={handleChange} />
        </label>
        </div>


                </div>
            </div>
            </div>

            <div className='row'>
            <div className="col-md-8">
            <div className="section-frame margin">
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
        <div className="margin">
         Tạo Option: <br></br>
        <div className="margin" >
      <button className="margin" onClick={addOption}>Thêm Option</button>
      {product.options.map((option, index) => (
        <div key={index}>
          Option: 
          <input
            type="text"
            name="size"
            value={option.size}
            onChange={(e) => handleOptionChange(index, e)}
          />
          Số lượng: 
          <input
            type="number"
            name="quantity"
            value={option.quantity}
            onChange={(e) => handleOptionChange(index, e)}
          />
          <button className="margin" onClick={() => deleteOption(index)}>Xóa Option</button>
        </div>
           

      ))}
      <p className="margin">Tổng stock: {product.stock}</p>
    </div>
    </div>
        </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="section-frame margin">
            <input
          id="imgUpload"
          accept="image/*"
          type="file"
          onChange={handleProductImageUpload}
          required
        />
          <div>
        {productImg ? (
          <>
            <img src={productImg} alt="error!" style={{
                    width: '100%',
                    maxWidth: "300px"
                  }}/>
          </>
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
      </div>
      </div>
      </div>
            </div>
            <button >Lưu</button>
            </form>        
        </div>
         
  );
};

export {AddProduct};

