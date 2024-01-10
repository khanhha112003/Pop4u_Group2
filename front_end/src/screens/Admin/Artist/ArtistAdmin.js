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
        {"_id":"22","artist_name":"JISOO","artist_code":"JS01","is_hot":true,"artist_logo":"https://i.pinimg.com/originals/ee/26/8b/ee268b4f1338f69a55fec1d87203a14f.jpg","artist_avatar":"https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/29/1099051/209419948_8601681615.jpg","artist_description":"\nJisoo, tên đầy đủ là Kim Jisoo, là một ca sĩ, vũ công và diễn viên người Hàn Quốc. Cô là thành viên của nhóm nhạc nữ Blackpink do YG Entertainment thành lập và quản lý. Jisoo sinh ngày 3 tháng 1 năm 1995 tại Seoul, Hàn Quốc. Cô có một anh trai. Jisoo bắt đầu học múa từ khi còn nhỏ và tham gia nhiều cuộc thi múa. Năm 2011, cô tham gia chương trình thực tế sống còn \"YG Entertainment's K-pop Star Season 1\" của YG Entertainment và giành vị trí thứ 2. Jisoo ra mắt với tư cách là thành viên của Blackpink vào ngày 8 tháng 8 năm 2016. Ngoài hoạt động với Blackpink, Jisoo cũng đã tham gia một số bộ phim truyền hình và phim điện ảnh, bao gồm \"The Producers\" (2015), \"Arthdal Chronicles\" (2019) và \"Snowdrop\" (2021). Jisoo phát hành album solo đầu tay của mình, \"ME\", vào ngày 2 tháng 3 năm 2023. Album bao gồm hai bài hát, \"Flower\" và \"All Eyes On Me\"."},
        {"_id":"1","artist_name":"BTS","artist_code":"BT01","is_hot":true,"artist_logo":"https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512","artist_avatar":"https://media-cdn-v2.laodong.vn/storage/newsportal/2022/11/24/1120309/Bts.jpg","artist_description":"BTS, còn được gọi là Bangtan Boys, là một nhóm nhạc nam Hàn Quốc được thành lập bởi Big Hit Music vào năm 2010 và ra mắt vào năm 2013. Nhóm bao gồm bảy thành viên: RM, Jin, Suga, J-Hope, Jimin, V và Jungkook. BTS được biết đến với âm nhạc của họ, bao gồm nhạc pop, hip hop, R&B và EDM. Họ cũng được biết đến với vũ đạo của họ, lời bài hát của họ và sự tham gia của họ vào các vấn đề xã hội. BTS đã trở thành một trong những nhóm nhạc thành công nhất thế giới. Họ đã bán được hơn 320 triệu album trên toàn thế giới và đã giành được nhiều giải thưởng, bao gồm một giải Grammy và hai giải American Music Awards."},
        {"_id":"2","artist_name":"BLACKPINK","artist_code":"BP01","is_hot":true,"artist_logo":"https://cdn-contents.weverseshop.io/public/shop/b5d47b7be6a10edef21b0c0fd540070a.png?q=95&w=512","artist_avatar":"https://www.mix1.de/news/images/94967.jpg","artist_description":"Blackpink là một nhóm nhạc nữ Hàn Quốc được thành lập bởi YG Entertainment vào năm 2016. Nhóm bao gồm bốn thành viên: Jisoo, Jennie, Rosé và Lisa. Blackpink được biết đến với âm nhạc của họ, bao gồm nhạc pop, hip hop, R&B và EDM. Họ cũng được biết đến với vũ đạo của họ, hình ảnh của họ và sự hiện diện trên mạng xã hội của họ. Blackpink đã trở thành một trong những nhóm nhạc thành công nhất thế giới. Họ đã bán được hơn 100 triệu album trên toàn thế giới và đã giành được nhiều giải thưởng, bao gồm hai giải American Music Awards."},
        {"_id":"21","artist_name":"LISA","artist_code":"LS01","is_hot":true,"artist_logo":"https://i.pinimg.com/736x/d8/f1/d7/d8f1d7387989c86cf9ddc288f11a7bd0.jpg","artist_avatar":"https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512","artist_description":"Lalisa Manobal, được biết đến với nghệ danh Lisa, là một ca sĩ, vũ công và người mẫu người Thái Lan, hiện đang hoạt động với tư cách là thành viên của nhóm nhạc nữ Blackpink do YG Entertainment thành lập và quản lý. Lisa sinh ngày 27 tháng 3 năm 1997 tại Buriram, Thái Lan. Cô có một anh trai. Lisa bắt đầu học nhảy từ năm 7 tuổi và tham gia nhiều cuộc thi nhảy. Năm 2010, cô tham gia chương trình thực tế sống còn \"YG Entertainment's WIN: Who Is Next\" của YG Entertainment và giành chiến thắng. Lisa ra mắt với tư cách là thành viên của Blackpink vào ngày 8 tháng 8 năm 2016. Lisa được biết đến với khả năng nhảy điêu luyện và phong cách biểu diễn sôi động. Cô cũng là một rapper tài năng và có khả năng sáng tác nhạc. Cô là một trong những thành viên nổi tiếng nhất của Blackpink và có lượng người hâm mộ đông đảo trên toàn thế giới. Ngoài hoạt động với Blackpink, Lisa cũng đã phát hành đĩa đơn solo đầu tiên của mình, \"Lalisa\" vào ngày 10 tháng 9 năm 2021. Đĩa đơn đã đạt được thành công thương mại, bán được hơn 700.000 bản trên toàn thế giới."},
        {"_id":"8","artist_name":"LE SSERAFIM","artist_code":"LE01","is_hot":false,"artist_logo":"https://cdn-contents.weverseshop.io/public/shop/ab48196091bf17320c8bff2218584387.png?q=95&w=512","artist_avatar":"https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/11/5/1113262/LE-SSERAFIM-A1.jpeg","artist_description":"LE SSERAFIM là một nhóm nhạc nữ Hàn Quốc được thành lập bởi Source Music và HYBE. Nhóm bao gồm năm thành viên: Kim Chaewon, Sakura, Huh Yunjin, Kazuha và Hong Eunchae. Nhóm được thành lập thông qua chương trình thực tế sống còn \"Le Sserafim\" và ra mắt vào ngày 2 tháng 5 năm 2022 với mini-album \"FEARLESS\". Nhóm đã giành được một số giải thưởng, bao gồm giải Nghệ sĩ mới xuất sắc nhất tại Lễ trao giải Âm nhạc Seoul năm 2022 và giải Nghệ sĩ mới xuất sắc nhất tại Lễ trao giải Mnet Asian Music Awards năm 2022"}
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
        <div style={{ marginTop: '32px', marginBottom: '16px' }}>
            <button onClick={() => navigate("/admin/artist_add")} type="button" class="btn btn-primary btn-sm">Thêm nghệ sĩ mới</button>
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
                        src={artist.artist_avatar}
                        style={{ width: '72px', height: '72px', objectFit: 'cover', borderRadius: '12px' }}
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