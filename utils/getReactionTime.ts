const getReactionTime = (startTime: number | null): number => {
  return startTime ? Date.now() - startTime : 0;
};

export default getReactionTime;
