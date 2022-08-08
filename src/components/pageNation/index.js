import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Mycontext } from "../../components/context";
import ReactPaginate from "react-paginate";

function PageNation() {
  const { setMovies } = useContext(Mycontext);
  const [page, setPage] = useState([]);
  const [pagecount, setPagecount] = useState(0);

  useEffect(() => {
    const handlePage = async () => {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=54848c6cfecb51d98584e9df33e167f3&page=${page}`
      );
      let total = resp.data.total_results;
      total = 10000;
      setPagecount(total / 20);
      setMovies(resp.data.results);
    };
    handlePage();
  }, [page]);

  const handlePageClick = (p) => {
    setPage(p.selected + 1);
  };

  return (
    <>
      <section>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pagecount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
        />
      </section>
      {/* <section>
        <div className="container">
          <div className="pageNation">
            {page.map((i) => {})}
            <button
              onClick={() => {
                setPage(1);
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                setPage(2);
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                setPage(3);
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                setPage(4);
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                setPage(5);
              }}
            >
              5
            </button>
            <button
              onClick={() => {
                setPage(6);
              }}
            >
              6
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default PageNation;
