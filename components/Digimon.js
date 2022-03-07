import React from "react";
import Image from "next/image";

function Digimon(props) {
  const { digi, idx } = props;

  const getBackgroundColor = (level) => {
    let bg = "";
    switch (level) {
      case "Rookie":
        bg = "bg-rookie";
        break;

      case "In Training":
        bg = "bg-intraining";
        break;
      case "Champion":
        bg = "bg-champion";
        break;
      case "Ultimate":
        bg = "bg-ultimate";
        break;
      case "Mega":
        bg = "bg-mega";
        break;
      default:

      // return "bg-[#FE5F7F]";
    }

    return bg;
  };

  return (
    <div
      className="text-white bg-[#1D204B] rounded-3xl drop-shadow-2xl max-w-xs p-8 mx-auto relative group "
      key={idx}
    >
      <div
        className={
          ` absolute top-0 left-0 right-0 rounded-t-3xl h-10 ` +
          getBackgroundColor(digi.level)
        }
      />
      <div className="bg-[#1D204B] absolute top-6 left-0 right-0 rounded-t-3xl h-8" />
      <div className="flex justify-center mt-6 group-hover:animate-shake">
        <Image
          src={digi.img}
          alt="Pokemon"
          className="my-auto max-h-52 rounded-3xl "
          // layout="responsive"
          width={250}
          height={208}
          // style={{ width: "250px" }}
        />
      </div>

      <h3 className="relative mt-2 text-2xl font-bold text-center ">
        <span
          className={
            // getBackgroundColor(digi.level) +
            ` before:content-[" "] before:block before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:inset-0 before:-z-10 before:scale-x-0 
          group-hover:before:scale-x-100 before:ease-linear before:transition-transform before:origin-right group-hover:before:origin-left before:duration-300 before:bg-purple-600`
          }
        >
          {digi.name}
        </span>
      </h3>
      <h3 className="text-center ">{digi.level}</h3>
    </div>
  );
}

export default Digimon;
