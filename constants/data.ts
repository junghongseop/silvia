import { BaseState } from "../types/client";
import getRandomNumber from "../utils/getRandomNumber";
import shuffleArray from "../utils/suffleArray";
import { SYMBOL_MAP } from "./constant";

/**
 * 게임의 초기 상태를 정의하는 상수
 * - 게임 시작 전 useReducer의 초기값으로 사용됨
 */
export const BASE_STATE: BaseState = {
  isStarted: false, // 게임 시작 여부
  hasFailed: false, // 오답 여부
  sequence: [getRandomNumber()], // 첫 번째 문제 숫자 (랜덤 1~9)
  currentIndex: 0, // 현재 문제 인덱스 (초기값 0)
  score: 0, // 정답 횟수
  startTime: null, // 반응 시간 측정을 위한 시작 시간
  reactionTimes: [], // 사용자 반응 시간 기록 배열
  liveTime: 0, // 현재 문제의 실시간 반응 시간
  isWaiting: false, // 정답 후 다음 문제 대기 여부
  shuffledSymbols: shuffleArray(Object.entries(SYMBOL_MAP)), // 숫자-기호 매핑을 랜덤하게 섞은 배열 (게임 화면에 표시됨)
};
