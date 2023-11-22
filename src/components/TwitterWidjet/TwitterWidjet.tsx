import { FC } from "react";
import style from "./TwitterWidjet.module.sass";
import { ReactComponent as MarkSVG } from "assets/svg/mark.svg";
import AvatarPNG from "assets/png/twitter-avatar.jpg";

export interface ITwitterWidjet {
  children?: React.ReactNode;
}

export const TwitterWidjet: FC<ITwitterWidjet> = ({ children }) => {
  return (
    <div className={style.container}>
      <div className="twitter-avatar rounded-full overflow-auto h-[100px] w-[100px] ">
        <img src={AvatarPNG} alt="" />
      </div>

      <div className="twitter-meta flex flex-col gap-1">
        <div className="twitter-header flex items-center gap-2 w-[240px]">
          <div className="twitter-title text-white text-2xl">
            Misha Inozemtsev
          </div>
          <div className="twitter-mark w-[20px] h-[20px]">
            <MarkSVG />
          </div>
        </div>

        <div className="twitter-handler text-white text-opacity-30 font-light">
          @devprodct
        </div>

        <div className="twitter-description flex flex-col text-white gap-2 mt-4">
          <span>Indie maker</span>
          <span>Creator of Drukar</span>
        </div>
      </div>
    </div>
  );
};
