import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import api from "../../constant";
import Star from "../../assets/images/Star.svg";
import Play from "../../assets/images/play.svg";
import { Link } from "react-router-dom";
import { Mycontext } from "../context";
import ReactPlayer from "react-player";

const Movies = ({ title, id, vote_average, poster_path }) => {
  const { movies } = useContext(Mycontext);
  const imgUrl = api.ImgUrl;
  const [video, setVideo] = useState([]);

  const hoverEffect = () => {
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
    movieVideo();
  };
  const hoverLeft = () => {
    setVideo("");
  };

  return (
    <>
      <Link
        to={`/MovieDetail/${id}`}
        onMouseEnter={hoverEffect}
        onMouseLeave={hoverLeft}
      >
        <div className="movieCard" id={id}>
          <img src={`${imgUrl}${poster_path}`} alt={title} />
          <div className="vidplay">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video}`}
              width="280px"
              playing={true}
              muted
            />
          </div>
          <div className="movieCardTitle">
            <div className="movieCardContent">
              <h2>{title}</h2>
              <p>
                <img src={Star} /> {vote_average} / 10
              </p>
            </div>
            <img src={Play} />
          </div>
        </div>
      </Link>
    </>
  );
};
export default Movies;
