"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";

//example
import { initializeCount } from "../lib/features/counter/counterSlice";

export default function StoreProvider({
  count,
  children,
}: {
  count: number; //setting
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  // ensuring that this client component is re-render safe
  // by checking the value of the reference to ensure that the store is only created once.
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeCount(count)); //setting
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
