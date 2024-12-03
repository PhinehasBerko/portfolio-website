import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const NavBarList = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "About Me",
    route: "/about-me",
  },
  {
    id: 3,
    name: "Project",
    route: "/projects",
  },
  {
    id: 4,
    name: "Testimonials",
    route: "/testimonials",
  },
  {
    id: 5,
    name: "Contact",
    route: "/contact",
  },
];

const Header = () => {
  return (
    <Container className="flex items-center justify-between ">
      {/* Logo */}
      <h1 className="font-bold text-3xl text-white ">Phiny✨</h1>
      {/* NavList */}
      <div className="">
        {NavBarList.map((item) => (
          <Link
            to={item.route}
            key={item?.id}
            className="px-1 hidden md:inline-block items-center text-center "
          >
            {item?.name}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Header;
