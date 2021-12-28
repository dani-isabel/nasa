import React, {useEffect, useState} from "react";
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

const ImgStyled = styled.div`
background-image: url('${props => props.url}');
background-repeat: no-repeat, repeat;
background-position: center;
background-size: cover;
height: 56.2vh;
`

const Iframe = ({url, title}) => {
  console.log(url)
  const [isImg,setIsImg] = useState(url.includes("jpg"))
  useEffect(() => {
    setIsImg(url.includes("jpg"))
  },[url])
  //TO DO: Create a validation when is an img
  return (
    isImg ? (
      <ImgStyled url={url} title={title}>
      {/* <img src={url} alt={title}/> */}
      <Banner url={url} title={title}/>
      </ImgStyled>
    ) : (
      <IframeStyled>
      <iframe title={title} src={url}></iframe>
      <Banner url={url} title={title}/>
      </IframeStyled> 
    )
  )
};

export default Iframe;
