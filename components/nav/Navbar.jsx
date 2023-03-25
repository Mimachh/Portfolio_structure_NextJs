import React, { useState } from "react";
import NavItem from "./NavItem";
import Breadcrumb from "./Breadcrumb";
import EnNav from "../../pages/locales/en/navbar.json";
import FrNav from "../../pages/locales/fr/navbar.json";
import { useRouter } from 'next/router'

const Navbar = (props) => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const locale = props.lng;
  const router = useRouter();
  const pathname = router.pathname;
  var accueil ="";
  var projets ="";
  var retours ="";
  const MENU_LIST = [
    { text: locale === 'fr' ? accueil = FrNav.Accueil : accueil = EnNav.Accueil, href: "/" },
    { text: locale === 'fr' ? projets = FrNav.Projets : projets = EnNav.Projets, href: "/projets" },
    { text: locale === 'fr' ? retours = FrNav.Retours : retours = EnNav.Retours, href: "/about" },
    { text: "Contact", href: "/contact" },
  ];
  var request = "";
  var link = "";
  switch (pathname) {
    case '/':
      request = "";
      link = ""
      break;
    case '/projets':
      request =  locale === 'fr' ? projets = FrNav.Projets + "/" : projets = EnNav.Projets + "/"; 
      link = "/projets";
      break;
    default:
      console.log("navbar default ?");
  }

  return (
    <header>
      <nav className={`nav`} style={{color : 'white'}}>
        <Breadcrumb request={"/" + request} href={link}/>
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