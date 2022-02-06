import ChartCard from "../../Cards/ChartCard/ChartCard";
import SalesCard from "../../Cards/SalesCard/SalesCard";
import SKUCard from "../../Cards/SKUCard/SKUCard";
import classes from "./Content.module.css";
import help from "../../../assets/images/Help.png";
import { ReactComponent as Up } from "../../../assets/images/chevron-up.svg";
import { bestSKU } from "../../../data";
import Filter from "../../Filter/Filter";
const Content = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h1 className={classes.title}>Dashboard</h1>
        <Filter />
      </div>

      <div className={`${classes.head} ${classes.sub}`}>
        <span className={classes.subTitle}>MARKET INSIGHTS</span>
        <div className={classes.helpContainer}>
          <img src={help} alt="help" />
          <span className={classes.help}>Click Here for Help</span>
          <Up className={classes.up} />
        </div>
      </div>

      <div className={classes.main}>
        <SalesCard />
        <ChartCard />
        <SKUCard title="BEST SELLING SKU" products={bestSKU} />
        <SKUCard title="TOP COMPETITOR SKU" products={bestSKU} />
      </div>
    </div>
  );
};

export default Content;
