import Image from "next/image";
import { useState } from "react";

function FirstPost() {
  const [angka, setangka] = useState(0);

  const tambah = () => {
    setangka(angka + 1);
  };

  return (
    <>
      <div className="container flex justify-center gap-x-5 bg-[#FFE84A] py-2 outline-[#52C2FF] outline outline-4">
        <a>Home</a>
        <a>All page</a>
        <a>Fetch Page</a>
        <Image src="/koromon.jpg" alt="me" width="64" height="64" />
      </div>
    </>
  );
}

export default FirstPost;
