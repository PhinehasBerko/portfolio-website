import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants/index";
import { menu, close, logo_2 } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-4/5 flex items-center justify-between mt-5 fixed z-20 bg-transparent rounded-full  outline-1 outline-slate-50 outline-dashed `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-2 xs:mx-auto ">
        {/* Logo */}
        <Link
          to={"/"}
          className="flex gap-2 items-center"
          onClick={() => {
            setActive(""); // track where we are currently on the page
            window.scrollTo(0, 0); // scroll to the top of the page
          }}
        >
          <img src={logo_2} alt="logo" className="w-10 h-10 rounded-full" />
          <p className="font-bold flex text-[12px] sm:text-[18px]">
            Phinehas &nbsp; <span>| Software Dev</span>
            {/* PhinyDev✨ */}
          </p>
        </Link>
      </div>
      {/* Navigations */}
      <ul className="sm:flex flex-row hidden items-center gap-5">
        {navLinks.map((link) => (
          <li
            key={link?.id}
            className={`${
              active === link?.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer `}
            onClick={() => setActive(link?.title)}
          >
            <a href={`#${link?.id}`}>{link?.title}</a>
          </li>
        ))}
      </ul>
      {/* Menu / Hamburger Menu */}
      <div className="sm:hidden flex px-6">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] cursor-pointer"
          alt="Hamburger Menu"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-4 black-gradient absolute top-20 rounded-xl right-0 mx-4 my-2 min-w-[120px] z-10 `}
        >
          <ul className="text-center">
            {navLinks.map((link) => (
              <li
                key={link?.id}
                className={`${
                  active === link?.title ? "text-white" : "text-secondary"
                } cursor-pointer  font-medium text-[16px]`}
                onClick={() => setActive(link?.title)}
              >
                <a href={`#${link?.id}`}>{link?.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
