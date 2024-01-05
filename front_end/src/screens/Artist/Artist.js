import React, { useState, useEffect } from 'react';
import { basicGetRequets } from '../../app_logic/APIHandler';
import NotFoundPage from '../Error/NotFoundError';
import LoadingPage from '../Loading/LoadingPage';
import './Artist.css';
import "react-bootstrap";
import 'animate.css/animate.min.css';

function ArtistList() {
	const [filterName, setFilterName] = useState('');
	const [searchTimeout, setSearchTimeout] = useState(null);
	const [totalArtists, setTotalArtists] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const newProductRequest = basicGetRequets("/artist/artist_list", { type_filter: "all", limit: 1000 });
		const result = newProductRequest
			.then((responses) => {
				let data = responses.data.list_artist
				setTotalArtists(data)
				setFilteredData(data)
			}).catch(error => {
				setError(error);
			}).finally(() => {
				setLoading(false);
			});
	}, []);

	const handleFilterChange = event => {
		const inputValue = event.target.value;
		setFilterName(inputValue);

		if (searchTimeout) {
			clearTimeout(searchTimeout);
		}

		const newTimeout = setTimeout(() => {
			const newFilteredData = totalArtists.filter(artist =>
				artist.artist_name.toLowerCase().includes(inputValue.toLowerCase())
			);
			setFilteredData(newFilteredData);
		}, 150);

		setSearchTimeout(newTimeout);
	};

	if (loading) {
		return <LoadingPage />;
	}

	if (error) {
		return <NotFoundPage />
	}

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<div className='banner-artist'>
							<h3 className='head3'>Nghệ Sĩ</h3>
						</div>
					</div>
				</div>
				<div className="row">
					<div className='search-artist'>
						<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-center">
							<label htmlFor="filterInputArtist" className='label-xxxl search-label'>Bạn Muốn Lắng Nghe Âm Nhạc Từ Ai?</label>
						</div>
						<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-right justify-content-md-center">
							<input
								className='label-m filter-input'
								type="text"
								id="filterInputArtist"
								value={filterName}
								onChange={handleFilterChange}
								placeholder="Tên nghệ sĩ..."
							/>
						</div>
					</div>
				</div>
				<div className="row">
					{filteredData.map(artist => (
						<div key={artist._id} className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
							<div className="artist-card animate__animated animate__slideInRight">
								<div className="artist-pic">
									<img src={artist.artist_logo} alt={artist.artist_name} />
								</div>
								<div className="artist-name">
									<a href=''><span className="label-xxl">{artist.artist_name}</span></a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export { ArtistList };
