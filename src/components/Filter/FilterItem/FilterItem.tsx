import { FilterType } from "../../../data";
import classes from "./FilterItem.module.css";
interface IFilterItem {
  name: FilterType;
  currentFilter: FilterType;
  handleClick: (newFilter: FilterType) => void;
}
const FilterItem = ({ name, currentFilter, handleClick }: IFilterItem) => {
  return (
    <div
      className={`${classes.container} ${
        currentFilter === name ? classes.active : ""
      }`}
      onClick={() => handleClick(name)}
    >
      {name}
    </div>
  );
};

export default FilterItem;
