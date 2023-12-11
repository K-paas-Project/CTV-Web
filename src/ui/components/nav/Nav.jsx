import {Container, BurgerContainer, HomeContainer, LeftContent, RightContent, LoginContainer} from "./NavStyle";
import CTVIcon from "../icon/Icon";
import CTVButton from "../button/Button";
import IcBurger from '../../../asset/ic_burger.svg';
import IcLogo from '../../../asset/ic_logo.svg';
import C2VText from "../text/Text";
import {useNavigate} from "react-router-dom";
import {Url} from "../../feature/root/App";
import {useEffect, useState} from "react";
import {getProfile} from "../../../data/service/api/AuthApi";

export default function Nav({callback}) {

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getProfile()
      .then(() => {
        setIsLogin(true);
      })
      .catch(() => {});
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Container>
        <LeftContent>
          <BurgerContainer>
            <CTVButton padding={'0'} onClick={() => callback()}>
              <CTVIcon src={IcBurger}/>
            </CTVButton>
          </BurgerContainer>
          <HomeContainer>
            <CTVButton padding={'0'} onClick={() => navigate(Url.homeUrl)}>
              <CTVIcon src={IcLogo}/>
              <C2VText text={'CTV'} type={'body'}/>
            </CTVButton>
          </HomeContainer>
        </LeftContent>
        <RightContent>
          <LoginContainer>
            {!isLogin ? <CTVButton onClick={() => navigate(Url.login)}>
              <C2VText text={'로그인'} type={'body'}/>
            </CTVButton> : null}
          </LoginContainer>
        </RightContent>
      </Container>
    </>
  );
}