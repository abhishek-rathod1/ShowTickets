import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";
import ShowList from "./Components/ShowList";
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import "./app.css";

const API = " https://api.tvmaze.com/search/shows?q=all";

function App() {
  const [show, setShow] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.error(error));
    // console.log("data fetched");
  }, []);

  return (
    <>
      <center><h1>Show Details</h1></center>
      <table className="table">
        {/* <thead>
          <tr>
            <th scope="col">Score</th>
            <th scope="col">Show Id</th>
            <th scope="col">Show name </th>
            <th scope="col">type</th>
            <th scope="col">url</th>
            <th scope="col">Link</th>
          </tr>
        </thead> */}
        <tbody>
          <ShowList show={show} />
        </tbody>
      </table>
    </>
  );
}

export default App;
