import { HStack } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonIconList } from "../../Data/DataURLList";
import { TransportationButton } from "../atomos/TranspotationButton";

export const TransportationButtonList = () => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (label: string) => {
    setSelectedButton(label);
    console.log(`Clicked: ${label}`);
  };

  return (
    <HStack spacing="15px">
      {ButtonIconList.map((button, index) => (
        <TransportationButton
          key={index}
          transportation={index}
          active={button.label === selectedButton}
          onClick={() => handleButtonClick(button.label)}
        />
      ))}
    </HStack>
  );
};
