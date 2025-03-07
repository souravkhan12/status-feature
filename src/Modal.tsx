import { useState } from "react";
import useLocalstorage from "./useLocalstorage";

export default function Modal() {
  const [base64, setBase64] = useState<string>("");
  const [, setImages] = useLocalstorage({ value: [], key: "image" });

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        if (e.target && typeof e.target.result === "string") {
          setBase64(e.target.result);
        }
      };
    }
  };

  return (
    <div className="w-[100px] h-[100px] flex  flex-col justify-center">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <img src={base64} alt="Uploaded" />
      <button
        type="submit"
        onClick={() => {
          if (base64) {
            setImages((prevImages) => [...prevImages, base64]);
          }
        }}
      >
        submit
      </button>
    </div>
  );
}
