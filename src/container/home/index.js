import React, { useEffect, useState, useContext } from "react";
import "./home.css";
import "../../styles/common.css";
import api from "../../constant";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Movies from "../../components/movies";
import Star from "../../assets/images/Star.svg";
import axios from "axios";
import PageNation from "../../components/pageNation";
import { Mycontext } from "../../components/context";

function Home() {
  const popularMovies = api.popularmovies;
  const { movies, setMovies } = useContext(Mycontext);
  const [active, setActive] = useState(false);

  useEffect(() => {
    async function getmoviedata() {
      const response = await axios.get(popularMovies);
      setMovies(response.data.results);
    }
    getmoviedata();
  }, [popularMovies]);

  const voteAveLow = () => {
    const vote = [...movies];
    vote.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setMovies(vote);
  };

  const voteAveHigh = () => {
    const vote = [...movies];
    vote.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setMovies(vote);
  };

  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <div>
      <Header />
      <Banner />
      <div>
        <section className="home">
          <div className="container">
            <div className="heading">
              <h1>Trending</h1>
              <div className={active ? "active" : null} onClick={toggleClass}>
                <button style={
                  {
                    display:'flex',
                    alignItems : 'center',
                    gap:'10px'
                  }
                }>Filter by rating <img src={Star} /></button>
                <div className="rating">
                  <button onClick={voteAveHigh}>High to Low</button>
                  <button onClick={voteAveLow}>Low to High</button>
                </div>
              </div>
            </div>
            <div className="movies">
              {movies.map((movie, i) => (
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
