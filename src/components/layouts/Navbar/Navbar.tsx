import classes from "./Navbar.module.css";
import { ReactComponent as Avatar } from "../../../assets/images/Profile.svg";
import logout from "../../../assets/images/logout.png";
import logo from "../../../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className={classes.navContainer}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      <div className={classes.right}>
        <div className={classes.user}>
          <span className={classes.username}>Username</span>
          <span className={classes.companyname}>Company Name </span>
        </div>
        <Avatar className={classes.avatar} />
        <img src={logout} alt="logout" className={classes.logout} />
      </div>
    </div>
  );
};

export default Navbar;
