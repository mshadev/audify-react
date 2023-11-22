import { ReactComponent as ArrowSVG } from "assets/svg/arrow-left.svg";
import { Card } from "components/card/Card";
import { useEffect } from "react";

export const ResultView = () => {
  return (
    <>
      <div className="container max-w-5xl pt-20 mx-auto">
        <header className="header flex flex-col gap-8">
          <div className="header-btn flex gap-6 items-center cursor-pointer">
            <div className="back">
              <ArrowSVG />
            </div>
            <div className="text-white font-bold text-6xl">Solopreneurs</div>
          </div>

          <div className="heading-description text-white text-3xl">
            This audience contains homeowners who prioritize sustainability and
            eco-friendliness in their homes and are looking for wooden windows
            that align with their values.
          </div>
        </header>
      </div>

      <div className="container max-w-5xl mx-auto cards mt-16 gap-12 flex flex-col"></div>
    </>
  );
};
