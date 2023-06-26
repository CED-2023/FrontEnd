import { HStack } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonIconList } from "../../Data/DataURLList";
import { TransportationButton } from "../atomos/TranspotationButton";

type Props = {
  onLabelChange: any;
};

export const TransportationButtonList = ({ onLabelChange }: Props) => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (label: string) => {
    setSelectedButton(label);
    console.log(`Clicked: ${label}`);
    onLabelChange(label); // 親コンポーネントにlabelの値を渡す
  };

  return (
    <HStack spacing="38px">
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
