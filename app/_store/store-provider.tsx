"use client"

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, type AppStore } from "./index";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  storeRef.current ??= makeStore(); // se crea una sola vez por árbol/request

  return <Provider store={storeRef.current}>{children}</Provider>;
}