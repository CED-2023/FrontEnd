import { Box } from "@chakra-ui/react";
import "./Home.css";
import { WayTime } from "../components/atomos/WayTime";

//TODO:背景の横幅調整をしたい
//TODO:全てのコンポ―ネントを中心ぞろえに
export const Home = () => {
  return (
    <>
      <div className="home-container">
        {/* 他のコンポーネントや要素をここに追加 */}
        <Box height="138px"></Box>
        {/*現在地の入力 */}
        <Box height="101px"></Box>
        {/*移動手段ボタン入力 */}
        <Box height="101px"></Box>
        {/*往復、片道ボタン入力 */}
        <Box height="72px"></Box>
        {/*かかる分数の入力 */}
        <WayTime />
        <Box height="74px"></Box>
        {/*検索ボタンコンポーネント */}
      </div>
    </>
  );
};
