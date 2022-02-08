import { useEffect, useRef, useState } from "react";
import useOutsideAlerter from "../../../utils/useOutsideAlerter";
import classes from "./FilterModal.module.css";
import calendar from "../../../assets/images/calendar.png";
import { ReactComponent as Cancel } from "../../../assets/images/Cancel.svg";
import { filters, FilterType } from "../../../data";
import FilterItem from "../FilterItem/FilterItem";
import Calendar from "react-calendar";
import "./calendar.css";
import getDateRange from "../../../utils/getDateRange";

interface IFIlterModal {
  filter: FilterType;
  startDate: Date;
  endDate: Date;
  handleCancel: () => void;
  handleApply: (
    firstDate: Date,
    secondDate: Date,
    currentFilter: FilterType
  ) => void;
}

const FilterModal = ({
  handleCancel,
  handleApply,
  filter,
  startDate,
  endDate,
}: IFIlterModal) => {
  const [firstDate, setFirstDate] = useState<Date>(startDate);
  const [secondDate, setSecondDate] = useState<Date>(endDate);
  const [currentFilter, setCurrentFilter] = useState<FilterType>(filter);
  const contentRef = useRef(null);
  useOutsideAlerter(contentRef, handleCancel);
  useEffect(() => {
    const { currentDate, prevDate } = getDateRange(currentFilter);
    setSecondDate(currentDate);
    setFirstDate(prevDate);
  }, [currentFilter]);

  const handleChangeFilter = (newFilter: FilterType) => {
    setCurrentFilter(newFilter);
  };

  const FilterItems = () => {
    return (
      <>
        {filters.map((filter) => (
          <FilterItem
            key={filter}
            currentFilter={currentFilter}
            name={filter}
            handleClick={handleChangeFilter}
          />
        ))}
      </>
    );
  };

  return (
    <div className={classes.modal}>
      <div ref={contentRef} className={classes.content}>
        <div className={classes.head}>
          <div className={classes.period}>
            <img src={calendar} alt="calendar" />
            <span>Period</span>
          </div>
          <Cancel className={classes.cancel} onClick={handleCancel} />
        </div>
        <div className={classes.main}>
          <div className={classes.filter}>
            <FilterItems />
            <button
              type="button"
              className={classes.apply}
              onClick={() => handleApply(firstDate, secondDate, currentFilter)}
            >
              Apply
            </button>
          </div>
          <div className={classes.calendars}>
            <Calendar
              selectRange={false}
              showNeighboringMonth={false}
              value={[firstDate, secondDate]}
              activeStartDate={firstDate}
              maxDate={new Date()}
            />
            <Calendar
              selectRange={true}
              showNeighboringMonth={false}
              value={[firstDate, secondDate]}
              activeStartDate={secondDate}
              maxDate={new Date()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
