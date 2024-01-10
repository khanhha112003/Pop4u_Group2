import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { ReactComponent as LogoIcon } from '../Navbar/icons/logo.svg';
import { ReactComponent as AccountIcon } from '../Navbar/icons/icon_account.svg';
import { ReactComponent as SearchIcon } from '../Navbar/icons/icon_search.svg';
import {ReactComponent as NotiIcon} from './icons/icon_notification.svg'
function HeaderAdmin() {
  return (
    
    <Navbar expand="xxl" style={{backgroundColor: 'var(--bs-body-bg)', paddingTop: 0, paddingBottom: 0}}>
      <div className="container-fluid" style={{backgroundColor: 'var(--color-surface-container-highest-light)' }}>
      {/* <Container  className="bg-body-tertiary" > */}
        <Navbar.Brand className='d-flex w-50 me-5' href="/">
          <LogoIcon />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='w-100' id="navbarScroll">
          
          <Nav className='ms-auto w-100 justify-content-center'>
          <Form className="d-flex justify-content-center align-items-center">
            <div style={{ margin: '0px !important' }}> {/* Centered div */}
              <InputGroup>
                <Form.Control 
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  style={{ width: '300px', borderRadius: '20px 0 0 20px'  }} // Adjust border-radius as needed
                />
                <InputGroup.Text style={{ borderRadius: '0 20px 20px 0' }}>
                  {/* Adjust border-radius as needed */}
                  <SearchIcon />
                </InputGroup.Text>
              </InputGroup>
            </div>
          </Form>
          </Nav>

          <Nav className='ms-auto w-100 justify-content-end'>
          

          <div>
          <Button href='/admin' variant="outline-success">
              <NotiIcon />
            </Button>
            <Button href='/admin' variant="outline-success">
              <AccountIcon />
            </Button>
            
          </div>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
      </div>
    </Navbar>
  );
}

export default HeaderAdmin;