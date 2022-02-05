import classes from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import { ReactComponent as DashboardIcon } from "../../../assets/images/Dashboard_icon.svg";
const Sidebar = () => {
  return (
    <div className={classes.container}>
      <SidebarItem icon={<DashboardIcon className={classes.icon} />} />
    </div>
  );
};

export default Sidebar;
