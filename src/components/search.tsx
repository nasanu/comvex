import React, { useState } from "react";
import Styled from "styled-components";
import { useDispatch } from "react-redux";
import { searchActions } from "../redux/reducers/searchReducer";

const SearchForm = Styled.section`
width:80%;
margin:auto;
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function search() {
    dispatch(searchActions.multiSearch(query));
  }

  function onInput(event: any) {
    setQuery(event.target.value);
  }

  return (
    <SearchForm id="search-form form">
      <div className="form inline">
        <div className="row">
          <div className="col">
            <input id="search-input" type="text" onChange={(e) => onInput(e)} autoFocus />
            <button onClick={() => search()} disabled={query.length <= 0}>
              Search
            </button>
          </div>
        </div>
      </div>
    </SearchForm>
  );
};

export default Search;
