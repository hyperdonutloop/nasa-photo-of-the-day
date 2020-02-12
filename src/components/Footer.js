import React from "react";
import styled from "styled-components";
import 'normalize.css';

import { LogoWrapper, WordWrapper } from './styles/Footer-Styles';

const GithubFooter = () => {

    return (
        <div className="footer">
        <a href="https://github.com/hyperdonutloop">
            <LogoWrapper>
             <img className="me" src={require ("../images/me.png")} alt="avatar"></img>
            </LogoWrapper>
            
        </a>
        <WordWrapper>
          <div className="words">
            <p>Say <span role="img" aria-label="wave">👋🏼</span>on GitHub</p>
          </div>
        </WordWrapper>
        </div>
        
       
        
    )




}

export default GithubFooter;