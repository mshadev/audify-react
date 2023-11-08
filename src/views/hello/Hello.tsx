import Heading from "components/heading/Heading";
import { useState } from "react";

export default function Hello() {
  const [productDescription, setProductDescription] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="grid gap-4">
        <div className="column-12">
          <Heading />
        </div>

        <div className="column-12 justify-center ">
          <div className={"pt-10"}></div>
        </div>

        <div className="column-12">
          <div className="pt-6"></div>
        </div>
      </div>
    </>
  );
}
