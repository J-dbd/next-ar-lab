"use client";

import { useMemo } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore, RootState } from "../lib/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

interface StoreProviderProps {
  initialState: RootState; //초기 redux의 상태
  children: React.ReactNode;
}

export default function StoreProvider({
  initialState,
  children,
}: StoreProviderProps) {
  // initialState가 변경될 때마다 새로운 Redux store를 생성합니다.
  // 변경되지 않을 때는 이전의 값을 재사용합니다.
  const store = useMemo(() => makeStore(initialState), [initialState]);
  // 위에서 설정한 것처럼, store가 변경될 때마다 새로운 persistStore가 호출됩니다.
  // store의 변경이 없다면 새로 생성되지 않습니다.
  const persistor = useMemo(() => persistStore(store), [store]);

  // 하위 컴포넌트에 전달합니다.
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

// PersistGate는 persistor가 상태를 로컬 스토리지에서 복원하는 동안 UI의 로딩 상태를 관리합니다.
