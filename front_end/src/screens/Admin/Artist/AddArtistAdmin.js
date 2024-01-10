import React, { useState } from 'react';

import'react-bootstrap';


function AddArtistAdmin() {
    const [avatarImage, setAvatarImage] = useState(null);
    const [logoImage, setLogoImage] = useState(null);
  
    const handleImageChange = (event, setImageFunction) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setImageFunction(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleAvatarImage = (event) => {
      handleImageChange(event, setAvatarImage);
    };
  
    const handleLogoImage = (event) => {
      handleImageChange(event, setLogoImage);
    };
  
  return (
    <div>
        <div className='container'>
            <div className='row text-center' style={{ marginBottom: '32px', marginTop: '32px' }}>
                <h3 style={{ color: 'var(--color-primary-light)' }}>Thêm thông tin nghệ sĩ mới</h3>
            </div>
                <div >
                    <div className='row justify-content-center'>
                        <div className='col-8' style={{ marginBottom: '32px' }}> 
                            <label><h5>Tên nghệ sĩ</h5>
                                <input className="input-custom" type="text" name="artist_name"/>
                            </label>
                        </div>
                        <div className='col-8' style={{ marginBottom: '32px' }}> 
                            <label>
                                <h5>Mã nghệ sĩ</h5>
                                <input className="input-custom" type="text" name="artist_code"/>
                            </label>
                        </div>
                        <div className='col-8 d-flex' style={{ marginBottom: '32px' }}> 
                            <label htmlFor='is_hot'>
                                <h5 style={{ marginRight: '24px' }}>Nghệ sĩ hot?</h5>                                
                            </label>
                            <input style={{ width: '24px' }} className="input-custom" type="checkbox" id='is_hot' name="is_hot"/>
                        </div>
                        <div className='col-8' style={{ marginBottom: '32px' }}> 
                            <label>
                                <h5>Mô tả về nghệ sĩ</h5>
                                <input style={{ height: '128px' }} className="input-custom" type="text" name="artist_description"/>
                            </label>
                        </div>
                        <div className='col-8' style={{ marginBottom: '32px' }}> 
                            <h5>Ảnh Logo</h5>                                
                            <img
                                src={logoImage}
                                style={{ border:'0', width: '240px', height: '240px', objectFit: 'cover', borderRadius: '48px'  }}
                            />
                            <label style={{ marginLeft:'36px' }}>
                                <p>Chọn ảnh Logo nghệ sĩ</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleLogoImage}
                                />
                            </label>
                        </div>
                        <div className='col-8'> 
                            <h5>Ảnh Avatar</h5>                                
                            <img
                                src={avatarImage}
                                style={{ border:'0', width: '240px', height: '240px', objectFit: 'cover', borderRadius: '48px' }}
                            />
                            <label style={{ marginLeft:'36px' }}>
                                <p>Chọn ảnh Avatar nghệ sĩ</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarImage}
                                />
                            </label>
                        </div>
                        <div className='col-8 text-center' style={{ marginBottom:'64px' }}>
                            <button type="button" class="btn btn-primary btn-lg">Lưu thông tin</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export {AddArtistAdmin}