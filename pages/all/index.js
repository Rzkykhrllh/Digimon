import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

function all({ digi }) {
  // const [digi, setDigi] = useState([]);
  // const { digi } = props;

  console.log(digi);

  return (
    <Layout pageTitle="All Page">
      <p>Ini Halaman All Digimon</p>

      <div className="grid grid-cols-4 gap-4 m-4">
        {digi
          .filter((item) => {
            if (item.level == "Champion") return item;
          })
          .map((item, idx) => (
            <>
              {idx < 20 ? (
                <div
                  className="text-black bg-white border-2 rounded-xl drop-shadow-2xl"
                  key={idx}
                >
                  <Image
                    src={item.img}
                    alt="Pokemon"
                    className="my-auto max-h-52"
                    // layout="responsive"
                    width={250}
                    height={208}
                    // style={{ width: "250px" }}
                  />

                  <h3 className="text-center">{item.name}</h3>
                  <h3 className="mt-2 text-center">{item.level}</h3>

                  <div className="mt-2 mb-3">
                    <h3
                      className="mb-2 text-2xl font-bold "
                      style={{ color: "#202024" }}
                    >
                      {digi.name}
                    </h3>
                    <div
                      id={idx + "tag"}
                      className="flex flex-row justify-center gap-x-3"
                    >
                      {/* {tag.map((pokeTag, idx) => (
                  <Tag pokeTag={toTitles(pokeTag.type.name)} key={idx} />
                ))} */}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          ))}
      </div>
    </Layout>
  );
}

export default all;

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
