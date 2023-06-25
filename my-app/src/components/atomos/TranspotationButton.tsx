import { Button, Image } from "@chakra-ui/react";
import { ButtonIconList } from "../../Data/DataURLList";
import { useState } from "react";

type Props = {
  transportation: number;
  active: boolean;
  onClick: () => void;
};

export const TransportationButton = ({ transportation, active }: Props) => {
  const [buttonActive, setButtonActive] = useState(false);

  const handleButtonClick = () => {
    setButtonActive(!buttonActive);
  };

  return (
    <>
      <Button
        colorScheme="orange"
        variant="outline"
        height="83px"
        width="101"
        boxShadow={active ? "md" : "inner"}
        onClick={handleButtonClick}
      >
        <Image
          boxSize="71px"
          objectFit="cover"
          src={
            active
              ? `${ButtonIconList}.${transportation}.0`
              : `${ButtonIconList}.${transportation}.1`
          }
        />
      </Button>
      <Image boxSize="100px" objectFit="cover" src={`${ButtonIconList}.2.0`} />
      <Image
        boxSize="100px"
        objectFit="cover"
        src={`${ButtonIconList}.${transportation}.1`}
      />
    </>
  );
};
