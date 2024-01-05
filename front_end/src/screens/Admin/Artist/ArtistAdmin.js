import React, { useState } from 'react';
import "react-bootstrap";
import './ArtistAdmin.css'

function ArtistAdmin() {
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
    <div>
        <div>
            <input
            type="text"
            placeholder="Tìm kiếm nghệ sĩ"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
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
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export { ArtistAdmin }