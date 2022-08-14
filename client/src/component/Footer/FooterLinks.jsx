import { 
    Flex, 
    Divider
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <Flex flexDir="row" align="center" fontSize={[12, 12, 14, 14]} gap={3} h={5} mt={1} >
      <Link to="/">Home</Link>
      <Divider orientation="vertical" borderColor="#000000"/>
      <Link to="/about">About</Link>
      <Divider orientation="vertical" borderColor="#000000"/>
      <Link to="/rate">Rate My Resume</Link>
    </Flex>
  );
};

export default FooterLinks;
