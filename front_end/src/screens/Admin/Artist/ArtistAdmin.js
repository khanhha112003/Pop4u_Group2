import React, { useState } from 'react';
import "react-bootstrap";
import './ArtistAdmin.css';
import { ReactComponent as SearchIcon } from "../Product/icon_productadmin_search.svg" 
import { ReactComponent as EditIcon } from "../../UserProfile/Icon_edit.svg"
import { useNavigate } from "react-router-dom";
function ArtistAdmin() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
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
  
    const filteredArtist = dataArtist.filter((artist) =>
      artist.artist_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      artist.artist_code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  return (
    <div className="container margin">
        <h2 className="text-center" style={{color:'#3F5AA9', marginTop:'1%'}}>Danh sách nghệ sĩ</h2>
        <hr></hr>
        <div class="search-container margin">
            <input 
            class="search-input"
            type="text"
            placeholder="Tìm kiếm nghệ sĩ"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
            <button class="search-button">
            <SearchIcon class="search-icon fas fa-search text-danger"></SearchIcon>
            </button>
            
        </div>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã Nghệ sĩ</th>
                    <th>Tên Nghệ sĩ</th>
                    <th>Thẻ</th>
                    <th>Ảnh logo</th>
                    <th>Ảnh đại diện</th>
                    <th>Xem chi tiết</th>
                </tr>
            </thead>
            <tbody>
            {filteredArtist.map((artist, index) => (
                <tr key={index}>
                    <td>{artist._id}</td>
                    <td>{artist.artist_code}</td>
                    <td>{artist.artist_name}</td>
                    <td>
                        <div className='hot-artist-tag'>
                            <span>{artist.is_hot ? 'Hot' : ''}</span>
                        </div>
                    </td>
                    <td>
                        <img
                        src={artist.artist_logo}
                        alt={artist.artist_name}
                        style={{ width: '50px', height: '50px' }}
                        />
                    </td>
                    <td>
                        <img
                        src={artist.artist_avatar}
                        style={{ width: '50px', height: '50px' }}
                        />
                    </td>
                    <td className="text-center"><a onClick={() => navigate("/admin/artist_detail")} style={{cursor: "pointer"}}><EditIcon></EditIcon></a></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export { ArtistAdmin }