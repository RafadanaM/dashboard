import classes from "./SidebarItem.module.css";

interface ISideBarItem {
  icon: any;
  selected?: boolean | undefined;
}

const SidebarItem = ({ icon, selected }: ISideBarItem) => {
  return (
    <div
      className={`${classes.container} ${
        selected ? classes.containerActive : ""
      }`}
    >
      {icon}
    </div>
  );
};

export default SidebarItem;
