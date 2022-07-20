import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import arrow from "../../assets/images/leftArrow.svg";
import movie from "../../assets/images/detailMovie.svg";
import Header from "../header";
import axios from "axios";
import api from "../../constant";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const Moviedetail = () => {
  const { id } = useParams();
  const imgUrl = api.ImgUrl;
  const [moviesdet, setMoviesdet] = useState([]);

  useEffect(() => {
    async function detailedMovie() {
      const respo = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=54848c6cfecb51d98584e9df33e167f3&language=en-US`
      );
      setMoviesdet(respo.data);
      console.log(respo.data);
      return respo.data;
    }
    detailedMovie();
  }, []);
  console.log(moviesdet);

  return (
    <>
      <Header />
      <section
        className="detailMovie"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url(${imgUrl}${moviesdet.backdrop_path})`,
        }}
      >
        <div className="container">
          <div className="movieDetails">
            <div className="movieContent">
              <button>
                <Link to={`/`} ><img src={arrow} /></Link>
              </button>
              <h1>{moviesdet.original_title}</h1>
              <p>Rating: {moviesdet.vote_average} / 10</p>
              <h4>{moviesdet.overview}</h4>
              <h5>Release Date {moviesdet.release_date}</h5>
              <p>Orginal Language : {moviesdet.original_language}</p>
            </div>
            <div className="movieImage">
              <img src={`${imgUrl}${moviesdet.poster_path}`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Moviedetail;
