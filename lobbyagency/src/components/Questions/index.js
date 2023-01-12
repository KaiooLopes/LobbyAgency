import { QuestionsContainer, Question } from "./styles";

const Questions = () => {
  return (
    <QuestionsContainer>
      <Question align="left">
        <p>Como nós trabalhamos?</p>
      </Question>
      <Question align="right">
        <p>
          nós desenvolvemos anúncios de alta conversão dentro das maiores
          plataformas sociais do mundo que com INTELIGENCIA ARTIFICIAL monitoram
          o comportamento dos usuários e assim nós segmentamos os anúncios
          somente para o público QUE PRECISA OU TEM interesse no seu produto
        </p>
      </Question>
      <Question align="left">
        <p>por que isso é revolucionário?</p>
      </Question>
      <Question align="right">
        <p>
          Usando essa metodologia atingimos apenas uma audiência qualificada
          para a compra, diferente da panfletagem e os outros modos obsoletos de
          propaganda que é impossível de fazer essa segmentação Então por
          exemplo se você vende ração de cachorro nos nao vamos mostrar seu
          anúncio para quem tem gatos, pois eles não têm interesse no seu
          produto
        </p>
      </Question>
    </QuestionsContainer>
  );
};

export default Questions;
