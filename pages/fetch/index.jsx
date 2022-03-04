import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import Digimon from "../../components/Digimon";
import Filter from "../../components/Filter";

import digiaxios from "../../api";
import { GET_DIGIMON } from "../../api";


function fetch() {

  const [digi, setdigi] = useState([])
  const [filter, setfilter] = useState("All");


  const onSelectFilter = (filterName) => {
    setfilter(filterName);
  };

  const fetchDigimon = async () => {
    console.log("hallo dunia")
        
    const res = await GET_DIGIMON(filter)
    console.log(res)


    return res.status == 200 ? res.data : []
  }

  useEffect( async() => {
    const fetchedDigimon = await fetchDigimon()

    setdigi(fetchedDigimon)
    
  }, [filter])
  
  
  return (
    <Layout pageTitle="Fetch Page">
      <Filter onSelectFilter={onSelectFilter} />

      <div className="grid grid-cols-4 gap-4 m-4">
        {digi.map((item, idx) => (
            <>
              <Digimon digi={item} idx={idx} />
            </>
          ))}
      </div>
    </Layout>
  );
}

export default fetch;
