import { Input } from "components/input/Input";
import { Button } from "components/button/Button";
import Heading from "components/heading/Heading";
import { Bento } from "components/bento/Bento";
import Hello from "views/hello/Hello";
import { ResultView } from "views/result/Result";

export default function App() {
  const onChange = () => {};

  return (
    <div className="bg-black h-full">
      <ResultView />
    </div>
  );
}
