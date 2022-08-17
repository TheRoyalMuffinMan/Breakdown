import { useState } from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import NavContainer from "./NavContainer";
import Logo from "./Logo";
import NavToggle from "./NavToggle";
import NavLinks from "./NavLinks";
import { darkerGrey } from '../../globals/themes';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((lastOpen) => !lastOpen);

  return (
    <Flex
      justify="center" 
      w="100%"
      bg={darkerGrey}
    >
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
    </Flex>
  );
}

export default Nav;
