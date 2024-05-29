"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Container } from "@/components/Container/styled";

const ContainerComponentSecond = () => {
  const tokens = useSelector((state: RootState) => state.designToken.tokens);

  console.log("seocndary로 세팅된 컨테이너 컴포넌트가 랜더링됨");
  return (
    <Container
      $containerColor={tokens.colors.secondary}
      $containerSize={tokens.sizes.padding}
    >
      <li>이 컴포넌트는 secondary color가 사용된 컴포넌트 입니다.</li>
    </Container>
  );
};

export default ContainerComponentSecond;
