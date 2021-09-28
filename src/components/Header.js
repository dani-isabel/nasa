import React from "react"
import styled from "styled-components"

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: black;
    font-family: Muli, Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
   & a {
    color: white;
    text-decoration: none;
   }
   & ul {
       flex-direction: row;
   }
   & li {
       padding: 10px;
        :hover {
            border-bottom: 3px solid red;
            margin-bottom: -3px;
        }
   }
`
const Header = () => {
        return (
            <HeaderStyled>
                <nav>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a href="/">Home</a></li>
                        <li><a href="/search">NASA Image Search</a></li>
                    </ul>
                </nav>
            </HeaderStyled>
        )
}

export default Header