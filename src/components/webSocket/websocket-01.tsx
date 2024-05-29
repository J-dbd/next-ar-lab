"use client";
import { useEffect, useState } from "react";

/** connection by useEffect */
export default function WS_first() {
  const [readyMsg, setReadyMsg] = useState("");
  useEffect(() => {
    const socket = new WebSocket(
      "wss://javascript.info/article/websocket/demo/hello"
    );

    //소켓 오픈
    socket.onopen = function (e) {
      alert("[open] 커넥션이 만들어졌습니다.");
      setReadyMsg("데이터를 서버에 연결하는 중입니다. . . ");
      //alert("데이터를 서버에 전송해봅시다.");
      // first handshake?
      socket.send("My name is Bora");
    };

    socket.onmessage = function (e) {
      alert(`[message] 서버로부터 전송받은 데이터: ${e.data}`);
      setReadyMsg("서버와 정상적으로 연결되었습니다!");
    };

    socket.onclose = function (e) {
      if (e.wasClean) {
        alert(
          `[close] 커넥션이 정상적으로 종료되었습니다(code=${e.code} reason=${e.reason})`
        );
      } else {
        // 예시: 프로세스가 죽거나 네트워크에 장애가 있는 경우
        // event.code가 1006이 됩니다.
        alert("[close] 커넥션이 죽었습니다.");
      }
      setReadyMsg("서버와의 연결이 끊겼습니다.");
    };

    socket.onerror = function (error) {
      alert("[error]");
    };

    // Clean up WebSocket on component unmount
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Demo : useEffect로 관리</h1>
      <section>컴포넌트가 마운트될 때 자동으로 연결됩니다</section>
      <p>{readyMsg}</p>
    </div>
  );
}
