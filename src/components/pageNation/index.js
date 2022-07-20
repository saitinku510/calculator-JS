import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Mycontext } from "../../components/context";
import ReactPaginate from "react-paginate";
function PageNation() {
  const { setMovies } = useContext(Mycontext);
  const [page, setPage] = useState();

  useEffect(() => {
    const handlePage = async () => {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=54848c6cfecb51d98584e9df33e167f3&page=${page}`
      );
      setMovies(resp.data.results);
    };
    handlePage()
  }, [page])

  return (
    <section>
      <div className="container">
        <div className="pageNation">
          <button
            onClick={() => {
              setPage(1);
            }}
            value="1"
          >
            1
          </button>
          <button
            onClick={() => {
              setPage(2);
            }}
            value="2"
          >
            2
          </button>
          <button
            onClick={() => {
              setPage(3);
            }}
            value="3"
          >
            3
          </button>
          <button
            onClick={() => {
              setPage(4);
            }}
            value="4"
          >
            4
          </button>
          <button
            onClick={() => {
              setPage(5);
            }}
            value="5"
          >
            5
          </button>
          <button
            onClick={() => {
              setPage(6);
            }}
            value="6"
          >
            6
          </button>
        </div>
      </div>
    </section>
  );
}

export default PageNation;
