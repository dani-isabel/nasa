import React, { useEffect, useState } from "react"
import styled from "styled-components"

const BannerStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: black;
    align-items: center;
    position: relative;
    padding: 4px 10px;
    top: 50vh;
    & h2 {
        font-family: "Alegreya Sans", sans-serif;
        color: white;
        font-size: 42px;
        font-weight: 700;
        margin-right: 12px;
        margin-bottom: 0px;
        &:first-letter {
            color: red;
        }
    }
`


const Banner = ({url, title}) => {
const [date, setDate] = useState("")
    useEffect (() => {
        const date = new Date();
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const [nameDay, day, year] = [date.getDay(), date.getDate(), date.getFullYear()];
        const currentDay = `${weekDays[nameDay]} ${day}, ${year}`
        setDate(currentDay)
    }, [])
    
        return (
            <BannerStyled>
                <h2>Picture of the Day: {date}</h2>
                <a href={url} title={`Download ${title}`} target="_blank">
                    <svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
                    <polyline points="8 17 12 21 16 17"></polyline>
                    <line x1="12" y1="12" x2="12" y2="21"></line>
                    <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
                    </svg>
                </a>
            </BannerStyled>
        )
}

export default Banner