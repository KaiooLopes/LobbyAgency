import { useState } from "react";
import {
  CompanyOrSmallBusinessContainer,
  OptionCompany,
  OptionResume,
  SelectContainer,
} from "./styles";

const CompanyOrSmallBusiness = () => {
  const [option, setOption] = useState(false);

  return (
    <CompanyOrSmallBusinessContainer>
      <OptionCompany optionEl={option}>
        <p>Empresa</p>
        <SelectContainer onClick={() => setOption(!option)} optionEl={option}>
          <div></div>
        </SelectContainer>
        <p>Pequeno Negócio</p>
      </OptionCompany>
      <OptionResume>
        {!option && (
          <p>
            Nós ajudamos empresas com escala de venda e visibilidade na web. A
            internet não é o futuro, é o presente. Se a sua empresa não está na
            internet, você está perdendo dinheiro.
          </p>
        )}
        {option && (
          <p>
            Você que tem seu próprio negócio e que deseja expandir aumentando o
            número de vendas do seu produto ou serviço, trazendo maior
            visibilidade para seu negócio e botando mais dinheiro no seu bolso.
          </p>
        )}
      </OptionResume>
    </CompanyOrSmallBusinessContainer>
  );
};

export default CompanyOrSmallBusiness;
