import { useState } from "react";
import { Link } from "react-router-dom";
import NavContainer from "./NavContainer";
import Logo from "./Logo";
import NavToggle from "./NavToggle";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((lastOpen) => !lastOpen);

  return (
    <NavContainer>
      <Link to="/">
        <Logo />
      </Link>
      <NavToggle 
        toggle={toggle} 
        isOpen={isOpen} 
      />
      <NavLinks isOpen={isOpen} />
    </NavContainer>
  );
}

export default Nav;
