import { useMicVAD, utils } from "@ricky0123/vad-react";
import { useState } from "react";

const audioItemKey = (audioURL: string) => audioURL.substring(-10);

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
    <div>
      <h6>Listening</h6>
      {!vad.listening && "Not"} listening
      <h6>Loading</h6>
      {!vad.loading && "Not"} loading
      <h6>Errored</h6>
      {!vad.errored && "Not"} errored
      <h6>User Speaking</h6>
      {!vad.userSpeaking && "Not"} speaking
      <h6>Recordings</h6>
      <ol>
        {audioList.map((audioURL) => {
          return (
            <li key={audioItemKey(audioURL)}>
              {/** biome-ignore lint/a11y/useMediaCaption: <explanation> */}
              <audio src={audioURL} controls />
            </li>
          );
        })}
      </ol>
      <h6>Controls</h6>
      <button type="button" onClick={vad.start}>
        Start
      </button>
      <button type="button" onClick={vad.pause}>
        Pause
      </button>
      <button type="button" onClick={vad.toggle}>
        Toggle
      </button>
    </div>
  );
};

export default Demo;
