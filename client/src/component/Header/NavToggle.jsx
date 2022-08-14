import React from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const NavToggle = ({ toggle, isOpen }) => {
  return (
    <Box 
      display = {{base: "block", md: "none"}}
      onClick={toggle}
    >
      {isOpen ? 
        <CloseIcon boxSize={["1.5rem", "1.5rem", "2rem", "2.5rem"]} /> : 
        <HamburgerIcon boxSize={["1.5rem", "1.5rem", "2rem", "2.5rem"]} />}
    </Box> 
  );
}

export default NavToggle;
