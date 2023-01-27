import { HeaderContainer, Logo } from "./styles";
import logo from "./images/Logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
    </HeaderContainer>
  );
};

export default Header;
