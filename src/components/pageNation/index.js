import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Mycontext } from "../../components/context";

function PageNation() {
  const { setMovies } = useContext(Mycontext);
  const [page, setPage] = useState();

  const handlePage = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=54848c6cfecb51d98584e9df33e167f3&page=${page}`
    );
    setMovies(resp.data.results)
    console.log(resp.data.page);
  };

  const changeNum = (e) => {
    setPage(e.target.value);
    console.log(e.target.value);
    handlePage();
  };

  return (
    <section>
      <div className="container">
        <div className="pageNation">
          <button onClick={changeNum} value="1">
            1
          </button>
          <button onClick={changeNum} value="2">
            2
          </button>
          <button onClick={changeNum} value="3">
            3
          </button>
          <button onClick={changeNum} value="4">
            4
          </button>
          <button onClick={changeNum} value="5">
            5
          </button>
          <button onClick={changeNum} value="6">
            6
          </button>
        </div>
      </div>
    </section>
  );
}

export default PageNation;
