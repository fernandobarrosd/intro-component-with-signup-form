import { createGlobalStyle } from "styled-components";
import poppinsBold from "../../assets/fonts/poppins-bold.ttf";
import poppinsMedium from "../../assets/fonts/poppins-medium.ttf";
import poppinsRegular from "../../assets/fonts/poppins-regular.ttf";
import poppinsSemiBold from "../../assets/fonts/poppins-semi-bold.ttf";
import backgroundImage from "../../assets/images/bg-intro-desktop.png";

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "Poppins Bold";
        src: url(${poppinsBold});
    }

    @font-face {
        font-family: "Poppins Medium";
        src: url(${poppinsMedium});
    }

    @font-face {
        font-family: "Poppins Regular";
        src: url(${poppinsRegular});
    }

    @font-face {
        font-family: "Poppins Semi Bold";
        src: url(${poppinsSemiBold});
    }
    
    :root {
        --desktop-width: 1440px;
        --mobile-width: 375px;
        --primary-red: hsl(0, 100%, 74%);
        --primary-green: hsl(154, 59%, 51%);
        --accent-blue: hsl(248, 32%, 49%);
        --neutral-dark-blue: hsl(249, 10%, 26%);
        --neutral-grayish-blue: hsl(246, 25%, 77%);
        --white: #FFFFFF;
        --font-size: 16px;
        --font-family: "Poppins Regular";
        --padding: 10px;
        --border-radius: 4px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button, input, fieldset {
        border: 0;
    }

    button {
        cursor: pointer;
    }

    body {
        max-width: var(--desktop-width);
        min-width: var(--mobile-width);
        width: 100vw;
        font-family: var(--font-family);
        background-image: url(${backgroundImage});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: var(--primary-red);
        color: var(--white);
        
        
    }
`