import { createGlobalStyle } from 'styled-components'
import QuicksandMedium from '../assets/fonts/Quicksand-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${QuicksandMedium};

    h1 {
      font-weight: 800;
      font-size: 36px;

    p {
      font-size: 18px;
    }
  }
`;
