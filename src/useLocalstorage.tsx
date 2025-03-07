import { useEffect, useState } from "react";

interface pair {
  value: string[];
  key: string;
}

export default function useLocalstorage({ value, key }: pair) {
  const [images, setImages] = useState<string[]>(function getdata() {
    const item = localStorage.getItem(key);
    const data = item ? JSON.parse(item) : value;
    return data;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(images));
  }, [key, images]);

  return [images, setImages] as const;
}
