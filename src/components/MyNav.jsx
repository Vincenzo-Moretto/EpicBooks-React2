import { Nav, Navbar } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar bg="dark" variant="dark" className="ps-5">
      <Nav className="me-auto">
        <Nav.Link href="#">HOME</Nav.Link>
        <Nav.Link href="#">ABOUT</Nav.Link>
        <Nav.Link href="#">BROWSE</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MyNav;
