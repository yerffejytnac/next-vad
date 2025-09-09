"use client";

import type { PropsWithChildren } from "react";
import StoreProvider from "@/stores/StoreProvider";
import { ThemeProvider } from "@/styles";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    // biome-ignore lint/complexity/useDateNow: <explanation>
    <StoreProvider lastUpdate={new Date().getTime()}>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreProvider>
  );
};
