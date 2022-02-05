import Navbar from "./Navbar/Navbar";
import classes from "./Layout.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
const Layout = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.main}>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Layout;
