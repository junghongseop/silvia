/**
 * 주어진 배열을 Fisher-Yates 알고리즘으로 무작위로 섞어 새로운 배열을 반환합니다.
 * - 원본 배열은 변경되지 않으며, 복사본을 기반으로 셔플됩니다.
 * - 타입 제네릭을 사용하여 어떤 타입의 배열이든 처리가 가능
 * 
 * @param array - 섞을 대상 배열
 * @returns 셔플된 새로운 배결
 */

const shuffleArray = <T>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default shuffleArray;
