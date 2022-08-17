import { 
    Flex, 
    Stack, 
    Box, 
    List, 
    ListItem, 
    ListIcon, 
    Heading, 
    Text 
} from '@chakra-ui/react';
import { MdCheck } from "react-icons/md";

const AboutPage = () => {
    return (
        <Flex 
            as="main"
            justify="center"
            w="100%"
            mt="2rem"
            mb="2rem"
        >   
            <Stack gap="1rem" maxW="1024px" pl={4} pr={4}>
                <Stack gap="0.2rem">
                    <Heading             
                        bgColor="#ff8177"
                        bgImage="linear-gradient(to top, #ff0844 0%, #ffb199 100%)"
                        bgSize="100%"
                        css={{
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                        fontSize={["1rem", "1.5rem", "1.5rem", "1.5rem"]}
                    >
                        What is this?
                    </Heading>
                    <Text color="white">
                        Welcome to BreakDown! This is a simple resume parser 
                        that parses the key sections on your resume. It will 
                        then display those sections so you can see if the parser
                        is correctly extracting. These key sections can include:
                    </Text>
                    <Box>
                        <List spacing={2} color="white">
                            <ListItem>
                                <ListIcon as={MdCheck} color="#805AD5" />
                                Personal Information
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheck} color="#805AD5" />
                                Objective
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheck} color="#805AD5" />
                                Education
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheck} color="#805AD5"/>
                                Work and Related Experience
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheck} color="#805AD5"/>
                                Skills
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdCheck} color="#805AD5"/>
                                Activities/Hobbies
                            </ListItem>
                        </List>
                    </Box>
                </Stack>
                <Stack gap="0.2rem">
                    <Heading             
                        bgColor="#ff8177"
                        bgImage="linear-gradient(to top, #ff0844 0%, #ffb199 100%)"
                        bgSize="100%"
                        css={{
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                        fontSize={["1rem", "1.35rem", "1.35rem", "1.35rem"]}
                    >
                        How does it work?
                    </Heading>
                    <Text color="white">
                        You submit your resume on the rate my resume page and 
                        from there python parses your information. You are then sent 
                        to a page with your sections parsed into different categories
                        This is currently being made and improved on with a natural 
                        language processing library known as spaCy using a prebuilt model.
                    </Text>
                </Stack>
                <Stack gap="0.2rem">
                    <Heading             
                        bgColor="#ff8177"
                        bgImage="linear-gradient(to top, #ff0844 0%, #ffb199 100%)"
                        bgSize="100%"
                        css={{
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                        fontSize={["1rem", "1.35rem", "1.35rem", "1.35rem"]}
                    >
                        What is the point of this?
                    </Heading>
                    <Text color="white">
                        The point is to verify that your resume can be parsed correctly
                        and the information displayed is what you would hope a 
                        recuriter/company would want to see. Original goals was to
                        use the API provided by Lever to perform industry quality resume 
                        parsing, but unforunately the API was discontinued. So in order to 
                        replicate it, an in house solution is being built and tweaked.
                    </Text>
                </Stack>
                <Stack gap="0.2rem">
                    <Heading             
                        bgColor="#ff8177"
                        bgImage="linear-gradient(to top, #ff0844 0%, #ffb199 100%)"
                        bgSize="100%"
                        css={{
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                        fontSize={["1rem", "1.35rem", "1.35rem", "1.35rem"]}
                    >
                        Do you keep or store my personal information?
                    </Heading>
                    <Text color="white">
                        No, not at all. Your resume is immediately discarded
                        as soon as that parsed section page loads.
                    </Text>
                </Stack>
            </Stack>
        </Flex>
    );
}

export default AboutPage;