"use client";

import CounterComponent from "@/components/reduxTester/CounterHandlers";
import SecondContainer from "@/components/Container/SecondContainer";
import { useRef, useState } from "react";

export default function WS_third() {
  const [message, setMsg] = useState("");

  const callws = () => {
    const newSocket = new WebSocket(
      //"wss://javascript.info/article/websocket/demo/hello"
      "ws://localhost:3050/wstester"
    );

    //소켓 오픈
    newSocket.onopen = function (e) {
      alert("[open] 커넥션이 만들어졌습니다.");
      alert("데이터를 서버에 전송해봅시다.");
      // first handshake?
      newSocket.send("My name is Bora");
    };

    newSocket.onmessage = function (e) {
      alert(`[message] 서버로부터 전송받은 데이터: ${e.data}`);
    };

    newSocket.onclose = function (e) {
      if (e.wasClean) {
        alert(
          `[close] 커넥션이 정상적으로 종료되었습니다(code=${e.code} reason=${e.reason})`
        );
      } else {
        // 예시: 프로세스가 죽거나 네트워크에 장애가 있는 경우
        // event.code가 1006이 됩니다.
        alert("[close] 커넥션이 죽었습니다.");
      }
    };

    newSocket.onerror = function (event: Event) {
      const errorEvent = event as ErrorEvent;
      console.log("[error] " + (errorEvent.message || event));
    };
  };
  return (
    <>
      <SecondContainer>
        <h1>WebSocket Demo : 서버 컴포넌트</h1>
        <button onClick={callws}>채팅 시작</button>

        <ul>
          <li>
            이 컴포넌트는 클라이언트 측에서 전역으로 사용되는 counter 관련
            설정을 테스트하는 컴포넌트입니다.
          </li>
          <li>
            <CounterComponent />
          </li>
        </ul>
      </SecondContainer>
    </>
  );
}
