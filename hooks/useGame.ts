import { useEffect, useReducer } from "react";
import { BASE_STATE } from "../constants/data";
import { gameReducer } from "./gameReducer";
import { Alert } from "react-native";
import getAverageReactionTime from "../utils/getAverageReactionTime";
import getReactionTime from "../utils/getReactionTime";

export const useGame = () => {
  const [state, dispatch] = useReducer(gameReducer, BASE_STATE);

  const currentNumber = state.sequence[state.currentIndex];
  const reactionTime = getReactionTime(state.startTime);
  const averageReactionTime = getAverageReactionTime(state.reactionTimes);

  const handleStart = () => {
    dispatch({ type: "START" });
  };

  const handleSelect = (selected: number) => {
    if (state.isWaiting) return;

    dispatch({ type: "ADD_REACTION", payload: reactionTime });

    if (selected === currentNumber) {
      dispatch({ type: "CORRECT" });

      setTimeout(() => {
        dispatch({ type: "NEXT" });
      }, 2000);
    } else {
      Alert.alert("틀렸습니다!", `정답은 ${currentNumber}번 기호였습니다.`);
      dispatch({ type: "FAIL" });
    }
  };

  useEffect(() => {
    if (!state.isStarted || !state.startTime || state.isWaiting) return;

    const interval = setInterval(() => {
      const time = Date.now() - state.startTime!;
      dispatch({ type: "UPDATE_LIVE_TIME", payload: time });
    }, 100);

    return () => clearInterval(interval);
  }, [state.isStarted, state.startTime, state.isWaiting]);

  return {
    state,
    averageReactionTime,
    handleStart,
    handleSelect,
  };
};
