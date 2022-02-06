import { ReactNode } from "react";
import classes from "./BaseCard.module.css";
import { ReactComponent as More } from "../../../assets/images/More.svg";
interface IBaseCard {
  children: ReactNode;
  title: string;
  titleStyle?: string | undefined;
}

const BaseCard = ({ children, title, titleStyle }: IBaseCard) => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <span className={titleStyle || ""}>{title}</span>
        <More className={classes.more} />
      </div>
      {children}
    </div>
  );
};

export default BaseCard;
