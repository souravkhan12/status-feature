import { JSX, useState } from "react";
import Modal from "./Modal";
import useLocalstorage from "./useLocalstorage";
import Circle from "./circle";

function App(): JSX.Element {
  const [st, setSt] = useState(false);
  const [images] = useLocalstorage({ value: [""], key: "image" });

  function handleClick() {
    setSt(!st);
  }

  return (
    <div className="p-5 flex gap-2">
      <Circle onClick={handleClick} value="+" img="" />
      {images.length &&
        images.map((image, index) => <Circle img={image} key={index} />)}
      {st ? <Modal /> : ""}
    </div>
  );
}

export default App;
