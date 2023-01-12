import { createGlobalStyle } from "styled-components";
import CompanyOrSmallBusiness from "./components/CompanyOrSmallBusiness";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import LobbyAgencyAssistence from "./components/LobbyAgencyAssistence";
import PlataformAds from "./components/PlataformAds";
import Questions from "./components/Questions";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Introduction />
      <LobbyAgencyAssistence />
      <Questions />
      <PlataformAds />
      <CompanyOrSmallBusiness />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
