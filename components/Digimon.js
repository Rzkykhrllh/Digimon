import React from "react";
import Image from "next/image";

function Digimon(props) {
  const { digi, idx } = props;

  return (
    <div
      className="text-black bg-white border-2 rounded-xl drop-shadow-2xl"
      key={idx}
    >
      <Image
        src={digi.img}
        alt="Pokemon"
        className="my-auto max-h-52"
        // layout="responsive"
        width={250}
        height={208}
        // style={{ width: "250px" }}
      />

      <h3 className="text-center">{digi.name}</h3>
      <h3 className="mt-2 text-center">{digi.level}</h3>

      <div className="mt-2 mb-3">
        <h3 className="mb-2 text-2xl font-bold " style={{ color: "#202024" }}>
          {digi.name}
        </h3>
        <div id={idx + "tag"} className="flex flex-row justify-center gap-x-3">
          {/* {tag.map((pokeTag, idx) => (
                  <Tag pokeTag={toTitles(pokeTag.type.name)} key={idx} />
                ))} */}
        </div>
      </div>
    </div>
  );
}

export default Digimon;
