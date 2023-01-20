import { useState } from "react";
import { IntroductionContainer, Article, Arrow } from "./styles";

const Introduction = () => {
  const [showArticle, setShowArticle] = useState(false);

  return (
    <IntroductionContainer>
      <Article showArticle={showArticle}>
        <div>
          <h3 align="left">
            Quer que seu negócio seja visto por muitos clientes qualificados e
            interessados? Se sim, você está no lugar certo!
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
          <h3 align="left">
            Ajudamos empresas á ampliar seu faturamento e escalar seus
            resultados utilizando ferramentas que te aproximam do seu
            público-alvo.
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
