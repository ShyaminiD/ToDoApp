import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function NavigationBar() {
  return (
    <>
      <Navbar  collapseOnSelect expand="lg" bg="dark" className="text-light">
        <Container>
          <Navbar.Brand href="#" className="text-light">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            To Do App
          </Navbar.Brand>
          {/* <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse> */}
         
          <NavDropdown title="Drop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
        
      </Navbar>
    </>
  );
}

export default NavigationBar;
