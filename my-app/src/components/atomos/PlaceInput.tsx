import { Search2Icon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export const PlaceInput = () => {
    return (
    <>
    <Box width="222px" height="40px" color="orange"> 
    <InputGroup size='sm'>
    <Input placeholder='mysite' />
    <InputRightElement>
      <Search2Icon color='black' />
    </InputRightElement>
  </InputGroup>
  </Box></>
    );  
};