import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import arrow from "../../assets/images/leftArrow.svg";
import Header from "../header";
import axios from "axios";
import api from "../../constant";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Mycontext } from "../context";

import { useParams } from "react-router-dom";

const Moviedetail = ({ key }) => {
  const { id } = useParams();
  const imgUrl = api.ImgUrl;
  const [moviesdet, setMoviesdet] = useState([]);
  const [video, setVideo] = useState([]);
  const [active, setActive] = useState("");
  const { none, setNone } = useContext(Mycontext);
  const { noneMovie, setNoneMovie } = useContext(Mycontext);

  useEffect(() => {
    async function detailedMovie() {
      const respo = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=54848c6cfecb51d98584e9df33e167f3&language=en-US`
      );
      setMoviesdet(respo.data);
      setTimeout(() => {
        setNoneMovie("");
      }, 2000);
      return respo.data;
    }

    async function movieVideo() {
      const vid = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=54848c6cfecb51d98584e9df33e167f3&language=en-US`
      );
      const arr = vid.data.results;
      arr.map((t, i) => {
        if (t.type === "Trailer") {
          setVideo(t.key);
        }
      });
    }
    detailedMovie();
    movieVideo();

    const handleLoad = () => {
      var set = setTimeout(() => {
        setNone("none");
      }, 2000);
      return () => clearTimeout(set);
    };
    handleLoad();
  }, [id]);
  // console.log(none, noneMovie)

  const handleAddClass = () => {
    setActive("active");
  };

  const handleRemoveClass = () => {
    setActive("");
  };

  return (
    <>
      <Header page={"movie"}/>
      <section className={none}>
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      </section>
      <section
        className={`detailMovie ${noneMovie}`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url(${imgUrl}${moviesdet.backdrop_path})`,
        }}
      >
        <div className="container">
          <div className="movieDetails">
            <div className="movieContent">
              <button>
                <Link to={`/Home`}>
                  <img src={arrow} />
                </Link>
              </button>
              <h1>{moviesdet.original_title}</h1>
              <p>Rating: {moviesdet.vote_average} / 10</p>
              <h4>{moviesdet.overview}</h4>
              <h5>Release Date {moviesdet.release_date}</h5>
              <p>Orginal Language : {moviesdet.original_language}</p>
              <button className="pop" onClick={handleAddClass}>
                Watch Trailer{" "}
              </button>
            </div>
            <div className="movieImage">
              <img src={`${imgUrl}${moviesdet.poster_path}`} />
            </div>
          </div>
        </div>
      </section>

      <div className={`movie ${active}`}>
        <div className="movieVidContent">
          <button onClick={handleRemoveClass}>X</button>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${video}`} />
        </div>
      </div>
    </>
  );
};

export default Moviedetail;
