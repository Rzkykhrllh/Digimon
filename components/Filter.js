import React from "react";

function Filter(props) {
  const { onSelectFilter } = props;

  return (
    <div className="flex justify-center max-w-md mx-auto bg-white gap-x-3">
      <p
        className="cursor-pointer hover:text-green-200"
        onClick={() => onSelectFilter("All")}
      >
        All
      </p>
      <p
        className="cursor-pointer hover:text-green-200"
        onClick={() => onSelectFilter("Rookie")}
      >
        Rookie
      </p>
      <p
        className="cursor-pointer hover:text-green-200"
        onClick={() => onSelectFilter("In Training")}
      >
        In Training
      </p>
      <p
        className="cursor-pointer hover:text-green-200"
        onClick={() => onSelectFilter("Champion")}
      >
        Champion
      </p>
      <p
        className="cursor-pointer hover:text-green-200"
        onClick={() => onSelectFilter("Ultimate")}
      >
        Ultimate
      </p>
    </div>
  );
}

export default Filter;
