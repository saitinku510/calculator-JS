import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import api from "../../constant";
import Got from "../../assets/images/gameOfThrones.svg";
import Star from "../../assets/images/Star.svg";
import Play from "../../assets/images/play.svg";

const Movies = ({
  title,
  vote_average,
  poster_path,
}) => {
  const imgUrl = api.ImgUrl;
  return (
    <>
      <div className="movieCard">
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
    </>
  );
};
export default Movies;
