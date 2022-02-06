import BaseCard from "../BaseCard/BaseCard";
import classes from "./SalesCard.module.css";
import { ReactComponent as Cart } from "../../../assets/images/Cart.svg";
import { ReactComponent as Down } from "../../../assets/images/DownArrow.svg";
const SalesCard = () => {
  return (
    <BaseCard title="Sales Turnover" titleStyle={classes.title}>
      <div className={classes.container}>
        <div className={classes.detail}>
          <span className={classes.price}>Rp 3,600,000</span>
          <div className={classes.percentContainer}>
            <Down className={classes.down} />
            <span>13.8%</span>
            <span>last period in products sold</span>
          </div>
        </div>
        <Cart className={classes.cart} />
      </div>
    </BaseCard>
  );
};

export default SalesCard;
