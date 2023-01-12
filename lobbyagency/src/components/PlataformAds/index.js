import { PlataformAdsContainer, Plataform, Plataforms } from "./styles";
import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png";
import tiktok from "./images/tiktok.png";
import google from "./images/google.png";

const PlataformAds = () => {
  return (
    <PlataformAdsContainer>
      <h1>Nós usamos todas as maiores plataformas de anúncios do mundo!</h1>
      <Plataforms>
        <Plataform>
          <img src={instagram} alt="instagram" />
          <p>Instagram Ads</p>
        </Plataform>
        <Plataform>
          <img src={facebook} alt="facebook" />
          <p>Facebook Ads</p>
        </Plataform>
        <Plataform>
          <img src={tiktok} alt="tiktok" />
          <p>Tiktok Ads</p>
        </Plataform>
        <Plataform>
          <img src={google} alt="google" />
          <p>Google Ads</p>
        </Plataform>
      </Plataforms>
    </PlataformAdsContainer>
  );
};

export default PlataformAds;
