import { Flex } from '@chakra-ui/react';

const NavContainer = ({ children }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            gap="1rem"
            maxWidth="1024px"
            flex="1"
            m={2}
            p={4}
            color="white"
        >
            {children}
        </Flex>
    );
}

export default NavContainer;
