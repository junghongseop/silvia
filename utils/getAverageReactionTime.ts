const getAverageReactionTime = (times: number[]) =>
  times.length > 0
    ? Math.round(times.reduce((a, b) => a + b, 0) / times.length)
    : 0;

export default getAverageReactionTime;
