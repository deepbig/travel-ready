export const isFound = (value: string, arr: string[]) => {
  const left = value.toLowerCase();
  return arr?.some((right) => left === right.toLowerCase());
};
