import React, { useState } from 'react';
import 'react-bootstrap'

function ArtistDetailAdmin() {
    const dataArtist = [
        {
            '_id': '2',
            'artist_code' : 'JS01',
            'artist_name' : 'JISOO',
            'is_hot' :true,
            'artist_logo' : 'https://i.pinimg.com/originals/ee/26/8b/ee268b4f1338f69a55fec1d87203a14f.jpg',
            'artist_avatar' : 'https://i.pinimg.com/originals/ee/26/8b/ee268b4f1338f69a55fec1d87203a14f.jpg'
        }
    ]
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
    }
}
  
  return (
    <div>
        <div className='container'>
            {dataArtist.map(artist => (
                <div key={artist._id}>
                    <div className='row'>
                        <div className='col-8'> 
                            <label><h5>Tên nghệ sĩ</h5>
                                <input className="input-custom" type="text" name="artist_name" placeholder={artist.artist_name}/>
                            </label>
                        </div>
                        <div className='col-8'> 
                            <label>
                                <h5>Mã nghệ sĩ</h5>
                                <input className="input-custom" type="text" name="artist_name" placeholder={artist.artist_code} />
                            </label>
                        </div>
                        <div className='col-8'> 
                            <label htmlFor='is_hot'>
                                <h5>Nghệ sĩ hot?</h5>                                
                            </label>
                            <input style={{ width: '48px' }} className="input-custom" type="checkbox" id='is_hot' name="is_hot" checked={artist.is_hot} />
                        </div>
                        <div className='col-8'> 
                            <h5>Ảnh Logo</h5>                                
                            <img
                                src={artist.artist_logo}
                                alt={artist.artist_name}
                                style={{ width: '240px', height: '240px', objectFit: 'cover' }}
                            />
                            <label style={{ marginLeft:'36px' }}>
                                <p>Chọn ảnh khác</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>
                        <div className='col-8'> 
                            <h5>Ảnh Avatar</h5>                                
                            <img
                                src={artist.artist_avatar}
                                alt={artist.artist_name}
                                style={{ width: '240px', height: '240px', objectFit: 'cover'}}
                            />
                            <label style={{ marginLeft:'36px' }}>
                                <p>Chọn ảnh khác</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export {ArtistDetailAdmin}
