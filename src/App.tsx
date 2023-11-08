import { Input } from "components/input/Input";
import { Button } from "components/button/Button";
import Heading from "components/heading/Heading";
import { Bento } from "components/bento/Bento";

export default function App() {
  const onChange = () => {};

  return (
    <div className="bg-black h-full">
      <div className="container lx:px-32 max-w-5xl py-24 mx-auto">
        <div className="flex gap-4 grow">
          <Input />
          <Button>Get Insight</Button>
        </div>

        <div className="my-20 text-center">
          <Heading />
        </div>

        <div className="my-20">
          <Bento />
        </div>
      </div>
    </div>
  );
}
