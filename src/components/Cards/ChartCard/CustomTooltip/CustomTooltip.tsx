import { IChartData } from "../../../../data";
import classes from "./CustomTooltip.module.css";
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data: IChartData = payload[0].payload;

    const Details = () => {
      return (
        <>
          {Object.entries(data).map(([key, value], idx) => {
            if (key !== "name") {
              return (
                <div key={idx} className={classes.property}>
                  <div
                    className={`${classes.circle} ${
                      classes[key.toLowerCase()]
                    }`}
                  />
                  <span>{key}</span>
                  <span className={classes[key]}>{value}</span>
                </div>
              );
            }
            return null;
          })}
        </>
      );
    };

    return (
      <div className={classes.container}>
        <p>{label}</p>
        <div className={classes.detail}>
          <Details />
        </div>
      </div>
    );
  }

  return <></>;
};
export default CustomTooltip;
