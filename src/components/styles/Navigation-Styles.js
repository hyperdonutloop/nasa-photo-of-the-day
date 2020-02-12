import styled from 'styled-components';

export const Wrapper = styled.div`

  .navigation {
    display: flex;
    justify-content: space-between;
    padding-top: 0;
    padding-bottom: 1%;
    /* background-color: #1f2022; */
    /* border: 2px solid green; */
    
    .title {
      /* border: 2px solid pink; */
      flex-grow: 1;
      display: block;
      text-align: left;
      padding: 1rem;
    }
    
    .me {
      text-decoration: none;
      filter: contrast(1%);
      color: #000000;
    }

    .links a {
      padding: 1rem;
      text-decoration: none;
      /* color: #B2B9C5; */
      filter: contrast(1%);
      color: #000000;
      /* opacity: 80%; */
      /* margin-top: 1rem; */
      /* // border: 2px solid blue; */
    }

    .dark-mode__toggle {
      background: #383B40;
      border-radius: 100px;
      /* border: 1px solid #383B40; */
      height: 25px;
      position: relative;
      width: 45px;
      text-indent: -9999px;
      /* display: block; */
      /* border: 2px dotted blue; */
    }

    .toggle {
      
      background: #CE9ECE;
      border-radius: 100%;
      
      left: 0;
      top: 3px;
      left: 3px;
      position: absolute;
      transition: 0.2s;
      height: 19px;
      width: 19px;
      /* box-shadow: 0 0 10px #9ecaed; */
      /* border: 2px dotted green; */
    }

    .toggled {
      left: calc(100% - 23px);
    }
    .icons {
      display: flex;
    }
    .switch-wrapper {
      display: flex;
      /* justify-content: center; */
      
      align-items: center;
      /* border: 2px dotted green; */
      margin-top: -2px;
      margin-right: 10px;
      
      /* position: absolute; */
      /* top: 20px;
      right: 30px; */
      
    .switch-wrapper, .sun, .moon, .moon-white {
      width: 15px;
      height: 15px;
      margin: 4px;
      /* border: 2px solid green; */
    }

    .sun-white {
        width: 15px;
        height: 15px;
        margin: 4px;
        /* border: 1px dotted papayawhip; */
      }
} /* switch-wrapper closing tag*/

}
`;