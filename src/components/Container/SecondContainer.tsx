import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

import styled from "styled-components";

/** Styled */
interface ContainerProps {
  $containerSize: string;
  $containerColor: string;
}

// container 라는 styled component는  ContainerProps 타입의 props을 받는다.
// Container 컴포넌트를 렌더링할 때 containerSize라는 이름의 prop을 전달한다.

export const Container = styled.section<ContainerProps>`
  width: ${({ $containerSize }) => {
    //console.log("containerSize??", $containerSize);
    return $containerSize;
  }};
  background-color: ${({ $containerColor }) => {
    //console.log("containerColor??", $containerColor);
    return $containerColor;
  }};
`;

/** Component  */
interface SecondContainerProps {
  children: React.ReactNode;
}

const SecondContainer: React.FC<SecondContainerProps> = ({ children }) => {
  const tokens = useSelector((state: RootState) => state.designToken.tokens);

  return (
    <Container
      $containerColor={tokens.colors.secondary}
      $containerSize={tokens.sizes.container}
    >
      <li>이 컴포넌트는 secondary color가 사용된 컴포넌트 입니다.</li>
      {children}
    </Container>
  );
};

export default SecondContainer;
