import { BaseState } from "../types/client";
import getRandomNumber from "../utils/getRandomNumber";
import shuffleArray from "../utils/suffleArray";
import { SYMBOL_MAP } from "./constant";

export const BASE_STATE: BaseState = {
  isStarted: false,
  hasFailed: false,
  sequence: [getRandomNumber()],
  currentIndex: 0,
  score: 0,
  startTime: null,
  reactionTimes: [],
  liveTime: 0,
  isWaiting: false,
  shuffledSymbols: shuffleArray(Object.entries(SYMBOL_MAP)),
};
