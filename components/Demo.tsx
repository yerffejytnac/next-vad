import { useMicVAD, utils } from "@ricky0123/vad-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const audioItemKey = (audioURL: string) => audioURL.substring(-10);

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const Demo = () => {
  const [audioList, setAudioList] = useState<string[]>([]);
  const vad = useMicVAD({
    model: "v5",
    baseAssetPath: "/packages/",
    onnxWASMBasePath: "/packages/",
    onSpeechEnd: (audio) => {
      const wavBuffer = utils.encodeWAV(audio);
      const base64 = utils.arrayBufferToBase64(wavBuffer);
      const url = `data:audio/wav;base64,${base64}`;
      setAudioList((old) => {
        return [url, ...old];
      });
    },
  });
  return (
    <Root>
      <Controls>
        <button type="button" onClick={vad.start}>
          Start
        </button>
        <button type="button" onClick={vad.pause}>
          Pause
        </button>
        <button type="button" onClick={vad.toggle}>
          Toggle
        </button>
      </Controls>
      <List>
        <Item>
          <Header>
            {vad.listening && <Indicator layoutId="indicator" />}
            <Title>Listening</Title>
          </Header>
          <Mono>{!vad.listening && "Not"} listening...</Mono>
        </Item>
        <Item>
          <Header>
            {vad.loading && <Indicator layoutId="indicator" />}
            <Title>Loading</Title>
          </Header>
          <Mono>{!vad.loading && "Not"} loading...</Mono>
        </Item>
        <Item>
          <Header>
            {vad.errored && <Indicator layoutId="indicator" />}
            <Title>Errored</Title>
          </Header>
          <Mono>{!vad.errored && "Not"} errored!</Mono>
        </Item>
        <Item>
          <Header>
            {vad.userSpeaking && <Indicator layoutId="indicator" />}
            <Title>User Speaking</Title>
          </Header>
          <Mono>{!vad.userSpeaking && "Not"} speaking...</Mono>
        </Item>
        <Item>
          <Header>
            <Title>Recordings</Title>
          </Header>
          <Mono>{audioList.length} recordings</Mono>
          <AnimatePresence>
            <RecordingsList
              variants={variants}
              initial="initial"
              animate="animate"
            >
              {audioList.map((audioURL) => {
                return (
                  <motion.li
                    key={audioItemKey(audioURL)}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                  >
                    {/** biome-ignore lint/a11y/useMediaCaption: <explanation> */}
                    <audio src={audioURL} controls />
                  </motion.li>
                );
              })}
            </RecordingsList>
          </AnimatePresence>
        </Item>
      </List>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[8]};
  gap: ${({ theme }) => theme.space[8]};

  & button {
    ${({ theme }) => theme.textStyles.bodySmall};
    font-family: ${({ theme }) => theme.fonts.body};
    font-variation-settings: "slnt" 0, "wdth" 500, "wght" 350;
    background-color: ${({ theme }) => theme.colors.neutral[10]};
    color: ${({ theme }) => theme.colors.neutral[90]};
    border: none;
    padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
    border-radius: 100px;
    cursor: pointer;
  }
`;

const Mono = styled.span`
  ${({ theme }) => theme.textStyles.bodySmall};
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-variation-settings: "wght" 200;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[0.5]};
`;

const Header = styled.hgroup`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.space[4]};
  align-items: center;
`;

const Title = styled(motion.h6)`
  color: ${({ theme }) => theme.colors.neutral[10]};
`;

const Indicator = styled(motion.div)`
  margin-inline-start: -1.5rem;
  background-color: ${({ theme }) => theme.colors.error[60]};
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.space[1]};
`;

const RecordingsList = styled(motion.ol)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  list-style: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: ${({ theme }) => theme.space[4]} 0;
`;

export default Demo;
