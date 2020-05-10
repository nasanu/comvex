import React from "react";
import Styled from "styled-components";

const ModalContainer = Styled.div`
    display: none; 
    position: fixed;  
    z-index: 1;  
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto;  
    background-color: rgba(0,0,0,0.4);  
    &.open{
        display:block;
    }
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;  
        padding: 20px;
        border: 1px solid #888;
        width: 80%;  
      }
      .videoWrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
      }
      .videoWrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
`;

interface IModalPros {
  onClick: any;
  video: number;
}

const Modal = (props: IModalPros) => {
  return (
    <ModalContainer id={"modal"} className={"modal open"} onClick={() => props.onClick()}>
      <div className="modal-content">
        <div className="videoWrapper">
          <iframe
            title="trailer"
            width="560"
            height="349"
            src={"http://www.youtube.com/embed/" + props.video + "?rel=0&hd=1"}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
