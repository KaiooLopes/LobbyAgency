import { useState } from "react";
import { IntroductionContainer, Article, Arrow } from "./styles";

const Introduction = () => {
  const [showArticle, setShowArticle] = useState(false);

  return (
    <IntroductionContainer>
      <Article showArticle={showArticle}>
        <div>
          <h3 align="left">
            Precisa de mais clientes? Quer aumentar as vendas? Parar de gastar
            dinheiro com panfletos que não trazem clientes? Então está no lugar
            certo!
          </h3>
          <Arrow
            left={"auto"}
            right={"14px"}
            onClick={() => setShowArticle(true)}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </Arrow>
        </div>
      </Article>
      <Article showArticle={showArticle}>
        <div>
          <h3 align="right">
            Ajudamos óticas e joalherias a aumentar seu faturamento com escala e
            previsibilidade na internet com um sistema de anúncios online que
            nos permite trazer o cliente até a porta da sua loja
          </h3>
          <Arrow
            left={"14px"}
            right={"auto"}
            onClick={() => setShowArticle(false)}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </Arrow>
        </div>
      </Article>
    </IntroductionContainer>
  );
};

export default Introduction;
