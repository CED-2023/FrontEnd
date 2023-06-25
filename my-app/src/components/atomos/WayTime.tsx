import { Box, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";

export const WayTime = () => {
  return (
    <>
      <Box width="222px" height="40px" color="orange">
        <InputGroup size="sm">
          <Input placeholder="60" color="black" />
          <InputRightAddon children="min" color="black" />
        </InputGroup>
      </Box>
    </>
  );
};
