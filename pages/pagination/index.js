import { useEffect, useState } from "react";
import Digimon from "../../components/Digimon";
import Filter from "../../components/Filter";
import Layout from "../../components/Layout";

function Pagination({ digi }) {
  const [filter, setfilter] = useState("All");

  const onSelectFilter = (filterName) => {
    setfilter(filterName);
  };

  const [totalDigimon, settotalDigimon] = useState(digi.length);
  const [currentPage, setcurrentPage] = useState(1);
  const [digimonPerPage, setdigimonPerPage] = useState(12);

  useEffect(() => {
    console.log(totalDigimon);
  }, [totalDigimon]);

  // Logic for displaying current todos
  const indexOfLastTodo = currentPage * digimonPerPage;
  const indexOfFirstTodo = indexOfLastTodo - digimonPerPage;
  const currentDigi = digi.slice(indexOfFirstTodo, indexOfLastTodo);
  const totalPage = Math.ceil(totalDigimon / digimonPerPage);

  //   useEffect(() => {
  //     console.log(currentDigi);
  //   }, [currentDigi]);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  const handleClickPageNumber = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  return (
    <Layout pageTitle="Pagination Page">
      {/* start of Filter */}
      {/* <Filter onSelectFilter={onSelectFilter} /> */}
      {/* End of filter */}

      {/* Pokemon */}
      <div className="grid grid-cols-4 gap-4 m-4">
        {currentDigi
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

      {/* Pagination */}
      <div className="">
        <div className="flex  justify-center rounded-lg font-[Poppins]">
          <button
            onClick={() => {
              let back = currentPage - 1;
              setcurrentPage(back > 0 ? back : 1);
            }}
            className="h-12 px-4 bg-white border-2 border-r-0 border-indigo-600 rounded-l-lg hover:bg-indigo-600 hover:text-white"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
            </svg>
          </button>
          {pageNumbers.map((item, i) => (
            <button
              key={i}
              onClick={() => setcurrentPage(item)}
              className={`h-12 border-2 border-r-0 border-indigo-600 bg-white hover:bg-indigo-300
               w-12 ${currentPage === item && "bg-indigo-600 text-white"}`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => {
              let next = currentPage + 1;
              console.log(next, " ", currentPage);
              setcurrentPage(next < totalPage ? next : totalPage);
            }}
            className="h-12 px-4 bg-white border-2 border-indigo-600 rounded-r-lg hover:bg-indigo-600 hover:text-white"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
            </svg>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Pagination;

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
