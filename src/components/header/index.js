import React, { useState, useContext } from "react";
import "./style.css";
import Logo from "../../assets/images/instaPlayLogo.svg";
import Search from "../../assets/images/search.svg";
import axios from "axios";
import { Mycontext } from "../context";
import { Link, useNavigate } from "react-router-dom";

function Header({ page }) {
  console.log(page);
  const { setMovies } = useContext(Mycontext);

  const [search, setSearch] = useState("");
  const { none, setNone } = useContext(Mycontext);
  const { noneMovie, setNoneMovie } = useContext(Mycontext);

  async function fetchdata() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=54848c6cfecb51d98584e9df33e167f3&language=en-US&query=${search}&page=1&include_adult=false`
    );
    setMovies(response.data.results);
  }

  const searchHandle = () => {
    fetchdata();
  };
  const searchHandleResult = (e) => {
    setSearch(e.target.value);
    setTimeout(() => {
      fetchdata();
      setNone("none");
      setNoneMovie("");
    }, 2000);
  };

  const navigate = useNavigate();

  const clearStorage = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <Link to={`/`}>
              <img src={Logo} />
            </Link>
            {page !== "login" ? (
              <div className="headerSearch">
                <input
                  type="search"
                  value={search}
                  onChange={searchHandleResult}
                  placeholder="Search Movies"
                />
                <button onClick={searchHandle}>
                  <img src={Search} />
                </button>
              </div>
            ) : (
              " "
            )}
            {page !== "login" ? (
              <button onClick={clearStorage} className="btn">
                SignOut
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
