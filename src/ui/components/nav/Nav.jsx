import {Container, BurgerContainer, HomeContainer, LeftContent, RightContent, LoginContainer} from "./NavStyle";
import CTVIcon from "../icon/Icon";
import CTVButton from "../button/Button";
import IcBurger from '../../../asset/ic_burger.svg';
import IcLogo from '../../../asset/ic_logo.svg';
import C2VText from "../text/Text";

export default function Nav() {
  return (
    <>
      <Container>
        <LeftContent>
          <BurgerContainer>
            <CTVButton padding={'0'} onClick={() => console.log('se')}>
              <CTVIcon src={IcBurger}/>
            </CTVButton>
          </BurgerContainer>
          <HomeContainer>
            <CTVButton padding={'0'} onClick={() => console.log('to home')}>
              <CTVIcon src={IcLogo}/>
            </CTVButton>
          </HomeContainer>
        </LeftContent>
        <RightContent>
          <LoginContainer>
            <CTVButton onClick={() => console.log('login')}>
              <C2VText text={'로그인'} type={'body'}/>
            </CTVButton>
          </LoginContainer>
        </RightContent>
      </Container>
    </>
  );
}