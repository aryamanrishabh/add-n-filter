import { Container, Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Add-n-Filter</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;
