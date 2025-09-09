import { createContext, useContext } from "react";
import { createStore, useStore as useZustandStore } from "zustand";
import type { PreloadedGlobalStore } from "./StoreProvider";

export interface GlobalStore {
  lastUpdate: number;
  light: boolean;
  count: number;
  tick: (lastUpdate: number) => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const getDefaultInitialState = () => {
  return {
    lastUpdate: new Date(1970, 1, 1).getTime(),
    light: false,
    count: 0,
  } as const;
};

export type StoreType = ReturnType<typeof createGlobalStore>;

const storeContext = createContext<StoreType | null>(null);

export const Provider = storeContext.Provider;

export function useStore<T>(selector: (state: GlobalStore) => T) {
  const store = useContext(storeContext);

  if (!store) throw new Error("Store is missing the provider");

  return useZustandStore(store, selector);
}

export function createGlobalStore(preloadedState: PreloadedGlobalStore) {
  return createStore<GlobalStore>((set, get) => ({
    ...getDefaultInitialState(),
    ...preloadedState,
    tick: (lastUpdate) =>
      set({
        lastUpdate,
        light: !get().light,
      }),
    increment: () =>
      set({
        count: get().count + 1,
      }),
    decrement: () =>
      set({
        count: get().count - 1,
      }),
    reset: () =>
      set({
        count: getDefaultInitialState().count,
      }),
  }));
}
