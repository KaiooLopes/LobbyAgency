//Components
import { createGlobalStyle } from "styled-components";
import CompanyOrSmallBusiness from "./components/CompanyOrSmallBusiness";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import LobbyAgencyAssistence from "./components/LobbyAgencyAssistence";
import PlataformAds from "./components/PlataformAds";
import Questions from "./components/Questions";
import Pillars from "./components/Pillars";

//Fonts
import QuickSand from "./fonts/Quicksand-VariableFont_wght.ttf";
import LibreBaskerville from "./fonts/LibreBaskerville-Regular.ttf";
import LibreBaskervilleBold from "./fonts/LibreBaskerville-Bold.ttf";
import Caros from "./fonts/cretype  Caros Black.otf";
import Inter from "./fonts/Inter-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "QuickSand" ;
    src: url(${QuickSand});
  }
    @font-face {
    font-family: "LibreBaskerville";
    src: url(${LibreBaskerville});
  }
    @font-face {
    font-family: "LibreBaskervilleBold" ;
    src: url(${LibreBaskervilleBold});
  }
    @font-face {
    font-family: "Caros" ;
    src: url(${Caros});
  }
    @font-face {
    font-family: "Inter" ;
    src: url(${Inter});
  }

  body{
    margin: 0;
    padding: 0;
    font-family: "LibreBaskerville", sans-serif;
  }

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #220E44 #B8C0C2;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 11px;
  width: 11px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #B8C0C2;
  border: 10px solid #FFFFFF;
}

*::-webkit-scrollbar-track:hover {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}

*::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background-color: #220E44;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #341669;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #6D2DDB;
}


`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Introduction />
      <LobbyAgencyAssistence />
      <Questions />
      <PlataformAds />
      <CompanyOrSmallBusiness />
      <Pillars />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
