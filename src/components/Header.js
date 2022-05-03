import { Navbar, NavbarBrand } from "reactstrap";
import HaroldParker from "../app/assets/img/haroldparker.jpg";

const Header = () => {
  return (
    <Navbar light color="success" sticky="top" expand="md">
      <NavbarBrand>
        <img src={HaroldParker} alt="Harold Parker" size="auto" />
        <h1>Happy Tail Trails</h1>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
