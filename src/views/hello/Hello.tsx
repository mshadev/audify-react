import { Bento } from "components/bento/Bento";
import { Button } from "components/button/Button";
import Heading from "components/heading/Heading";
import { Input } from "components/input/Input";
import { useState } from "react";

export default function Hello() {
  const [productDescription, setProductDescription] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="container lx:px-32 max-w-5xl pt-8 mx-auto">
        <div className="my-20 text-center">
          <Heading />
        </div>

        <div className="flex gap-4 grow">
          <Input />
          <Button>Get Insight</Button>
        </div>

        <div className="my-20">
          <Bento />
        </div>
      </div>
    </>
  );
}
