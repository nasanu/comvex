import React from "react";
import Styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterSelector } from "../redux/selectors/selectors";
import { filterTypes, searchActionTypes } from "../redux/reducers/searchReducer";

const FilterContainer = Styled.div`
    justify-content: center;
    display: flex;
    button{
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        height:40px;
        padding:8px 16px;
        border-radius:5px;
        margin: 40px 10px 0 0;
    }
  .selected{
      background: #18344a;
      color:#fff;
  }
`;

interface IFilterProps {}

const Modal = (props: IFilterProps) => {
  const filter = useSelector(filterSelector);

  const dispatch = useDispatch();

  function changeFilter(filter: string) {
    dispatch({ type: searchActionTypes.videos.setFilter, payload: filter });
  }

  return (
    <FilterContainer id={"filter"}>
      <button onClick={() => changeFilter(filterTypes.All)} className={filter === filterTypes.All ? "selected" : ""}>
        All
      </button>
      <button
        onClick={() => changeFilter(filterTypes.Movies)}
        className={filter === filterTypes.Movies ? "selected" : ""}
      >
        Movies
      </button>
      <button onClick={() => changeFilter(filterTypes.TV)} className={filter === filterTypes.TV ? "selected" : ""}>
        TV Shows
      </button>
      <button
        onClick={() => changeFilter(filterTypes.people)}
        className={filter === filterTypes.people ? "selected" : ""}
      >
        People
      </button>
    </FilterContainer>
  );
};

export default Modal;
