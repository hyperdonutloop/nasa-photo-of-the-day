import React from "react";
import logo from "../images/github.png";
import styled from "styled-components";
import 'normalize.css';



const GithubFooter = () => {

    const LogoWrapper = styled.div`
    .github-logo {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        
    }
`;

const WordWrapper = styled.div`
   
    /* color: whitesmoke; */
    font-size: .8rem;
    padding-bottom: 10px;


`;

    return (
        <div className="footer">
        <a href="https://github.com/hyperdonutloop">
            <LogoWrapper>
            <img className="github-logo" src={require ("../images/Octocat.jpg")} alt="github logo"></img>
            
            </LogoWrapper>
            
        </a>
        <WordWrapper>
        <p className="hyper">@hyperdonutloop</p>
        </WordWrapper>
        </div>
        
       
        
    )




}

export default GithubFooter;