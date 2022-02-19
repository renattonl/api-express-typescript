/* eslint-disable @typescript-eslint/no-explicit-any */
export const isNumber = (n: any): boolean => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
