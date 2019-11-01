const getProgress = (finish: string[], remaining: string[]): number => {
  if (!finish || !remaining) {
    return 0;
  }
  const fin: number = finish.length || 0;
  const rem: number = remaining.length || 0;
  switch (true) {
    case fin <= 0:
      return 0;
    case rem <= 0:
      return 100;
    default:
      return (fin / (fin + rem)) * 100;
  }
};

export default getProgress;
