"use client";

import { useState, useEffect } from "react";

export default function ClientPage() {
  const [data, setData] = useState(0);

  console.log("this rendered on the client");
  return (
    <main>
      <h1>This runs on the client</h1>
      <button
        onClick={() => {
          console.log("clicked!");
          setData((prv) => prv + 1);
        }}
      >
        Click
      </button>
      <h3>{data}</h3>
    </main>
  );
}
