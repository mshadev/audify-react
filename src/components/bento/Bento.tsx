import { bentoItems } from "config/bento";
import { BentoCard } from "./BentoCard";

export const Bento = () => {
  return (
    <div className="grid grid-flow-dense grid-cols-4 gap-6 cursor-pointer">
      {bentoItems.map((item, i) => (
        <BentoCard
          key={i}
          className={item.class}
          emoji={item.emoji}
          title={item.title}
        />
      ))}
    </div>
  );
};
