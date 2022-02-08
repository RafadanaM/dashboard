import { ReactNode } from "react";
import classes from "./BaseCard.module.css";
import { ReactComponent as More } from "../../../assets/images/More.svg";
interface IBaseCard {
  children: ReactNode;
  title: string;
  titleStyle?: string | undefined;
  items?: ReactNode[];
}

const BaseCard = ({ children, title, titleStyle, items }: IBaseCard) => {
  const Items = () => {
    return (
      <>{items && items.map((item, idx) => <div key={idx}>{item}</div>)}</>
    );
  };
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <span className={titleStyle || ""}>{title}</span>
        <div className={classes.moreContainer}>
          <Items />
          <More className={classes.more} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default BaseCard;
