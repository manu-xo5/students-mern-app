export const formateDate = date => {
  if (!(date instanceof Date)) date = new Date(date);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
