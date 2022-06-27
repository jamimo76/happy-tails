import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <Navbar light color sticky="top" expand="md">
      <NavbarBrand href="/">
        <h1 text align="center">
          Happy Tails Trails
        </h1>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
