const debounce = (func: (...args: any[]) => Promise<any>, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return async (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    return new Promise((resolve) => {
      timeoutId = setTimeout(async () => {
        resolve(await func(...args));
      }, delay);
    });
  };
};

export default debounce;
