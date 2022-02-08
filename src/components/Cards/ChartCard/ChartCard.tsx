import BaseCard from "../BaseCard/BaseCard";
import classes from "./ChartCard.module.css";
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from "recharts";
import Dropdown from "../../Dropdown/Dropdown";
import CustomTooltip from "./CustomTooltip/CustomTooltip";
import { chartData } from "../../../data";
const ChartCard = () => {
  return (
    <div className={classes.container}>
      <BaseCard
        title="AVERAGE PURCHASE VALUE"
        titleStyle={classes.title}
        items={[<Dropdown />]}
      >
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="Gross" stackId="a" barSize={40} fill="#37B04C" />
            <Line type="monotone" dataKey="Nett" stroke="#FFE854" />
          </ComposedChart>
        </ResponsiveContainer>
      </BaseCard>
    </div>
  );
};

export default ChartCard;
