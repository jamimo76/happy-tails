import { Navbar, NavbarBrand } from "reactstrap";
import HaroldParker from "../app/assets/img/haroldparker.jpg";

const Header = () => {
  return (
    <Navbar light color="success" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img src={HaroldParker} alt="Harold Parker" size="auto"/>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
