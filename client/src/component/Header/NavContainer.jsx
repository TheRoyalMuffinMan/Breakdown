import { Flex } from '@chakra-ui/react';
import { darkerGrey } from '../../globals/themes';

const NavContainer = ({ children }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-around"
            wrap="wrap"
            gap="1rem"
            w="100%"
            top={0}
            mb={4}
            pt={4}
            pb={4}
            bg={darkerGrey}
            color="white"
        >
            {children}
        </Flex>
    );
}

export default NavContainer;
