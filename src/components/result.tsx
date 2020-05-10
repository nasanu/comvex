import React, { useState } from "react";
import Styled from "styled-components";
import Modal from "../components/modal";
import { useSelector } from "react-redux";
import { videoSelector } from "../redux/selectors/selectors";
import { filterTypes } from "../redux/reducers/searchReducer";

const ResultContainer = Styled.section`
display:flex;
width:80%;
margin: 50px auto;
.data{
    margin-left:20px;
}
`;

export interface IResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: any;
  release_date: string;
  first_air_date: string;
  title: string;
  original_name: string;
  video: false;
  vote_average: number;
  vote_count: number;
  name?: string;
  profile_path?: string;
  gender: number;
}

interface IResultPros {
  result: IResult;
}

const Result = (props: IResultPros) => {
  const result = props.result;
  const [open, setOpen] = useState(false);

  function showVideo() {
    setOpen(true);
  }

  //get trailer if its youtube
  const videos = useSelector(videoSelector(result.id));
  const ytID =
    videos &&
    videos.find((item: any) => {
      return item.site === "YouTube";
    });
  if (result.media_type === filterTypes.people) {
    return (
      <ResultContainer id={"result-" + result.id}>
        <div className="title">{result.name}</div>
        <div className="meta">
          <span>{filterTypes.people}</span> Gender:{result.gender > 1 ? "Male" : "female"}
        </div>
        <div className="desc">n/a</div>
        <div className="footer">
          <div className="rating">{result.vote_average}</div>
          <div className="media">
            {ytID && <button onClick={() => showVideo()}>youtube</button>}
            {open && ytID && <Modal video={ytID.key} onClick={() => setOpen(false)}></Modal>}
          </div>
        </div>
      </ResultContainer>
    );
  } else {
    return (
      <ResultContainer id={"result-" + result.id}>
        <div className="image">
          {result.poster_path && (
            <img alt={"poster"} width="100" src={"https://image.tmdb.org/t/p/w500/" + result.poster_path} />
          )}
        </div>
        <div className="data">
          <div className="title">{result.original_name ? result.original_name : result.original_title}</div>
          <div className="meta">{result.release_date ? result.release_date : result.first_air_date}</div>
          <div className="desc">{result.overview}</div>
          <div className="footer">
            <div className="rating">{result.vote_average}</div>
            <div className="media">
              {ytID && <button onClick={() => showVideo()}>youtube</button>}
              {open && ytID && <Modal video={ytID.key} onClick={() => setOpen(false)}></Modal>}
            </div>
          </div>
        </div>
      </ResultContainer>
    );
  }
};

export default Result;
