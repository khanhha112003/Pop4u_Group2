import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-bootstrap'
import { BASE_URL } from '../../../app_logic/APIHandler';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

export function ArtistDetailAdmin() {
    const location = useLocation();
    if (location.state === undefined) {
        alert("Bạn chưa chọn nghệ sĩ")
        navigate("/admin/artist_list")
    }
    const [artist, setDataArtist] = useState(useLocation().state);
    const navigate = useNavigate();
    const { user, logout } = useAuth();



    const saveArtistData = async () => {
        if (artist.artist_name === undefined || artist.artist_name === "") {
            alert("Tên nghệ sĩ không được để trống")
            return;
        }
        if (artist.artist_logo === undefined || artist.artist_logo === "") {
            alert("Ảnh logo không được để trống")
            return;
        }
        if (artist.artist_avatar === undefined || artist.artist_avatar === "") {
            alert("Ảnh avatar không được để trống")
            return;
        }
        const token = 'Bearer ' + user.access_token;
        try {
            const getProfileRequest = await axios.post(BASE_URL + "/artist/update_artist",
                artist,
                {
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': token
                    }
                })
            if (getProfileRequest.data) {
                alert("Cập nhật thành công")
                navigate("/admin/artist_list")
            } else {
                alert("Cập nhật thất bại")
            }
        } catch (error) {
            if (error.response.status === 401) {	// Unauthorized
                logout((val) => { });
            } else {
                alert("Lỗi mạng")
            }
        }
    }

    const deleteArtistData = async () => {
        const token = 'Bearer ' + user.access_token;
        try {
            const getProfileRequest = await axios.delete(BASE_URL + "/artist/delete_artist?artist_code=" + artist.artist_code,
                {
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': token
                    }
                })
            if (getProfileRequest.data) {
                alert("Xoá thành công")
                navigate("/admin/artist_list")
            } else {
                alert("Xoá thất bại")
            }
        } catch (error) {
            if (error.response.status === 401) {	// Unauthorized
                logout((val) => { });
            } else {
                alert("Lỗi mạng")
            }
        }
    }

    return (
        <div>
            <div className='container margin' style={{ width: '80%' }}>
                <div className='row text-center' style={{ marginBottom: '32px', marginTop: '32px' }}>
                    <h3 style={{ color: 'var(--color-primary-light)' }}>Chỉnh sửa thông tin nghệ sĩ</h3>
                </div>

                <div className='row justify-content-center'>
                    <div className='row' style={{ marginBottom: '32px' }}>
                        <label><h5>Tên nghệ sĩ</h5>
                            <input
                                className="input-custom"
                                type="text"
                                name="artist_name"
                                placeholder={artist.artist_name}
                                value={artist.artist_name}
                                onChange={(e) => {
                                    setDataArtist({ ...artist, artist_name: e.target.value })
                                }}
                            />
                        </label>
                    </div>
                    <div className='row' style={{ marginBottom: '32px' }}>
                        <label>
                            <h5>Mã nghệ sĩ</h5>
                            <input
                                className="input-custom"
                                type="text"
                                name="artist_name"
                                placeholder={artist.artist_code}
                                value={artist.artist_code}
                                readOnly
                            />
                        </label>
                    </div>
                    <div className='row' style={{ marginBottom: '32px' }}>
                        <div className='col-sm-5 col-4'>
                            <label htmlFor='is_hot'>
                                <h5 style={{ marginRight: '24px' }}>Nghệ sĩ hot?</h5>
                            </label>
                        </div>
                        <div className='col-1'>
                            <input
                                style={{ width: '24px' }}
                                className="input-custom"
                                type="checkbox"
                                id='is_hot'
                                name="is_hot"
                                checked={artist.is_hot}
                                onChange={(e) => {
                                    setDataArtist({ ...artist, is_hot: e.target.checked })
                                }}
                            />
                        </div>

                    </div>
                    <div className='row' style={{ marginBottom: '32px' }}>
                        <label>
                            <h5>Mô tả về nghệ sĩ</h5>
                            <textarea
                                style={{ height: '30vh' }}
                                className="input-custom"
                                type="text"
                                name="artist_description"
                                value={artist.artist_description}
                                onChange={(e) => {
                                    setDataArtist({ ...artist, artist_description: e.target.value })
                                }}
                            />
                        </label>
                    </div>
                    <div className='row' style={{ marginBottom: '32px' }}>
                        <h5>Ảnh Logo</h5>
                        <img
                            src={artist.artist_logo}
                            alt={artist.artist_name}
                            style={{ width: '240px', height: '240px', objectFit: 'cover', borderRadius: '48px' }}
                        />
                        <label style={{ marginTop: 36, marginBottom: 36 }}>
                            <p>Chọn ảnh khác</p>
                            <input
                                type="text"
                                className="input-custom"
                                value={artist.artist_logo}
                                onChange={(e) => {
                                    setDataArtist({ ...artist, artist_logo: e.target.value })
                                }}
                            />
                        </label>
                    </div>
                    <div className='row' style={{ marginBottom: '32px' }}>
                        <h5>Ảnh Avatar</h5>
                        <img
                            src={artist.artist_avatar}
                            alt={artist.artist_name}
                            style={{ width: '240px', height: '240px', objectFit: 'cover', borderRadius: '48px' }}
                        />
                        <label style={{ marginTop: 36, marginBottom: 36 }}>
                            <p>Chọn ảnh khác</p>
                            <input
                                type="text"
                                className="input-custom"
                                value={artist.artist_avatar}
                                onChange={(e) => {
                                    setDataArtist({ ...artist, artist_avatar: e.target.value })
                                }}
                            />
                        </label>
                    </div>
                    <div className='row' style={{ marginBottom: '32px' }}>

                        <div className="col-sm-12 col-md-12 col-xl-6 col-lg-6">
                            <button 
                                style={{ width: 150 }}
                                type="button"
                                className="input-button"
                                onClick={saveArtistData}
                            >
                                Lưu chỉnh sửa
                            </button>
                        </div>
                        <div className="col-sm-12 col-md-12 col-xl-6 col-lg-6"
                            style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'row-reverse' }}>
                            <button
                                style={{ width: 150 }}
                                className="input-button-danger"
                                type="submit"
                                onClick={deleteArtistData}
                            >
                                Xoá nghệ sĩ
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

