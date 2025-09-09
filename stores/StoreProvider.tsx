"use client";

import { type PropsWithChildren, useRef } from "react";

import type { GlobalStore, StoreType } from "./global";
import { createGlobalStore, Provider } from "./global";

export interface PreloadedGlobalStore extends Pick<GlobalStore, "lastUpdate"> {}

export default function StoreProvider({
  children,
  ...props
}: PropsWithChildren<PreloadedGlobalStore>) {
  const storeRef = useRef<StoreType | undefined>(undefined);

  if (!storeRef.current) {
    storeRef.current = createGlobalStore(props);
  }

  return <Provider value={storeRef.current}>{children}</Provider>;
}
