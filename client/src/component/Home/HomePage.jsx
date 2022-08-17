import { Flex, Stack, Image, Heading, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import analysis from "../../img/analysis.svg";

const HomePage = () => {
    return (
        <Flex
            as="main"
            flexDir="column"
            align="center"
            justify="space-around"
            gap="3rem"
            p="2rem"
            color="white"
            flex="1"
        >
            <Stack>
                <Flex align="center" justify="space-between">
                    <Heading             
                        bgColor="#ff8177"
                        bgImage="linear-gradient(to top, #ff0844 0%, #ffb199 100%)"
                        bgSize="100%"
                        css={{
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                        fontSize={["1rem", "2rem", "2.5rem", "3rem"]}
                    >
                        Resume Parser
                    </Heading>
                    <Button colorScheme="purple">
                        <Link to="/rate">
                            Get Started
                        </Link>
                    </Button>
                </Flex>
                <Text    
                    fontSize={["1rem", "1.5rem", "1.5rem", "1.5rem"]}
                    fontWeight={700}
                    color={"#fff"}
                >
                    Utilizing natural language processing to make your
                    job searching easier.
                </Text>
            </Stack>
            <Image
                src={analysis} 
                alt={"woman looking at an analysis"}
            />
        </Flex>
    );
}

export default HomePage;
