"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Container } from "@/components/Container/styled";

const ContainerComponent = () => {
  const tokens = useSelector((state: RootState) => state.designToken.tokens);

  console.log("primary로 세팅된 컨테이너 컴포넌트가 랜더링됨");
  return (
    <Container
      $containerColor={tokens.colors.primary}
      $containerSize={tokens.sizes.padding}
    >
      이 컴포넌트는 styled component로 생성된 컴포넌트입니다. 색상은 primary 로
      설정되었습니다.
    </Container>
  );
};

export default ContainerComponent;
