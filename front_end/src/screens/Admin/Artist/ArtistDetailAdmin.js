import React, { useState } from 'react';
import 'react-bootstrap'

function ArtistDetailAdmin() {
    const dataArtist = [
        {"_id":"22","artist_name":"JISOO","artist_code":"JS01","is_hot":true,"artist_logo":"https://i.pinimg.com/originals/ee/26/8b/ee268b4f1338f69a55fec1d87203a14f.jpg","artist_avatar":"https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/29/1099051/209419948_8601681615.jpg","artist_description":"\nJisoo, tên đầy đủ là Kim Jisoo, là một ca sĩ, vũ công và diễn viên người Hàn Quốc. Cô là thành viên của nhóm nhạc nữ Blackpink do YG Entertainment thành lập và quản lý. Jisoo sinh ngày 3 tháng 1 năm 1995 tại Seoul, Hàn Quốc. Cô có một anh trai. Jisoo bắt đầu học múa từ khi còn nhỏ và tham gia nhiều cuộc thi múa. Năm 2011, cô tham gia chương trình thực tế sống còn \"YG Entertainment's K-pop Star Season 1\" của YG Entertainment và giành vị trí thứ 2. Jisoo ra mắt với tư cách là thành viên của Blackpink vào ngày 8 tháng 8 năm 2016. Ngoài hoạt động với Blackpink, Jisoo cũng đã tham gia một số bộ phim truyền hình và phim điện ảnh, bao gồm \"The Producers\" (2015), \"Arthdal Chronicles\" (2019) và \"Snowdrop\" (2021). Jisoo phát hành album solo đầu tay của mình, \"ME\", vào ngày 2 tháng 3 năm 2023. Album bao gồm hai bài hát, \"Flower\" và \"All Eyes On Me\"."},
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
            <div className='row text-center' style={{ marginBottom: '32px', marginTop: '32px' }}>
                <h3 style={{ color: 'var(--color-primary-light)' }}>Chỉnh sửa thông tin nghệ sĩ</h3>
            </div>
            {dataArtist.map(artist => (
                <div key={artist._id}>
                    <div className='row justify-content-center'>
                        <div className='col-8' style={{ marginBottom: '32px' }}> 
                            <label><h5>Tên nghệ sĩ</h5>
                                <input className="input-custom" type="text" name="artist_name" placeholder={artist.artist_name} value={artist.artist_name}/>
                            </label>
                        </div>
                        <div className='col-8' style={{ marginBottom: '32px' }}> 
                            <label>
                                <h5>Mã nghệ sĩ</h5>
                                <input className="input-custom" type="text" name="artist_name" placeholder={artist.artist_code} value={artist.artist_code}/>
                            </label>
                        </div>
                        <div className='col-8 d-flex' style={{ marginBottom: '32px' }}> 
                            <label htmlFor='is_hot'>
                                <h5 style={{ marginRight: '24px' }}>Nghệ sĩ hot?</h5>                                
                            </label>
                            <input style={{ width: '24px' }} className="input-custom" type="checkbox" id='is_hot' name="is_hot" checked={artist.is_hot} />
                        </div>
                        <div className='col-8' style={{ marginBottom: '32px' }}> 
                            <label>
                                <h5>Mô tả về nghệ sĩ</h5>
                                <input style={{ height: '128px' }} className="input-custom" type="text" name="artist_description" value={artist.artist_description}/>
                            </label>
                        </div>
                        <div className='col-8' style={{ marginBottom: '32px' }}> 
                            <h5>Ảnh Logo</h5>                                
                            <img
                                src={artist.artist_logo}
                                alt={artist.artist_name}
                                style={{ width: '240px', height: '240px', objectFit: 'cover', borderRadius: '48px' }}
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
                                style={{ width: '240px', height: '240px', objectFit: 'cover', borderRadius: '48px' }}
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
                        <div className='col-8 text-center' style={{ marginBottom:'64px' }}>
                            <button type="button" className="btn btn-primary btn-lg">Lưu chỉnh sửa</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export {ArtistDetailAdmin}
