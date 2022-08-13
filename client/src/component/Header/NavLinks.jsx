import { Box, Stack } from "@chakra-ui/react";
import NavItem from "./NavItem";

const NavLinks = ({ isOpen }) => {
  return (
    <Box 
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack 
        spacing={8}
        align="center"
        justify={["center", "space-around", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavItem 
          content="About Us"
          path="/about"
        />
        <NavItem 
          content="Rate My Resume"
          path="/rate"
        />
      </Stack>
    </Box>
  );
}

export default NavLinks;
