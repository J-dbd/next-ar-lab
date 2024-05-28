import ClientPage from "@/app/client/page";

export default async function ServerPage() {
  console.log("this is rendered in server");

  let data;
  try {
    data = await fetch("/api/data").then((res) => res.json()); //업데이트 할 필요 없음.
  } catch (err) {
    data = `error ouccured! ${err}`;
    console.log("err!", err);
  }

  return (
    <main>
      <h1>This runs on the server</h1>
      {data}
      <ClientPage />
    </main>
  );
}
