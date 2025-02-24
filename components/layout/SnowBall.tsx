import React, { Component, lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { MainContainer } from "../../styles/styledComponentModule";
import styled from "styled-components";
import { Loading } from "./new/loading-cute";

class SnowBall extends Component {
  render() {
    return (
      <SnowballContainer>
        <Suspense fallback={<Loading />}>
          <Text>스노우볼을 움직여보세요</Text>
          <Canvas>
            <ModelComponent />
          </Canvas>
        </Suspense>
      </SnowballContainer>
    );
  }
}
export default SnowBall;

const Text = styled.h3`
  text-align: center;
  color: white;
`;
const SnowballContainer = styled(MainContainer)`
  height: 80vh;
  @media (max-width: 600px) {
    display: none;
  }
`;

// @ts-ignore : glb 파일을 담아오는 type이 하나뿐이라 그냥 ignore 처리
const ModelComponent = lazy(() => import("/components/index/SnowBallModel"));
