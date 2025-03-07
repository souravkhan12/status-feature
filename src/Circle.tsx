import { useState } from "react";

interface circleData {
  onClick?: () => void;
  value?: string;
  img: string;
}

export default function Circle({ onClick, value, img = "" }: circleData) {
  const [isImage, setIsImage] = useState(false);
  let isAdd: boolean = false;
  if (value !== undefined) {
    isAdd = true;
  }

  function handleImage() {
    setIsImage(!isImage);
  }
  return (
    <div
      className="rounded-full flex justify-center items-center h-[50px] w-[50px] bg-slate-300 "
      onClick={isAdd ? onClick : handleImage}
    >
      {isImage ? img ? <img className="" src={img} /> : "" : ""}
      {value}
    </div>
  );
}
