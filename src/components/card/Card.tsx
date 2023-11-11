import { FC } from "react";
import clxs from "clsx";
import style from "./Card.module.sass";

export interface ICardProps {
  children?: React.ReactNode;
  color?: "yellow" | "cian" | "white";
}

export const Card: FC<ICardProps> = ({ children, color = "white" }) => {
  const cardListCl = clxs("card-list", style.cardList);

  return (
    <div className="card bg-white p-8 rounded-[18px]">
      <div className="heading text-3xl font-bold mb-4">Needs</div>

      <div className="card-content">
        <ol className={cardListCl} type="1">
          <li>Sustainable and eco-friendly choices </li>
          <li>High-quality wooden windows </li>
          <li>Energy-efficient windows </li>
          <li>Natural and rustic aesthetic </li>
          <li>Customizable options </li>
          <li>Excellent customer service </li>
        </ol>
      </div>
    </div>
  );
};
