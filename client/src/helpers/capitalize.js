export const capitalize = string => {
  const head = string[0];
  const tail = string.substr(1);
  return head.toUpperCase() + tail;
};
