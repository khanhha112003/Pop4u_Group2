import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import InputGroup from 'react-bootstrap/InputGroup';
import { ReactComponent as LogoIcon } from './icons/logo.svg';
import { ReactComponent as CartIcon } from './icons/icon_cart.svg';
import { ReactComponent as AccountIcon } from './icons/icon_account.svg';
// import { ReactComponent as SearchIcon } from './icons/icon_search.svg';
import { ReactComponent as LoginIcon } from './icons/icon_login.svg';
import './style.css'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function CustomNavbar() {
	const { user } = useAuth();
	const navigate = useNavigate();
	return (
		<Navbar expand="xl" style={{ paddingTop: 10, paddingBottom: 10 }}>
			<Container className="bg-body-tertiary" >
				<Navbar.Brand className='d-flex w-50 me-auto' href="/">
					<LogoIcon />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse className='w-100' id="navbarScroll">
					<Nav className="w-100 justify-content-center" activeKey="/home">
						<NavDropdown className="label-m" title="Sản phẩm" id="navbarScrollingDropdown">
							<NavDropdown.Item href="/product_list">
								Tất cả
							</NavDropdown.Item>
							<NavDropdown.Item href="/product_list/album">
								Album
							</NavDropdown.Item>
							<NavDropdown.Item href="/product_list/lightstick">
								Lightstick
							</NavDropdown.Item>
							<NavDropdown.Item href="/product_list/merch">
								Merch
							</NavDropdown.Item>
							<NavDropdown.Item href="/product_list/vinyl">
								Vinyl
							</NavDropdown.Item>
							<NavDropdown.Item href="/product_list/photobook">
								Photobook
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link className="label-m" href="/artists">Nghệ sĩ</Nav.Link>
						<Nav.Link className="label-m" href="/about">Về chúng tôi</Nav.Link>
						<Nav.Link className="label-m" href="/blog">Blog</Nav.Link>
					</Nav>
					<Nav className='ms-auto w-100 justify-content-end'>
						{/* <Form className="d-flex justify-content-center align-items-center">
							<div style={{ margin: '0px !important' }}> 
								<InputGroup style={{width: 150}}>
									<Form.Control
										placeholder="Search"
										aria-label="Search"
										aria-describedby="basic-addon2"
										style={{ borderRadius: '20px 0 0 20px' }} 
									/>
									<InputGroup.Text style={{ borderRadius: '0 20px 20px 0' }}>
										<SearchIcon />
									</InputGroup.Text>
								</InputGroup>
							</div>
						</Form> */}

						{
							(user !== null) ? (
								<div className="ml-lg-4">
									<Button onClick={() => navigate("/user/cart")} variant="outline-success">
										<CartIcon />
									</Button>
									<Button  onClick={() => navigate("/user/user_profile")} variant="outline-success">
										<AccountIcon />
									</Button>
								</div>
							) : (
								<div className="ml-lg-4">
									<Button href='/account/signin' variant="outline-success">
										<LoginIcon />
									</Button>
								</div>
							)

						}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CustomNavbar;