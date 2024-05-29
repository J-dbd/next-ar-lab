import styled from "styled-components";

interface ContainerProps {
  $containerSize: string;
  $containerColor: string;
}

// container 라는 styled component는  ContainerProps 타입의 props을 받는다.
// Container 컴포넌트를 렌더링할 때 containerSize라는 이름의 prop을 전달한다.

export const Container = styled.section<ContainerProps>`
  width: ${({ $containerSize }) => $containerSize};
  background-color: ${({ $containerColor }) => {
    console.log("??", $containerColor);
    return $containerColor;
  }};
`;
