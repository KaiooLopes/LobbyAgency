import {
  LobbyAgencyAssistenceContainer,
  Card,
  CardsContainer,
  Button,
} from "./styles";
import Money from "./gifs/MoneyUnscreen.gif";
import Client from "./gifs/ClientUnscreen.gif";
import Doc from "./gifs/DocUnscreen.gif";
import Graphic from "./gifs/Graphic.gif";

const LobbyAgencyAssistence = () => {
  return (
    <LobbyAgencyAssistenceContainer>
      <Button>
        <a
          href="https://wa.me/53984737286?text=Oii, quero aumentar as vendas do meu negocio!!!"
          target="_blank"
          rel="noreferrer"
        >
          Quero Vender Mais
        </a>
      </Button>
      <h1>A Lobby Agency é especializada em:</h1>
      <CardsContainer>
        <Card>
          <img src={Graphic} alt="money icon" />
          <p>Escalar as vendas do seu produto ou serviço</p>
        </Card>
        <Card>
          <img src={Client} alt="client icon" />
          <p>Atrair clientes que tem interesse no seu negócio</p>
        </Card>
        <Card>
          <img src={Money} alt="doc icon" />
          <p>Aumentar seus lucros e receita</p>
        </Card>
        <Card>
          <img src={Doc} alt="graphic icon" />
          <p>Acompanhamos diariamente os anúncios do seu negócio</p>
        </Card>
      </CardsContainer>
    </LobbyAgencyAssistenceContainer>
  );
};

export default LobbyAgencyAssistence;
