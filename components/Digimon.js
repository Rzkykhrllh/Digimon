import React from "react";
import Image from "next/image";

function Digimon(props) {
  const { digi, idx } = props;

  const getBackgroundColor = (level) => {
    switch (level) {
      case "Rookie":
        return "bg-[#FE5F7F]";

        break;
      case "In Training":
        return "bg-[#56C2E6]";
        break;
      case "Champion":
        return "bg-[#F1C75B]";
        break;
      case "Ultimate":
        return "bg-[#FF8B64]";
        break;
      default:
      // return "bg-[#FE5F7F]";
    }
  };

  return (
    <div
      className="text-white bg-[#1D204B] rounded-3xl drop-shadow-2xl max-w-xs p-8 mx-auto relative"
      key={idx}
    >
      <div
        className={
          ` absolute top-0 left-0 right-0 rounded-t-3xl h-10 ` +
          getBackgroundColor(digi.level)
        }
      />
      <div className="bg-[#1D204B] absolute top-6 left-0 right-0 rounded-t-3xl h-8" />
      <div className="flex justify-center mt-6">
        <Image
          src={digi.img}
          alt="Pokemon"
          className="my-auto max-h-52 rounded-3xl"
          // layout="responsive"
          width={250}
          height={208}
          // style={{ width: "250px" }}
        />
      </div>

      <h3 className="mt-2 text-2xl font-bold text-center">{digi.name}</h3>
      <h3 className="text-center ">{digi.level}</h3>
    </div>
  );
}

export default Digimon;
