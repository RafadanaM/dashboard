import { dropdownData, PeriodType } from "../../../data";
import classes from "./DropdownItems.module.css";

interface IDropdownItems {
  handleClick: (selectedPeriod: PeriodType) => void;
}
const DropdownItems = ({ handleClick }: IDropdownItems) => {
  return (
    <>
      {dropdownData.map((data) => (
        <div
          key={data}
          className={classes.item}
          onClick={() => handleClick(data)}
        >
          {data}
        </div>
      ))}
    </>
  );
};

export default DropdownItems;
