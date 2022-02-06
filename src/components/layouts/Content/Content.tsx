import ChartCard from "../../ChartCard/ChartCard";
import SalesCard from "../../SalesCard/SalesCard";
import SKUCard from "../../SKUCard/SKUCard";
import classes from "./Content.module.css";
import help from "../../../assets/images/Help.png";
import { ReactComponent as Up } from "../../../assets/images/chevron-up.svg";
const Content = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h1>Dashboard</h1>
        <span>Custom date component</span>
      </div>

      <div className={`${classes.head} ${classes.sub}`}>
        <span className={classes.subTitle}>MARKET INSIGHTS</span>
        <div className={classes.helpContainer}>
          <img src={help} alt="help" />
          <span className={classes.help}>Click Here for Help</span>
          <Up strokeWidth={"5px"} className={classes.up} />
        </div>
      </div>

      <div className={classes.main}>
        <SalesCard />
        <ChartCard />
        <SKUCard />
        <SKUCard />
      </div>
    </div>
  );
};

export default Content;
