import { TwitterWidjet } from "components/TwitterWidjet/TwitterWidjet";
import { ReactComponent as XLogoSvg } from "assets/svg/xlogo.svg";
import clxs from "clsx";
import style from "./Footer.module.sass";

export const Footer = () => {
  return (
    <footer className={clxs("w-full", style.container)}>
      <div className="container max-w-5xl pt-20 pb-20 mx-auto flex grow gap-20">
        <div className="text-white font-thin text-4xl text- ">
          <span>
            I'd love to hear your thoughts on this product! Feel free to drop me
            a message at
          </span>
          <span className={clxs(style.xlogo)}>
            <XLogoSvg fill="white" />
          </span>
        </div>

        <TwitterWidjet />
      </div>
    </footer>
  );
};
