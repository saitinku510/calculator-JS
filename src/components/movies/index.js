import React, { useContext, useState } from "react";
import axios from "axios";
import "./style.css";
import api from "../../constant";
import Star from "../../assets/images/Star.svg";
import Play from "../../assets/images/play.svg";
import { Link } from "react-router-dom";
import { Mycontext } from "../context";

const Movies = ({ title, id, vote_average, poster_path }) => {
  const { movies } = useContext(Mycontext);
  const imgUrl = api.ImgUrl;


  return (
    <>
      <Link to={`/MovieDetail/${id}`}>
        <div className="movieCard" id={id}>
          <img src={`${imgUrl}${poster_path}`} alt={title} />
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
