import classes from "./Filter.module.css";
import calendar from "../../assets/images/calendar.png";
import { ReactComponent as Down } from "../../assets/images/chevron-down.svg";
const Filter = () => {
  return (
    <div className={classes.container}>
      <img src={calendar} alt="calendar" />
      <span>Period</span>
      <span className={classes.date}>
        11 September 2018 - 14 Septermber 2018
      </span>
      <Down className={classes.down} />
    </div>
  );
};

export default Filter;
