import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
   *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   body {
      background-color: #212121;
      width: 100vw;
      height: 100vh;
   }

   :root {
      --form-color: #282a37;
      --background-color: #262626;

      --gradient-1: hsla(232, 16%, 19%, 0.65);
      --gradient-2: hsla(222, 10%, 34%, 0.65);
   }
`;

export default GlobalStyled;
