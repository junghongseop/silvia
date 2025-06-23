/**
 * 1부터 9까지의 무작위 정수를 반환합니다.
 * Math.random()은 0 이상 1 미만의 값을 반환하므로,
 * 0 ~ 8 범위의 정수를 만든 후 1을 더해 1~9 범위를 만듭니다.
 * 
 * @returns 1 이상 9 이하의 랜덤 정수
 */

const getRandomNumber = () => Math.floor(Math.random() * 9) + 1;

export default getRandomNumber;
