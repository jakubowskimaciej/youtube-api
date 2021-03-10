import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    button {
      outline: none;
      cursor: pointer;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    html {
      font-size: 62.5%; //1rem = 10px
      box-sizing: border-box;
      --color-primaryDark: ${(props) => props.theme.colors.primaryDark};
      --color-primaryLight: ${(props) => props.theme.colors.primaryLight};
      --color-yellow: ${(props) => props.theme.colors.yellow};
      --color-lightGrey: ${(props) => props.theme.colors.lightGrey};
      --color-white: ${(props) => props.theme.colors.white};
      --color-black: ${(props) => props.theme.colors.black};
      --shadow: ${(props) => props.theme.colors.shadow};
      
      @media ${(props) => props.theme.mediaQueries.largest} {
          font-size: 57.5%;
      }
      @media ${(props) => props.theme.mediaQueries.large} {
          font-size: 55%;
      }
    }
    body {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      background-color: var(--color-lightGrey)
    }
    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;
