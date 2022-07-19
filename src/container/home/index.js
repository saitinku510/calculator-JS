import React, { useEffect, useState, useContext } from "react";
import "./home.css";
import "../../styles/common.css";
import api from "../../constant";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Movies from "../../components/movies";
import axios from "axios";
import PageNation from "../../components/pageNation";
import { Mycontext } from "../../components/context";

function Home(props) {

  async function dataF(search) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=54848c6cfecb51d98584e9df33e167f3&language=en-US&query=${search}&page=1&include_adult=false`
    );
    setMovies(response.data.results)
  }

  const popularMovies = api.popularmovies;
  const [movies, setMovies] = useState([]);
  // const { movies, setMovies } = useContext(Mycontext);

  useEffect(() => {
    async function getmoviedata() {
      const response = await axios.get(popularMovies);
      setMovies(response.data.results);
    }
    getmoviedata();
  }, [popularMovies]);

  return (
    <div>
      <Header dataF={dataF}/>
      <Banner />
      <div>
        <section className="home">
          <div className="container">
            <h1>Trending</h1>
            <div className="movies">
              {movies.map((movie) => (
                <Movies {...movie} key={movie.id} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <PageNation />
    </div>
  );
}

export default Home;
