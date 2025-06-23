import { SYMBOL_MAP } from "../constants/constant";
import { BASE_STATE } from "../constants/data";
import { Action, State } from "../types/client";
import getRandomNumber from "../utils/getRandomNumber";
import shuffleArray from "../utils/suffleArray";

// 테스트의 상태를 제어하는 reducer 함수
export const gameReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "START":
      // 테스트 시작: 초기 상태로 되돌리고, 시작 시간 설정 및 기호 셔플
      return {
        ...BASE_STATE,
        isStarted: true,
        startTime: Date.now(),
        shuffledSymbols: shuffleArray(Object.entries(SYMBOL_MAP)),
      };
    case "CORRECT":
      // 정답을 맞췄을 때 점수 +1, 다음 문제 대기 상태로 전환
      return {
        ...state,
        score: state.score + 1,
        isWaiting: true,
      };
    case "NEXT":
      // 다음 문제로 넘어감
      // - 만약 마지막 문제였다면 새로운 숫자를 추가하여 시퀀스를 연장
      return {
        ...state,
        sequence:
          state.currentIndex === state.sequence.length - 1
            ? [...state.sequence, getRandomNumber()]
            : state.sequence,
        currentIndex: state.currentIndex + 1,
        startTime: Date.now(), // 다음 문제 시작 시간 초기화
        isWaiting: false,
      };
    case "FAIL":
      // 오답: 테스트 종료 상태로 전환
      return {
        ...state,
        isStarted: false,
        hasFailed: true,
      };
    case "ADD_REACTION":
      // 반응 시간 추가 및 현재 반응 시간 업데이트
      return {
        ...state,
        reactionTimes: [...state.reactionTimes, action.payload],
        liveTime: action.payload,
      };
    case "UPDATE_LIVE_TIME":
      // 현재 반응 시간을 지속적으로 갱신
      return {
        ...state,
        liveTime: action.payload,
      };
    default:
      // 정의되지 않은 액션은 현재 상태 유지
      return state;
  }
};
