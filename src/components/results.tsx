import React from "react";
import Styled from "styled-components";
import { useSelector } from "react-redux";
import { searchResults } from "../redux/selectors/selectors";
import Result, { IResult } from "../components/result";

const ResultsContainer = Styled.section`
width:80%;
margin:auto;
`;

const Results = () => {
  const results: any = useSelector(searchResults);
  return (
    <ResultsContainer id="results-container">
      {results &&
        results.map((result: IResult) => {
          return <Result key={"result-" + result.id} result={result}></Result>;
        })}
    </ResultsContainer>
  );
};

export default Results;
