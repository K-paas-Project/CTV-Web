import {
  Container, Img,
  Info,
  InfoContainer,
  LeftContent,
  MainContent,
  MainVideo,
  RecommendControlContainer,
  RightContent, CategoryContent, LiveContent
} from "./HomeStyle";
import C2VText from "../../components/text/Text";
import CTVButton from "../../components/button/Button";
import Color from "../../components/theme/color/Color";
import IcLive from '../../../asset/ic_live.svg';
import IcDownArrow from '../../../asset/ic_down_arrow.svg';
import CTVIcon from "../../components/icon/Icon";
import Recommend from "./component/Recommend";
import Modal from "../../components/modal/Modal";
import {useEffect, useRef, useState} from "react";
import Report from "../report/Report";
import Category from "../../components/category/Category";

export default function Home() {

  const fire = {
    url: 'http://223.130.136.187:8000/fire',
    location: '대구광역시 팔공산',
    cctv: '팔공 IC 네거리'
  }

  const lst = [
    fire,
    {
      url: 'http://223.130.136.187:8000/video1',
      location: '인천광역시 잠진포 사거리',
      cctv: '2-1 4번 카메라'
    }, {
      url: 'http://223.130.136.187:8000/video2',
      location: '한강공원',
      cctv: '4-2 카메라'
    }, {
      url: 'http://223.130.136.187:8000/video3',
      location: '한강 잠실대교',
      cctv: '2번 카메라'
    }, {
      url: 'http://223.130.136.187:8000/video4',
      location: '제주 백록담 모니터링',
      cctv: '1번 카메라'
    }, {
      url: 'http://223.130.136.187:8000/video5',
      location: '대구 달성군 구지로',
      cctv: '3-1 4번 카메라'
    },
  ];

  const [isReportOpen, setIsReportOpen] = useState(false);

  const [clickedContent, setClickedContent] = useState(fire);

  const imgRef = useRef();

  return (
    <Container>
      <LeftContent>
        <MainContent>
          <Img src={clickedContent.url} alt="" ref={imgRef}/>
          <CategoryContent>
            <Category type={clickedContent.location === fire.location ? '산불' : '안전'}/>
          </CategoryContent>
          <LiveContent>
            <C2VText text={'실시간'} type={'body'} color={Color.white}/>
            <div style={{width: '10px'}}></div>
            <CTVIcon src={IcLive} width={12} height={12}/>
          </LiveContent>
        </MainContent>
        <InfoContainer>
          <Info>
            <C2VText text={clickedContent.location} type={'title'}/>
            <C2VText text={clickedContent.cctv} type={'body'}/>
          </Info>
          {clickedContent.location === fire.location ? <CTVButton onClick={() => setIsReportOpen(true)} type={'red'}>
            <C2VText text={'신고하기'} color={Color.white}/>
          </CTVButton> : null}
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
        <div style={{height: '16px'}}></div>
        {lst.map((i, idx) => (<Recommend key={idx} type={i.location === fire.location ? '산불' : '안전'} callback={() => setClickedContent(i)} model={i}/>))}
      </RightContent>
      <Modal isOpen={isReportOpen} setIsOpen={() => setIsReportOpen(false)}>
        <Report callback={() => setIsReportOpen(false)} category={'산불'} imgRef={imgRef}/>
      </Modal>
    </Container>
  );
}