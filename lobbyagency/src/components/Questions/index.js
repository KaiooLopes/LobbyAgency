import { QuestionsContainer, Question } from "./styles";

const Questions = () => {
  return (
    <QuestionsContainer>
      <Question align="left">
        <p>Como funciona a gestão de trafego no método lobby?</p>
      </Question>
      <Question align="right">
        <p>
          Desenvolvemos anúncios patrocinados de forma detalhada e estratégica
          utilizando ferramantes das maiores plataformas de anúncios e redes
          sociais do mundo, que analisam e armazenam o comportamento e o
          interesse de seus usuários baseado nas pesquisas e nos conteúdos
          consumidos por eles. Dessa maneira conseguimos enviar anúncios de
          maneira extremamente direcionada para o público-alvo do seu negócio,
          aumentando exponencialmente sua taxa de conversão e assim facilitando
          para que você alcance seus objetivos.
        </p>
      </Question>
      <Question align="left">
        <p>Como funciona nosso processo?</p>
      </Question>
      <Question align="right">
        <p>
          Nós iremos desenvolver uma estratégia de crescimento constante para
          que seu negócio seja visto por um número cada vez maior de pessoas
          interessadas, aumentando assim, seu faturamento. Através de nossos
          relatórios quinzenais, em que compartilhamos os resultados que
          obtivemos através dos anúncios criados, você estará por dentro do que
          está sendo feito pela nossa empresa, permitindo que você possa opinar
          caso algo fuja do que você esperava, garantindo assim sua satisfação.
        </p>
      </Question>
    </QuestionsContainer>
  );
};

export default Questions;
