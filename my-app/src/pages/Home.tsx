import { AbsoluteCenter, Box } from "@chakra-ui/react";
import "./Home.css";
import { WayTime } from "../components/atomos/WayTime";
import { TransportationButtonList } from "../components/molecules/TranspotationButtonList";
import { PlaceInput } from "../components/atomos/PlaceInput";
import { RoundOrOneWayButtonSet } from "../components/organisms/RoundOrOneWayButtonSet";
import { SearchButton } from "../components/atomos/SearchButton";



//TODO:背景の横幅調整をしたい
//TODO:全てのコンポ―ネントを中心ぞろえに
export const Home = () => {
  return (
    <>
      <div className="home-container">
        {/* 他のコンポーネントや要素をここに追加 */}
        <Box height="80px"></Box>
        {/*現在地の入力 */}
        <Box position='relative' h='40px'>
        <AbsoluteCenter>
        <PlaceInput />
        </AbsoluteCenter>
        </Box>
        <Box height="90px"></Box>
        {/*移動手段ボタン入力 */}
        <Box position='relative' h='40px'>
        <AbsoluteCenter>
        <TransportationButtonList />
        </AbsoluteCenter>
        </Box>
        <Box height="100px"></Box>
        {/*往復、片道ボタン入力 */}
        <RoundOrOneWayButtonSet />
        <Box height="72px"></Box>
        {/*かかる分数の入力 */}
        <Box position='relative' h='40px'>
        <AbsoluteCenter>
        <WayTime />
        </AbsoluteCenter>
        </Box>
        <Box height="72px"></Box>
        {/*検索ボタンコンポーネント */}
        <SearchButton active={false} />
        <Box height="200px"></Box>
      </div>
    </>
  );
};
