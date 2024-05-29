"use client";

import CounterComponent from "@/components/reduxTester/CounterHandlers";
import SecondContainer from "@/components/Container/SecondContainer";
import { useEffect, useRef, useState } from "react";

export default function WS_third() {
  const [message, setMsg] = useState("");
  const [messages, setMessages] = useState<[] | string[]>([]);
  const ws = useRef<null | WebSocket>(null);

  const callws = () => {
    ws.current = new WebSocket(
      //"wss://javascript.info/article/websocket/demo/hello"
      "ws://localhost:3050/wstester"
    );

    //소켓 오픈
    ws.current.onopen = function (e) {
      alert("[open] 커넥션이 만들어졌습니다.");
      alert("데이터를 서버에 전송해봅시다.");
      // first handshake?

      ws.current?.send("first connection");
    };

    ws.current.onmessage = function (e) {
      //alert(`[message] 서버로부터 전송받은 데이터: ${e.data}`);
      //setMessages((prevMsgs) => [...prevMsgs, e.data]);

      if (typeof e.data === "string") {
        setMessages((prevMsgs) => [...prevMsgs, e.data]);
      } else if (e.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
          const textData = reader.result;
          if (typeof textData === "string") {
            setMessages((prevMsgs) => [...prevMsgs, textData]);
          }
        };
        reader.readAsText(e.data);
      } else {
        // string과 blob가 아닌 데이터 타입일 때
        alert("데이터 타입이 다릅니다. 연결을 종료합니다.");
        if (ws.current) {
          ws.current.close();
        }
      }
    };

    ws.current.onclose = function (e) {
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

    ws.current.onerror = function (event: Event) {
      const errorEvent = event as ErrorEvent;
      console.log("[error] " + (errorEvent.message || event));
    };
  };

  const sendMessage = () => {
    if (ws.current && message) {
      ws.current.send(message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setMsg("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(event.target.value);
  };

  useEffect(() => {
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);
  return (
    <>
      <SecondContainer>
        <h1>WebSocket Demo : 서버 컴포넌트</h1>
        <button onClick={callws}>채팅 시작</button>
        <div>
          <section>
            <ul>
              {messages.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          </section>
          <section>
            <input
              placeholder={"채팅을 시작해주세요"}
              value={message}
              onChange={handleInputChange}
            />
            <button onClick={sendMessage}>전송</button>
          </section>
        </div>
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
