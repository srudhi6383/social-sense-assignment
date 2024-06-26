import { Button } from "../components/Ui/button";
import Frame1 from "./frame1/page";
import Frame2 from "./frame2/page";

export default function Home() {
  return (
    <>
      {}
      {}
      <div className="w-full h-screen flex justify-center items-center gap-50">
      <a href="./frame1">
        <Button>Frame1</Button>
      </a>
      <a href="./frame2">
        <Button>Frame2</Button>
      </a>
      </div>
    </>
  );
}
