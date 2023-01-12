import { LobbyAgencyAssistenceContainer, Card, CardsContainer } from "./styles";
import Money from "./gifs/MoneyUnscreen.gif";
import Client from "./gifs/ClientUnscreen.gif";
import Doc from "./gifs/DocUnscreen.gif";

const LobbyAgencyAssistence = () => {
  return (
    <LobbyAgencyAssistenceContainer>
      <h1>a lobby agency vai:</h1>
      <CardsContainer>
        <Card>
          <img src={Money} alt="money icon" />
          <p>aumentar as vendas do seu negócio</p>
        </Card>
        <Card>
          <img src={Client} alt="client icon" />
          <p>Trazer novos clientes todos os dias</p>
        </Card>
        <Card>
          <img src={Doc} alt="doc icon" />
          <p>apresentar relatórios semanais de resultados</p>
        </Card>
      </CardsContainer>
    </LobbyAgencyAssistenceContainer>
  );
};

export default LobbyAgencyAssistence;
