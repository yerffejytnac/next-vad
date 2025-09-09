"use client";

import styled, { css } from "styled-components";
import { useShallow } from "zustand/react/shallow";

import { useInterval } from "@/hooks/useInterval";
import { useStore } from "@/stores";

function useClock() {
  return useStore(
    useShallow((store) => ({
      lastUpdate: store.lastUpdate,
      light: store.light,
    })),
  );
}

function formatTime(time: number) {
  // hh:mm:ss
  return new Date(time).toJSON().slice(11, 19);
}

export const Clock = () => {
  const { lastUpdate, light } = useClock();
  // alternative way to fetch single piece of state:
  const tick = useStore((store) => store.tick);

  useInterval(() => {
    tick(Date.now());
  }, 1000);

  return <Root $light={light}>{formatTime(lastUpdate)}</Root>;
};

Clock.displayName = "Clock";

const Root = styled.div<{ $light: boolean }>`
  background-color: ${({ theme }) => theme.colors.neutral[95]};
  color: ${({ theme }) => theme.colors.primary[20]};

  ${({ theme, $light }) => css`
    ${
      !$light &&
      css`
      background-color: ${theme.colors.neutral[10]};
      color: ${theme.colors.primary[95]};
    `
    }
  `}
`;
