"use client";
export default function WS_forth() {
  const callws = () => {
    let url = "ws://localhost:3050/wstester";
    console.log("url?, ", url);
    const newSocket = new WebSocket(
      // "wss://javascript.info/article/websocket/demo/hello"
      // "wss://localhost:3050" //failed!
      url
    );

    console.log("newSocket??", newSocket);

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

    newSocket.onerror = function (error) {
      alert("[error]");
    };
  };
  return (
    <div>
      <h1 style={{ color: "var(--color-secondary)" }}>
        WebSocket Demo 5: 서버 컴포넌트
      </h1>
      <button onClick={callws}>채팅 시작</button>
      <section></section>
    </div>
  );
}
