import React, { createContext, useState } from "react";
export let Mycontext = createContext();

export default function Context(props) {
  const [movies, setMovies] = useState([]);

  const [none, setNone] = useState("");
  const [noneMovie, setNoneMovie] = useState("none");
  return (
    <Mycontext.Provider
      value={{
        movies,
        setMovies,
        none,
        setNone,
        noneMovie,
        setNoneMovie,
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
}
