import Container from "../components/Container";

import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Container className="shadow-md z-50">
      {/* Logo */}
      <Link to={"/"} className="font-bold text-3xl text-white cursor-pointer">
        Phiny✨
      </Link>

      {/* NavList */}
      <NavBar />
    </Container>
  );
};
export default Header;
