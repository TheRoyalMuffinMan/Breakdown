
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import styled from '@emotion/styled';


const StyledLink = styled(Text)`
    &:hover {
        color: #4837ff;
        transition: all 0.3s ease;
    }
`;

const NavItem = ({ content, path }) => {
  return (
    <Link to={path}>
      <StyledLink 
        display="inline-block" 
        fontSize={['sm', 'md', 'lg', 'xl']}
        position="relative"
        color="#fff"
        textDecoration="none"
      >
        {content}
      </StyledLink>
    </Link>
  );
}

export default NavItem;
