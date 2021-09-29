import React from "react";
import styled from "styled-components"
import Banner from "./Banner"

const IframeStyled = styled.div`
height: 56.2vh;
& iframe {
    width: 100%;
    height: 50vh;
    position: absolute;
    z-index: -10;
}
`

const Iframe = ({url, title}) => {
  //TO DO: Create a validation when is an img
  return (
    <IframeStyled>
        <iframe title={title} src={url}></iframe>
        <Banner url={url} title={title}/>
    </IframeStyled>
  );
};

export default Iframe;
