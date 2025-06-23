/**
 * 주어진 시작 시점으로부터의 반응 시간을 계산합니다.
 * - 시작 시간이 null일 경우 0을 반환하여 예외 방지
 * - 현재 시간에서 시작 시간을 빼서 경과 시간을 계산
 * 
 * @param startTime - 반응이 시작된 시간이나 null
 * @returns 현재까지 경과한 시간
 */

const getReactionTime = (startTime: number | null): number => {
  return startTime ? Date.now() - startTime : 0;
};

export default getReactionTime;
