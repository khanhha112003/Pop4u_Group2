import React, { useState, useEffect } from 'react';
import "react-bootstrap";
import './ArtistAdmin.css';
import { ReactComponent as SearchIcon } from "../Product/icon_productadmin_search.svg"
import { ReactComponent as EditIcon } from "../../UserProfile/Icon_edit.svg"
import { useNavigate } from "react-router-dom";
import { basicGetRequets } from '../../../app_logic/APIHandler';
import LoadingPage from '../../Loading/LoadingPage';


export function ArtistAdmin() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [dataArtist, setDataArtist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const newProductRequest = basicGetRequets("/artist/artist_list", { type_filter: "all", limit: 1000 });
        newProductRequest
            .then((responses) => {
                let data = responses.data.list_artist
                setDataArtist(data)
            }).catch(error => {
                alert("Lỗi mạng")
                navigate("/")
            }).finally(() => {
                setLoading(false);
            });
    }, [navigate]);

    const filteredArtist = dataArtist.filter((artist) =>
        artist.artist_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        artist.artist_code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <LoadingPage isAdmin={true} />;
    }

    return (
        <div className="container margin">
            <h2 className="text-center" style={{ color: '#3F5AA9', marginTop: '1%' }}>Danh sách nghệ sĩ</h2>
            <hr></hr>
            <div className="search-container margin">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Tìm kiếm nghệ sĩ"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="search-button">
                    <SearchIcon className="search-icon fas fa-search text-danger"></SearchIcon>
                </button>
            </div>
            <div style={{ marginTop: '32px', marginBottom: '16px' }}>
                <button onClick={() => navigate("/admin/artist_add")} type="button" className="btn btn-primary btn-sm">Thêm nghệ sĩ mới</button>
            </div>
            <table className='admin-table'>
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
                                    <div>
                                        {artist.is_hot && (
                                            <button type="button" className="btn btn-info">
                                                <span>Hot</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <img
                                    src={artist.artist_logo}
                                    alt={artist.artist_name}
                                    style={{ width: '72px', height: '72px', objectFit: 'cover', borderRadius: '12px' }}
                                />
                            </td>
                            <td>
                                <img
                                    alt={artist.artist_avatar}
                                    src={artist.artist_avatar}
                                    style={{ width: '72px', height: '72px', objectFit: 'cover', borderRadius: '12px' }}
                                />
                            </td>
                            <td className="text-center"><a onClick={() => navigate("/admin/artist_detail", { state: artist})} style={{ cursor: "pointer" }}><EditIcon></EditIcon></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}