import { Box } from "@chakra-ui/react";
import { PlaceInput } from "../atomos/PlaceInput";
import { TransportationButtonList } from "../molecules/TranspotationButtonList";
import { RoundOrOneWayButtonList } from "../molecules/RoundOrOneWayButtonList";
import { WayTime } from "../atomos/WayTime";
import { useEffect, useState } from "react";

type Input = {
  place: string | undefined;
  transportation: string | undefined;
  way: string | undefined;
  time: number | undefined;
};
const InputList = {
  place: undefined,
  transportation: undefined,
  way: undefined,
  time: undefined,
};
export const InputCheck = () => {
  const [input, setInput] = useState<Input>(InputList);
  const [inputTime, setInputTime] = useState<string | undefined>(undefined); //時間入力のコンポーネントの変化確認
  const [inputPlace, setInputPlace] = useState<string | undefined>(undefined); //場所入力のコンポーネントの変化確認
  const [inputTransportation, setInputTransportation] = useState<
    string | undefined
  >(undefined); //移動手段入力のコンポーネントの変化確認
  const [inputWay, setInputWay] = useState<string | undefined>(undefined); //往復か、片道かを入力するコンポーネント
  const [isValidate, setIsValidate] = useState<boolean>(false); // データを送信可能かどうか

  useEffect(() => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        place: inputPlace ? String(inputPlace) : undefined,
      };
    });
  }, [inputPlace]);

  useEffect(() => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        time: inputTime ? Number(inputTime) : undefined,
      };
    });
  }, [inputTime]);

  useEffect(() => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        transportation: inputTransportation
          ? String(inputTransportation)
          : undefined,
      };
    });
  }, [inputTransportation]);

  useEffect(() => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        way: inputWay ? String(inputWay) : undefined,
      };
    });
  }, [inputWay]);

  useEffect(() => {
    setIsValidate(() => {
      return input.place && input.transportation && input.way && input.time
        ? true
        : false;
    });
  }, [input]);

  return (
    <>
      <Box height="40px"></Box>
      {/*現在地の入力 */}
      <PlaceInput value={inputPlace} setState={setInputPlace} />
      <Box height="101px"></Box>
      {/*移動手段ボタン入力 */}
      <TransportationButtonList onLabelChange={setInputTransportation} />
      <Box height="101px"></Box>
      {/*往復、片道ボタン入力 */}
      <RoundOrOneWayButtonList onLabelChange={setInputWay} />
      <Box height="72px"></Box>
      {/*かかる分数の入力 */}
      <WayTime value={inputTime} setState={setInputTime} />
      <Box height="74px"></Box>
      {/*検索ボタンコンポーネント */}
    </>
  );
};
