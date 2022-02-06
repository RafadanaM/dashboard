import { IProduct } from "../../../../data";
import classes from "./SKUItem.module.css";
interface ISKUItem {
  product: IProduct;
}
const SKUItem = ({ product }: ISKUItem) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={product.img} alt="product" />
      </div>
      <div className={classes.detail}>
        <span className={classes.name}>{product.name}</span>
        <div className={classes.amountContainer}>
          <span>Rp {product.price}</span>
          <span>{product.sold}</span>
        </div>
      </div>
    </div>
  );
};

export default SKUItem;
