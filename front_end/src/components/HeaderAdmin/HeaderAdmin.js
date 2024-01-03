import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../Navbar/icons/logo.svg';
import { ReactComponent as AccountIcon } from '../Navbar/icons/icon_account.svg';
import { ReactComponent as SearchOrderIcon } from '../Navbar/icons/icon_order_search.svg';
import { ReactComponent as SearchIcon } from '../Navbar/icons/icon_search.svg';
function HeaderAdmin() {
  return (
    <Navbar expand="xxl" style={{backgroundColor: 'var(--bs-body-bg)', paddingTop: 0, paddingBottom: 0}}>
      <Container  className="bg-body-tertiary" >
        <Navbar.Brand className='d-flex w-50 me-auto' href="/">
          <LogoIcon />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='w-100' id="navbarScroll">
          
          <Nav className='ms-auto w-100 justify-content-end'>
          <Form className="d-flex justify-content-center align-items-center">
            <div style={{ margin: '0px !important' }}> {/* Centered div */}
              <InputGroup>
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  style={{ borderRadius: '20px 0 0 20px' }} // Adjust border-radius as needed
                />
                <InputGroup.Text style={{ borderRadius: '0 20px 20px 0' }}>
                  {/* Adjust border-radius as needed */}
                  <SearchIcon />
                </InputGroup.Text>
              </InputGroup>
            </div>
          </Form>

          <div>
            <Button href='/signin' variant="outline-success">
              <AccountIcon />
            </Button>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderAdmin;