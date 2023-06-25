import {
  Box,
  Card,
  CardBody,
  Container,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { VSpacer } from "../components/atomos/Spacer";
import { Buttonset } from "../components/atomos/Button";
import { TransportationButtonList } from "../components/molecules/TranspotationButtonList";

export const ComponentsList = () => {
  return (
    <>
      <VStack>
        <VSpacer size={4} />
        <Container maxW="container.lg">
          <Heading size="lg" textAlign="center">
            Components
          </Heading>

          <VSpacer size={8} />
          <Heading size="lg">atomos/Button</Heading>
          <Card variant="filled">
            <CardBody>
              <Buttonset />
            </CardBody>
          </Card>

          <VSpacer size={8} />
          <Heading size="lg">atomos/transportation</Heading>
          <Card variant="filled" width="100%">
            <CardBody>
              <TransportationButtonList />
            </CardBody>
          </Card>

          {/* 追加のテンプレート：消さないでね！！ */}

          {/* --------------------*/}
          {/* メモ */}
          {/* ###/###/### の部分には components 以降のパスを記入する */}
          {/* コンポーネントの配置順番はファイルの位置順が嬉しい (性善説) */}

          {/* コード */}
          {/* ###/###/### */}
          {/* <VSpacer size={8} />
            <Heading size="lg">###/###/###</Heading>
            <Card variant="filled">
              <CardBody>
                // ここに追加するコンポーネントを書く
              </CardBody>
            </Card> */}

          {/* 見ずらいので下にボックスつけます */}
          <Box boxSize={20}></Box>
        </Container>
      </VStack>
    </>
  );
};
