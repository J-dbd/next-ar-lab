"use client";
import { useState } from "react";

export default function WS_second() {
  const [websocket, setSocket] = useState<null | WebSocket>(null);

  const callws = () => {
    if (websocket) {
      alert("이미 연결된 소켓이 있습니다.");
      return;
    }
    const newSocket = new WebSocket(
      "wss://javascript.info/article/websocket/demo/hello"
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

      setSocket(null); // 소켓이 닫히면 상태 초기화
    };

    newSocket.onerror = function (error) {
      alert("[error]");
    };

    setSocket(newSocket);
  };
  return (
    <div>
      <h1>WebSocket Demo : useState로 관리</h1>
      <button onClick={callws}>채팅 시작</button>
      <section></section>
    </div>
  );
}
