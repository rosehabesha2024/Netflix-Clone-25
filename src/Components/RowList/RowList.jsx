import React from "react";
import Rows from "../Rows/Rows";
import requests from "../../utils/requests";

function RowList() {
  return (
    <>
      <Rows title="NetflixOriginals" fetchUrl={
        requests. fetchNetflixOriginals
      } />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default RowList;
