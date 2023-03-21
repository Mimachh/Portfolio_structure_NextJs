import React, { useState } from "react";
import NavItem from "./NavItem";
import Breadcrumb from "./Breadcrumb";

const MENU_LIST = [
  { text: "Accueil", href: "/" },
  { text: "Projets", href: "/projets" },
  { text: "Retours", href: "/about" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <header>
      <nav className={`nav`} style={{color : 'white'}}>
        <Breadcrumb request="projets" href="ok"/>

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div>ici</div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
              
        </div>
      </nav>
    </header>
  );
};

export default Navbar;