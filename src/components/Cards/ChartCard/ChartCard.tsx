import BaseCard from "../BaseCard/BaseCard";
import classes from "./ChartCard.module.css";
const ChartCard = () => {
  return (
    <div className={classes.container}>
      <BaseCard title="AVERAGE PURCHASE VALUE" titleStyle={classes.title}>
        {" "}
        Chart card{" "}
      </BaseCard>
    </div>
  );
};

export default ChartCard;
