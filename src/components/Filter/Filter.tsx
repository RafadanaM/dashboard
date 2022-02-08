import classes from "./Filter.module.css";
import calendar from "../../assets/images/calendar.png";
import { ReactComponent as Down } from "../../assets/images/chevron-down.svg";
import FilterModal from "./FilterModal/FilterModal";
import { useState } from "react";
import { FilterType } from "../../data";
import dateToString from "../../utils/dateToString";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<FilterType>("Last 7 days");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const handleFilterClick = () => {
    setIsOpen(true);
  };

  const handleCancelClick = () => {
    setIsOpen(false);
  };

  const handleApply = (
    prevDate: Date,
    currentDate: Date,
    currentFilter: FilterType
  ) => {
    setStartDate(prevDate);
    setEndDate(currentDate);
    setFilter(currentFilter);
    setIsOpen(false);
  };

  return (
    <>
      <div className={classes.container} onClick={handleFilterClick}>
        <img src={calendar} alt="calendar" />
        <span>Period</span>
        <span className={classes.date}>
          {`${dateToString(startDate)} - ${dateToString(endDate)}`}
        </span>
        <Down className={classes.down} />
      </div>
      {isOpen && (
        <FilterModal
          startDate={startDate}
          endDate={endDate}
          filter={filter}
          handleApply={handleApply}
          handleCancel={handleCancelClick}
        />
      )}
    </>
  );
};

export default Filter;
