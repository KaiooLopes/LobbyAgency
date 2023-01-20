import { useEffect, useRef, useState } from "react";
import { Pillar, PillarsContainer, BodyPillars, IconArrow } from "./styles";

const Pillars = () => {
  const ref = useRef(null);
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    if (ref) {
      window.addEventListener("scroll", ShowSection);
    }
  }, [ref]);

  const ShowSection = () => {
    if (ref.current.getBoundingClientRect().top < 400) {
      setShowDiv(true);
      window.removeEventListener("scroll", ShowSection);
    }
  };

  return (
    <PillarsContainer ref={ref}>
      <h1>Nossos Pilares</h1>
      <BodyPillars>
        <Pillar delay="0.5" showDiv={showDiv}>
          <h3>Capturar</h3>
          <p>
            Capture seu público-alvo por meio de campanhas digitais
            bem-sucedidas, através de anúncios que impressionam e estratégias
            validadas. Receba seus visitantes em seu site, loja virtual ou
            perfil de rede social.
          </p>
        </Pillar>
        <IconArrow
          className="fa-solid fa-angles-right"
          delay="0.7"
          showDiv={showDiv}
          nameAnimation={"animationIconLeft"}
        ></IconArrow>
        <Pillar delay="0.9" showDiv={showDiv}>
          <h3>Reter</h3>
          <p>
            Retenha seu público enquanto eles navegam em seu conteúdo.
            Experiência do usuário, mapeamento da jornada do usuário eficaz,
            conteúdo envolvente e mensagens estratégicas são elementos
            essenciais para estimular conversão.
          </p>
        </Pillar>
        <IconArrow
          className="fa-solid fa-angles-right"
          delay="1.1"
          showDiv={showDiv}
          nameAnimation={"animationIconRight"}
        ></IconArrow>
        <Pillar delay="1.3" showDiv={showDiv}>
          <h3>Converter</h3>
          <p>
            Converta visitantes em leads valiosos e em novos clientes. O
            mapeamento eficaz dos pontos de conversão fornecerão resultados,
            medidos pelo número de consultas, chamadas ou vendas on-line.
          </p>
        </Pillar>
      </BodyPillars>
    </PillarsContainer>
  );
};

export default Pillars;
