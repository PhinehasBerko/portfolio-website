import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {NavBarList.map((item) => (
        <Link
          to={item.route}
          key={item?.id}
          className="relative p-2 hidden sm:px-3 md:inline-block font-medium items-center text-center overflow-hidden group hover:text-green-300"
        >
          {item?.name}
          <span className="absolute bg-green-300 bottom-0 left-0 h-[1.5px] w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
