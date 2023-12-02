import {Container, Info, InfoContainer, LeftContent, MainContent, MainVideo} from "./HomeStyle";
import C2VText from "../../components/text/Text";
import CTVButton from "../../components/button/Button";
import Color from "../../components/theme/color/Color";

export default function Home() {
  return (
    <Container>
      <LeftContent>
        <MainContent>
          <MainVideo controls autoPlay={true}>
            <source type={'video/mp4'} src={''}/>
          </MainVideo>
        </MainContent>
        <InfoContainer>
          <Info>
            <C2VText text={'dummy title'} type={'title'}/>
            <C2VText text={'dummy body'} type={'body'}/>
          </Info>
          <CTVButton type={'red'}>
            <C2VText text={'신고하기'} color={Color.white}/>
          </CTVButton>
        </InfoContainer>
      </LeftContent>
    </Container>
  );
}