import { readFileSync } from "fs";
import path from "path";
//redux
import { makeStore } from "@/lib/store";
import { setDesignToken } from "@/lib/features/designToken/designTokenSlice";

// 디자인 토큰을 초기화하는 컴포넌트. 초기 HTML 을 서버에서 랜더링할 때 사용된다.
let cachedTokens: any = null;
let cachedStore: any = null;

/**
 * 디자인 토큰(json)을 가져와서 파싱한다.
 * @returns 파싱된 JSON 데이터
 */
export async function getDesignToken() {
  if (!cachedTokens) {
    const filepath = path.join(process.cwd(), "public", "token.json");
    const fileContents = readFileSync(filepath, "utf-8");
    cachedTokens = JSON.parse(fileContents);
  }
  return cachedTokens;
}

/**
 * 디자인 토큰을 초기화하여 dispatch한다.
 * @returns dispatch 된 store
 */
export async function initializeStoreWithTokens() {
  if (!cachedStore) {
    const store = makeStore();
    const tokens = await getDesignToken();
    store.dispatch(setDesignToken(tokens));
    cachedStore = store;
  }

  // 서버 측에서 제대로 dispatch 했는지 확인한다.
  //const currentState = store.getState();
  //console.log("Current state after dispatch:", currentState.designToken.tokens);

  return cachedStore;
}
