import {
  Container,
  Info,
  InfoContainer,
  LeftContent,
  MainContent,
  MainVideo,
  RecommendControlContainer,
  RightContent
} from "./HomeStyle";
import C2VText from "../../components/text/Text";
import CTVButton from "../../components/button/Button";
import Color from "../../components/theme/color/Color";
import IcLive from '../../../asset/ic_live.svg';
import IcDownArrow from '../../../asset/ic_down_arrow.svg';
import CTVIcon from "../../components/icon/Icon";
import Recommend from "./component/Recommend";
import Modal from "../../components/modal/Modal";
import {useState} from "react";
import Report from "../../components/report/Report";

export default function Home() {

  const lst = [1, 2, 3, 4, 5, 6]

  const [isReportOpen, setIsReportOpen] = useState(false);

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
          <CTVButton onClick={() => setIsReportOpen(true)} type={'red'}>
            <C2VText text={'신고하기'} color={Color.white}/>
          </CTVButton>
        </InfoContainer>
      </LeftContent>
      <RightContent>
        <RecommendControlContainer>
          <CTVButton type={'blue'}>
            <C2VText text={'실시간'} type={'body'} color={Color.white}/>
            <div style={{width: '10px'}}></div>
            <CTVIcon src={IcLive} width={12} height={12}/>
          </CTVButton>
          <CTVButton>
            <C2VText text={'전체'}/>
            <div style={{width: '12px'}}></div>
            <CTVIcon src={IcDownArrow} width={24} height={24}/>
          </CTVButton>
        </RecommendControlContainer>
        {lst.map(_ => (<Recommend/>))}
      </RightContent>
      <Modal isOpen={isReportOpen} setIsOpen={() => setIsReportOpen(false)}>
        <Report/>
      </Modal>
    </Container>
  );
}