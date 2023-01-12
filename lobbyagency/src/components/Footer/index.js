import { FooterContainer } from "./styles";
import Flaticon from "./images/Flaticon.jpg";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <p>Copyright © 2023 LobbyAgency | Todos os Direitos Reservedos</p>
        <a href="https://flaticon.com">
          <img src={Flaticon} alt="flaticon icone" />
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
