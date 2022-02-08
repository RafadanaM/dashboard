const dateToString = (date: Date) => {
  return date.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export default dateToString;
