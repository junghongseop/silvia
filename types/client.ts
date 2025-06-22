import { SvgProps } from "react-native-svg";

export interface BaseState {
  isStarted: boolean;
  hasFailed: boolean;
  sequence: number[];
  currentIndex: number;
  score: number;
  startTime: number | null;
  reactionTimes: number[];
  liveTime: number;
  isWaiting: boolean;
  shuffledSymbols: [string, React.FC<SvgProps>][];
}

export type State = {
  isStarted: boolean;
  hasFailed: boolean;
  sequence: number[];
  currentIndex: number;
  score: number;
  startTime: number | null;
  reactionTimes: number[];
  liveTime: number;
  isWaiting: boolean;
  shuffledSymbols: [string, React.FC<SvgProps>][];
};

export type Action =
  | { type: "START" }
  | { type: "CORRECT" }
  | { type: "NEXT" }
  | { type: "FAIL" }
  | { type: "ADD_REACTION"; payload: number }
  | { type: "UPDATE_LIVE_TIME"; payload: number };
