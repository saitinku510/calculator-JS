import React, { createContext, useState } from "react";
export let Mycontext = createContext();
export default function Context(props) {
  const [movies, setMovies] = useState([]);
  return (
    <Mycontext.Provider
      value={{
        movies,
        setMovies,
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
}
