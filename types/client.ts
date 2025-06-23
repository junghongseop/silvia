import { SvgProps } from "react-native-svg";

// 게임의 상태를 정의하는 기본 인터페이스
export interface BaseState {
  isStarted: boolean; // 게임 시작 여부
  hasFailed: boolean; // 오답 여부
  sequence: number[]; // 테스트할 숫자 시퀀스
  currentIndex: number; // 현재 테스트 중인 인덱스 위치
  score: number; // 맞힌 횟수
  startTime: number | null; // 현재 문제의 시작 시간
  reactionTimes: number[]; // 사용자의 반응 시간 기록 배열
  liveTime: number; // 현재 문제의 실시간 반응 시간
  isWaiting: boolean; // 정답 후 다음 문제로 넘어가기 전 대기 중인지 여부
  shuffledSymbols: [string, React.FC<SvgProps>][]; // [숫자, 아이콘 컴포넌트] 쌍으로 구성된 배열
}

// BaseState와 동일한 구조의 State 타입 정의
export type State = BaseState;

// 상태 변경을 위한 액션 타입 정의
export type Action =
  | { type: "START" } // 게임 시작
  | { type: "CORRECT" } // 정답 선택 시
  | { type: "NEXT" } // 다음 문제로 이동
  | { type: "FAIL" } // 오답 처리
  | { type: "ADD_REACTION"; payload: number } // 반응 시간 기록 추가
  | { type: "UPDATE_LIVE_TIME"; payload: number }; // 실시간 반응 시간 업데이트
