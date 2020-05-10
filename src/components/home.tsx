import React from "react";
//import { connect } from "react-redux";
//import { getPromoted, IUser } from "../redux/reducers/usersReducer";
//import { IStore } from "../redux/reducers/rootReducer";
import HomeTemplate from "./containers/HomeTemplate";
import Search from "../components/search";
import Results from "../components/results";
import Filter from "../components/filter";

const Home = () => {
  console.log("redner: home.tsx");
  return (
    <HomeTemplate>
      <Search />
      <Filter />
      <Results />
    </HomeTemplate>
  );
};

export default Home;
