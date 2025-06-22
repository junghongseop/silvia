import { SYMBOL_MAP } from "../constants/constant";
import { BASE_STATE } from "../constants/data";
import { Action, State } from "../types/client";
import getRandomNumber from "../utils/getRandomNumber";
import shuffleArray from "../utils/suffleArray";

export const gameReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "START":
      return {
        ...BASE_STATE,
        isStarted: true,
        startTime: Date.now(),
        shuffledSymbols: shuffleArray(Object.entries(SYMBOL_MAP)),
      };
    case "CORRECT":
      return {
        ...state,
        score: state.score + 1,
        isWaiting: true,
      };
    case "NEXT":
      return {
        ...state,
        sequence:
          state.currentIndex === state.sequence.length - 1
            ? [...state.sequence, getRandomNumber()]
            : state.sequence,
        currentIndex: state.currentIndex + 1,
        startTime: Date.now(),
        isWaiting: false,
      };
    case "FAIL":
      return {
        ...state,
        isStarted: false,
        hasFailed: true,
      };
    case "ADD_REACTION":
      return {
        ...state,
        reactionTimes: [...state.reactionTimes, action.payload],
        liveTime: action.payload,
      };
    case "UPDATE_LIVE_TIME":
      return {
        ...state,
        liveTime: action.payload,
      };
    default:
      return state;
  }
};
