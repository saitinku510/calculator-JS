import React, { useState, useContext } from "react";
import "./style.css";
import Logo from "../../assets/images/instaPlayLogo.svg";
import Search from "../../assets/images/search.svg";
import axios from "axios";
import { Mycontext } from "../context";


function Header(props) {
  const { setMovies } = useContext(Mycontext);

  const [search, setSearch] = useState("");
  // const [results, setResults] = useState([]);

  async function fetchdata() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=54848c6cfecb51d98584e9df33e167f3&language=en-US&query=${search}&page=1&include_adult=false`
    );
    setMovies(response.data.results);
  }

  const searchHandle = () => {
    // props.dataF(search) 
    fetchdata();
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <img src={Logo} />
            <div className="headerSearch">
              <input
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search Movies"
              />
              <button onClick={searchHandle}>
                <img src={Search} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
