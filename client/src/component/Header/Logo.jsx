import { 
    Flex,
    Heading
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faHammer} style={{
                color: "#4837ff"
            }}/>
            <Heading size={['md', 'md', 'md', 'lg']} fontWeight={400}>
                Breakdown
            </Heading>
        </Flex>
    );
}

export default Logo;