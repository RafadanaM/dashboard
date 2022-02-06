import classes from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import { ReactComponent as DashboardIcon } from "../../../assets/images/Dashboard_icon.svg";
import { ReactComponent as MenuIcon } from "../../../assets/images/Menu.svg";
const Sidebar = () => {
  return (
    <div className={classes.container}>
      <SidebarItem icon={<MenuIcon className={classes.menu} />} />
      <SidebarItem icon={<DashboardIcon className={classes.icon} />} selected />
    </div>
  );
};

export default Sidebar;
