/**
 * 주어진 반응 시간 배열의 평균 값을 계산합니다.
 * - 소수점은 반올림(Math.round)
 * - 배열이 비어있으면 0을 반환
 *
 * @param times - 반응 시간 배열
 * @returns 평균 반응 속도
 */

const getAverageReactionTime = (times: number[]) =>
  times.length > 0
    ? Math.round(times.reduce((a, b) => a + b, 0) / times.length)
    : 0;

export default getAverageReactionTime;
