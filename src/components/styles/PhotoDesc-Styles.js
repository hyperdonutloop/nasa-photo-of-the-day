import styled from 'styled-components';

export const Wrapper = styled.div`
  p {
    padding: 50px;
    font-size: 1.4em;
    line-height: 1.6em;
    letter-spacing: 2px;
    text-align: justify;
    /* color: whitesmoke; */

    @media (max-width: 500px) {
        max-width: 100%;
        font-size: 0.9rem;
        padding: 20px;
    }

  }
`;