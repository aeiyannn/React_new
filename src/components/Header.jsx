import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './../Image/nature logo.png'

function Header() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand  href="#"><img src={Logo} style={{height:50+"px",width:50+"px"}}/>Natury</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
         <Nav.Link href="/" className='mx-5' style={{marginRight:"100"}}>Home</Nav.Link>
              <Nav.Link href="/about" className='mx-5'>About</Nav.Link>
              <Nav.Link href="/service" className='mx-5'>Contact</Nav.Link>
              <Nav.Link href="/gallery" className='mx-5'>Gallery</Nav.Link>
              <NavDropdown title="Service" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">our story</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Header