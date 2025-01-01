import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""} ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="navbar-header">
        <h2>Otabek</h2>
      </div>
      <button
  className={`nav__hamburger ${navActive ? "active" : ""}`}
  onClick={toggleNav}
  aria-label="Toggle navigation menu"
>
  <span className="nav__hamburger__line"></span>
  <span className="nav__hamburger__line"></span>
  <span className="nav__hamburger__line"></span>
</button>


      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              My Work
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="skill"
              className="navbar--content"
            >
              Skills
            </Link>
          </li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? <FaSun size={20} color="orange" /> : <FaMoon size={20} color="blue" />}
        </button>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
