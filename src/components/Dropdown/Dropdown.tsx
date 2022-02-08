import classes from "./Dropdown.module.css";
import { ReactComponent as Down } from "../../assets/images/chevron-down.svg";
import { useRef, useState } from "react";
import { PeriodType } from "../../data";
import DropdownItems from "./DropdownItems/DropdownItems";
import useOutsideAlerter from "../../utils/useOutsideAlerter";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] =
    useState<PeriodType>("Last 6 Months");
  const handleToggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  const dropDownref = useRef(null);
  useOutsideAlerter(dropDownref, () => setIsOpen(false));

  const handleChangePeriod = (selectedPeriod: PeriodType) => {
    setSelectedPeriod(selectedPeriod);
    setIsOpen(false);
  };

  return (
    <div ref={dropDownref} className={classes.container}>
      <div className={classes.dropdownButton} onClick={handleToggleDropdown}>
        <span>{selectedPeriod}</span>
        <Down className={`${isOpen ? classes.up : ""}`} />
      </div>
      <div
        className={`${classes.dropdown} ${
          isOpen ? classes.dropdownActive : ""
        }`}
      >
        <DropdownItems handleClick={handleChangePeriod} />
      </div>
    </div>
  );
};

export default Dropdown;
