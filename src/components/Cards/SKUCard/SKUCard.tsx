import { IProduct } from "../../../data";
import BaseCard from "../BaseCard/BaseCard";
import classes from "./SKUCard.module.css";
import SKUItem from "./SKUItem/SKUItem";
interface ISKUCard {
  title: string;
  products: IProduct[];
}
const SKUCard = ({ title, products }: ISKUCard) => {
  return (
    <div className={classes.container}>
      <BaseCard title={title} titleStyle={classes.title}>
        <div className={classes.items}>
          {products.map((product) => (
            <SKUItem product={product} />
          ))}
        </div>
      </BaseCard>
    </div>
  );
};

export default SKUCard;
