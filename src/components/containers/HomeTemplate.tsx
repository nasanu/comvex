import React from "react";
import Styled from "styled-components";

//users list page
function HTemplate(props: any) {
  return <div className="outer" {...props}></div>;
}

const StyledTemplate = Styled(HTemplate)`

  padding-top:200px;

  .form{
    display:flex;
    button{
      border:0;
      background-color:#09c;
      color:#eee;
      border-radius: 5px;
      &[disabled]{
        cursor: not-allowed;
      }
    }
    label{
      background: #ddd;
      border-radius: 5px;
      padding-left: 10px;
    }
    &.inline{
      flex-direction: column;
      .row{
        display: flex;
        justify-content: space-evenly;
        .col{
          display: flex;
          justify-content: space-evenly;
        }
      }
      
    }
  }

  label > input{
    margin-left: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  input{
    border-radius:5px;
    padding:.4vh 1vw;
    border:0px;
    &:focus{
      outline:none;
    }
    
  }


`;
export default StyledTemplate;
