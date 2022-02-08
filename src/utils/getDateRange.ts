import { FilterType } from "../data";

const getDateRange = (filter: FilterType) => {
  const currentDate = new Date();
  let prevDate;
  switch (filter) {
    case "Today":
      prevDate = new Date();
      break;
    case "Yesterday":
      currentDate.setDate(currentDate.getDate() - 1);
      prevDate = currentDate;
      break;
    case "Last 7 days":
      prevDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - 7
      );
      break;
    case "Last 30 days":
      prevDate = new Date(new Date().setDate(currentDate.getDate() - 30));
      break;
    case "This Month":
      prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      break;

    default:
      prevDate = new Date();
      break;
  }

  return { currentDate, prevDate };
};

export default getDateRange;
