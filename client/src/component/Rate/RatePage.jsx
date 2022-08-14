import { useState } from "react";
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import { FileUploader } from "react-drag-drop-files";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import "./../../style/css/upload.css"

const fileTypes = ["PDF"];

const RatePage = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        let fd = new FormData();
        fd.append('file', file);
        setFile(file);
    }
    
    const upload = () => {

    }

    return (
        <Flex 
            flexDir="column" 
            align="center" 
            justify="center"
            flex="1"
            gap="2rem"
            p="2rem"
        >
            <Heading    
                fontSize={["1rem", "1.5rem", "1.5rem", "1.5rem"]}
                fontWeight={700}
                color="#fff"
            >
                Drag or Select Your Resume Down Below
            </Heading>
            <FileUploader
                handleChange={handleChange}
                types={fileTypes}
            >
                <Flex 
                    className="upload-dd"
                    flexDir="column" 
                    align="center"
                    justify="center"
                    p="2rem"
                    gap="1rem"
                    fontSize={["4rem","5rem","6rem","6.5rem"]}
                    width={[200, 300, 400, 500, 500]}
                >
                    <FontAwesomeIcon icon={faFileArrowUp} color="#805AD5"/>
                    <Text color="#fff" fontSize={["1rem", "1.5rem", "1.5rem", "1.5rem"]}>
                        <u>Upload</u> or drop your resume right here
                    </Text>
                </Flex>
            </FileUploader>
            <Flex align="center"gap="0.5rem">
                <Button onClick={upload} colorScheme="purple">Submit</Button>
                <Text color="#fff">
                    {file ? 
                    `File Selected: ${file.name}` :
                    "No File Selected"}
                </Text>
            </Flex>
      </Flex>
    );
}

export default RatePage;
