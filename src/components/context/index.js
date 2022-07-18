// import React from "react";

// function Context() {
//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState([]);

//   async function fetchdata() {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/search/movie?api_key=54848c6cfecb51d98584e9df33e167f3&language=en-US&query=${search}&page=1&include_adult=false`
//     );
//     setResults(response.data.results);
//   }
//   console.log(results);

//   const searchHandle = () => {
//     fetchdata();
//   };
//   return <div></div>;
// }

// export default Context;
