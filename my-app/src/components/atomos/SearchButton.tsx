import { AbsoluteCenter, Box, Button } from "@chakra-ui/react";

type Props = {
  active: boolean; // 押されたかどうか
  onClick: any;
};

export const SearchButton = ({ active, onClick }: Props) => {
  return (
    <>
      <Box position="relative" h="40px">
        <AbsoluteCenter>
          <Button
            height="40px"
            variant="outline"
            colorScheme={active ? "orange" : "gray"}
          >
            検索
          </Button>
        </AbsoluteCenter>
      </Box>
    </>
  );
};
