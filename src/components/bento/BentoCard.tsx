import { FC, useState } from "react";

export interface IBentoCardProps {
  className: string;
  emoji: {
    static: string;
    animated: string;
  };
  title: string;
  description?: string;
}

export const BentoCard: FC<IBentoCardProps> = ({
  emoji,
  className,
  title,
  description,
}) => {
  const [isHover, setHover] = useState(false);
  const onHover = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  return (
    <>
      <div
        onMouseEnter={onHover}
        onMouseLeave={onMouseLeave}
        className={`row-span-1 rounded-xl p-6 bg-neutral-100 dark:bg-neutral-900 ${className}`}
      >
        <div className="w-full justify-between flex flex-col">
          <img
            className="w-[60px]"
            src={isHover ? emoji.animated : emoji.static}
            alt=""
          />
          <span className="mt-6 flex text-white font-bold text-2xl">
            {title}
          </span>
        </div>
      </div>
    </>
  );
};
