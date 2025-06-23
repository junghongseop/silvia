import { useEffect, useReducer } from "react";
import { BASE_STATE } from "../constants/data";
import { gameReducer } from "./gameReducer";
import { Alert } from "react-native";
import getAverageReactionTime from "../utils/getAverageReactionTime";
import getReactionTime from "../utils/getReactionTime";

/**
 * 테스트 로직과 상태 관리를 캡슐화한 커스텀 훅
 * - 상태는 useReducer로 관리
 * - 반응 시간 측정 및 평균 계산 로직 포함
 * - 테스트 흐름 제어
 */
export const useGame = () => {
  const [state, dispatch] = useReducer(gameReducer, BASE_STATE);

  // 현재 문제 번호 (사용자가 맞춰야하는 번호)
  const currentNumber = state.sequence[state.currentIndex];

  // 현재 문제의 반응 시간
  const reactionTime = getReactionTime(state.startTime);

  // 전체 평균 반응 시간
  const averageReactionTime = getAverageReactionTime(state.reactionTimes);

  /**
   * 게임을 시작하는 핸들러
   * - 상태를 초기화하고 시작 시간 설정
   */
  const handleStart = () => {
    dispatch({ type: "START" });
  };

  /**
   * 사용자가 기호를 선택했을 때 호출되는 핸들러
   * - 정답 여부 판단
   * - 반응 시간 저장
   * - 정답이면 다음 문제로 넘어감, 오답이면 실패 처리
   */
  const handleSelect = (selected: number) => {
    // 정답 직후 대기 상태에서는 입력 무시
    if (state.isWaiting) return;

    // 반응 시간 저장
    dispatch({ type: "ADD_REACTION", payload: reactionTime });

    if (selected === currentNumber) {
      // 정답 처리
      dispatch({ type: "CORRECT" });

      // 2초 대기 후 다음 문제로 이동
      setTimeout(() => {
        dispatch({ type: "NEXT" });
      }, 2000);
    } else {
      // 오답 처리: Alert 표시 후 게임 종료
      Alert.alert("틀렸습니다!", `정답은 ${currentNumber}번 기호였습니다.`);
      dispatch({ type: "FAIL" });
    }
  };

  /**
   * 게임 진행 중일 때 실시간 반응 시간 업데이트
   * - 100ms마다 상태 갱신
   */
  useEffect(() => {
    // 게임이 시작되지 않았거나 대기 상태일 경우 생략
    if (!state.isStarted || !state.startTime || state.isWaiting) return;

    const interval = setInterval(() => {
      const time = Date.now() - state.startTime!;
      dispatch({ type: "UPDATE_LIVE_TIME", payload: time });
    }, 100);

    // 언마운트 시 interval 정리
    return () => clearInterval(interval);
  }, [state.isStarted, state.startTime, state.isWaiting]);

  return {
    state,
    averageReactionTime,
    handleStart,
    handleSelect,
  };
};
