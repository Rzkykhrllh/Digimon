import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import Digimon from "../../components/Digimon";
import Filter from "../../components/Filter";

import Loading from "../../assets/loading.gif";
import waifu from "../../assets/waifu.jpg";

import digiaxios from "../../api";
import { GET_DIGIMON } from "../../api";

import { useRouter } from "next/router";

function Fetch() {
  const [digi, setdigi] = useState([]);

  const router = useRouter();
  useEffect(() => {
    if (router.query?.level !== undefined) {
      setfilter(toTitleCase(router.query?.level));
    }
  }, [router.query]);

  const [filter, setfilter] = useState("All");

  const [isLoading, setIsLoading] = useState(false);

  const onSelectFilter = (filterName) => {
    setfilter(filterName);
  };

  const fetchDigimon = async () => {
    const res = await GET_DIGIMON(filter);
    // console.log(res)

    return res.status == 200 ? res.data : [];
  };

  useEffect(async () => {
    setIsLoading(true);
    const fetchedDigimon = await fetchDigimon();

    setdigi(fetchedDigimon);
    setIsLoading(false);
  }, [filter]);

  return (
    <Layout pageTitle="Fetch Page">
      <Filter onSelectFilter={onSelectFilter} filter={filter} />

      {!isLoading && (
        <div className="grid grid-cols-4 m-4 gap-x-4 gap-y-8">
          {digi.map((item, idx) => (
            <>
              <Digimon digi={item} idx={idx} />
            </>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="absolute top-0 left-0 z-50 flex w-screen min-h-screen bg-black bg-opacity-80">
          <div className="mx-auto my-auto ">
            <img src="/loading.gif" alt="" style={{ width: "50px" }} />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Fetch;

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
