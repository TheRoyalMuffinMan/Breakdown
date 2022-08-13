import { Flex, Stack, Image, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import styled from '@emotion/styled';
import analysis from "../../img/analysis.svg";
import { normalGrey } from "../../globals/themes";

const StyledButton = styled.button`
    & {
        background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
        font: inherit;
        line-height: 1;
        margin: 0.5em;
        padding: 1rem;
        outline: none;
        border: none;
        border-radius: 10px;
        transition: 0.3s;
    }

    &:hover,
    &:focus {
        box-shadow: inset 8em 0 0 0 #4837ff;;
    }

    @media (max-width: 600px) {
        & {
            font-size: 0.7rem;
            width: 7rem;
            height: 2.5rem;
        }

    }
`

const HomePage = () => {
    return (
        <Flex
            flexDir="column"
            as="main"
            align="center"
            justify="space-around"
            gap="3rem"
            p={8}
            pt={16}
            pb={16}
            bg={normalGrey}
            color="white"
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
                    <StyledButton>
                        <Link to="/rate">
                            Get Started
                        </Link>
                    </StyledButton>
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
