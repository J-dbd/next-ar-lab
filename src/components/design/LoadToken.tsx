async function loadDesignToken() {
  const response = await fetch("./token.json");
  const tokens = await response.json();
  const root = document.documentElement;
  console.log("what is token?", tokens);
  console.log("what is root?", root);

  return;
}
