import { PlataformAdsContainer, Plataform, Plataforms, Button } from "./styles";
import instagram from "./images/instagram.gif";
import facebook from "./images/facebook.gif";
import tiktok from "./images/tiktok.gif";
import google from "./images/google.gif";

const PlataformAds = () => {
  return (
    <PlataformAdsContainer>
      <h1>Nós usamos as maiores plataformas de anúncios do mundo!</h1>
      <Plataforms>
        <Plataform>
          <img src={instagram} alt="instagram" />
          <p>Instagram</p>
        </Plataform>
        <Plataform>
          <img src={facebook} alt="facebook" />
          <p>Facebook</p>
        </Plataform>
        <Plataform>
          <img src={tiktok} alt="tiktok" />
          <p>Tiktok</p>
        </Plataform>
        <Plataform>
          <img src={google} alt="google" />
          <p>Google</p>
        </Plataform>
      </Plataforms>
      <Button>
        <a
          href="https://wa.me/53984737286?text=Oii, quero aumentar as vendas do meu negocio!!!"
          target="_blank"
          rel="noreferrer"
        >
          Quero aumentar as vendas da minha empresa!
        </a>
      </Button>
    </PlataformAdsContainer>
  );
};

export default PlataformAds;
