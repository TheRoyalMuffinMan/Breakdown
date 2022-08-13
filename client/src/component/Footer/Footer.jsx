import { 
    Flex,
    Heading,
    Text
} from '@chakra-ui/react';
import FooterLinks from './FooterLinks';
import { darkerGrey } from '../../globals/themes';

const Footer = () => {
    return (
        <Flex 
            minWidth='max-content'
            flexDirection='column'
            justifyContent='space-evenly'
            alignItems='center'
            gap="0.3rem"
            top="100vh"
            position="sticky"
            p='4'
            bg={darkerGrey}
            color="white"
        >
        <Heading fontSize={[16, 16, 16, 20]} fontWeight={400}>Breakdown</Heading>
        <Text fontSize={[10, 12, 14, 14]}>Copyright © 2022 - TheRoyalMuffinMan</Text>
        <FooterLinks />
        </Flex>
    )
}

export default Footer;
