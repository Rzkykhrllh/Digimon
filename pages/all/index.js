import Image from "next/image";
import { useEffect, useState } from "react";
import Digimon from "../../components/Digimon";
import Filter from "../../components/Filter";
import Layout from "../../components/Layout";

function All({ digi }) {
  const [filter, setfilter] = useState("All");

  const onSelectFilter = (filterName) => {
    setfilter(filterName);
  };

  // console.log(digi);

  return (
    <Layout pageTitle="All Page">
      {/* start of Filter */}
      <Filter onSelectFilter={onSelectFilter} />
      {/* End of filter */}

      <div className="grid grid-cols-4 gap-4 m-4">
        {digi
          .filter((item) => {
            if (item.level === filter && filter !== "All") {
              return item;
            } else if (filter === "All") return item;
          })
          .map((item, idx) => (
            <>
              <Digimon digi={item} idx={idx} />
            </>
          ))}
      </div>
    </Layout>
  );
}

export default All;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://digimon-api.vercel.app/api/digimon");
  const digi = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      digi,
    },
  };
}
