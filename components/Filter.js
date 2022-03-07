import React, { useState, useEffect } from "react";

function Filter(props) {
  const { onSelectFilter, filter } = props;

  const [activeFilter, setActiveFilter] = useState();

  const level = ["All", "Rookie", "In Training", "Champion", "Ultimate"];

  useEffect(() => {
    if (filter == undefined) setActiveFilter("All");
    else setActiveFilter(filter);
  }, [filter]);

  return (
    <div className="flex justify-center px-16 py-8 mx-auto text-white gap-x-3">
      {level.map((item, idx) => (
        <p
          key={idx}
          className={
            (item !== activeFilter
              ? "bg-opacity-5 "
              : "bg-opacity-30 font-bold") +
            ` px-4 py-2 bg-white cursor-pointer rounded-xl hover:bg-gray-600 hover:bg-opacity-10`
          }
          onClick={() => {
            setActiveFilter(item);
            onSelectFilter(item);
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default Filter;
