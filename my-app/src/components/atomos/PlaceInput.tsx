import { Search2Icon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  value: string | undefined;
  setState: Dispatch<SetStateAction<string | undefined>>;
};

export const PlaceInput = ({ value, setState }: Props) => {
  return (
    <>
      <Box width="222px" height="40px" color="orange">
        <InputGroup size="sm">
          <Input
            placeholder="mysite"
            value={value}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <InputRightElement>
            <Search2Icon color="black" />
          </InputRightElement>
        </InputGroup>
      </Box>
    </>
  );
};
