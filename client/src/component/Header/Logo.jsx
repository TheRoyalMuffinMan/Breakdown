import { 
    Flex,
    Heading
} from '@chakra-ui/react';

const Logo = () => {
    return (
        <Flex
            alignItems="center"
            gap="0.5rem"
            bgColor="#ff8177"
            bgImage="linear-gradient(to top, #ff0844 0%, #ffb199 100%)"
            bgSize="100%"
            css={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}
            fontSize={["1rem", "1rem", "1rem", "1.5rem"]}
        >
            <i class="fa-solid fa-hammer"></i>
            <Heading size={['md', 'md', 'md', 'lg']} fontWeight={400}>
                Breakdown
            </Heading>
        </Flex>
    );
}

export default Logo;