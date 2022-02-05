import classes from "./SidebarItem.module.css";

interface ISideBarItem {
  icon: any;
}

const SidebarItem = ({ icon }: ISideBarItem) => {
  return <div className={classes.container}>{icon}</div>;
};

export default SidebarItem;
