import { Box, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  value: string | undefined;
  setState: Dispatch<SetStateAction<string | undefined>>;
};

export const WayTime = ({ value, setState }: Props) => {
  return (
    <>
      <Box width="222px" height="40px" color="orange">
        <InputGroup size="sm">
          <Input
            placeholder="60"
            color="black"
            value={value}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <InputRightAddon children="min" color="black" />
        </InputGroup>
      </Box>
    </>
  );
};
