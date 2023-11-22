import { FC } from "react";
import clxs from "clsx";
import style from "./Card.module.sass";

export interface ICardProps {
  children?: React.ReactNode;
  color?: "yellow" | "cian" | "white";
  title?: string;
  items?: string[];
}

export const Card: FC<ICardProps> = ({
  children,
  color = "white",
  items,
  title,
}) => {
  const cardListCl = clxs("card-list", style.cardList);
  const cardContainer = clxs(
    style[`color-${color}`],
    "card",
    "bg-white",
    "p-8",
    "rounded-[18px]"
  );

  return (
    <div className={cardContainer}>
      <div className="heading text-3xl font-bold">{title}</div>

      {items && (
        <div className="card-content mt-4">
          <ol className={cardListCl} type="1">
            {items?.map((item) => (
              <>{item}</>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};
