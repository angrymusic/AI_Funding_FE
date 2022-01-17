import { createGlobalStyle } from "styled-components";
import SpoqaHanSansNeo from "../fonts/spoqa/SpoqaHanSansNeo-Regular.woff2";
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Spoqa Han Sans Neo";
        src: url(${SpoqaHanSansNeo});
    }

    * {
        box-sizing: border-box;
    }

    p {
        font-size: 15px;
        color: white;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        font-family: 'Spoqa Han Sans Neo', '궁서';
        width: 100%;
        height: 100%;
        margin: 0px;
    }

    #root {
        width:100%;
        height: 100%;
    }
`;

export default GlobalStyle;
