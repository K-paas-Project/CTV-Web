import {
  Container, Img,
  Info,
  InfoContainer,
  LeftContent,
  Map,
  MainContent,
  RecommendControlContainer,
  RightContent, CategoryContent, LiveContent, Live, MapContent
} from "./HomeStyle";
import C2VText from "../../components/text/Text";
import CTVButton from "../../components/button/Button";
import Color from "../../components/theme/color/Color";
import IcLive from '../../../asset/ic_live.svg';
import IcDownArrow from '../../../asset/ic_down_arrow.svg';
import CTVIcon from "../../components/icon/Icon";
import Recommend from "./component/Recommend";
import Modal from "../../components/modal/Modal";
import {useRef, useState} from "react";
import Report from "../report/Report";
import Category from "../../components/category/Category";

export default function Home() {

  const fire = {
    url: 'http://223.130.136.187:8000/fire',
    location: '대구광역시 팔공산',
    cctv: '팔공 IC 네거리',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12908.548781035044!2d128.68470027213417!3d36.01694300968997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356676f627c2bb9d%3A0x56ded52c122ecd17!2sPalgongsan!5e0!3m2!1sen!2skr!4v1702451517117!5m2!1sen!2skr"
  };


  const lst = [
    fire,
    {
      url: 'http://223.130.136.187:8000/video1',
      location: '인천광역시 잠진포 사거리',
      cctv: '2-1 4번 카메라',
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6484650649213!2d126.41924377656889!3d37.42178307207655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b974cf5e71715%3A0x876483b75f11fe6b!2sGeojampo%20Beach!5e0!3m2!1sen!2skr!4v1702451547507!5m2!1sen!2skr"
    }, {
      url: 'http://223.130.136.187:8000/video2',
      location: '한강공원',
      cctv: '4-2 카메라',
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202368.8168574674!2d126.72141470254158!3d37.578317141923264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c990ae9ee1563%3A0x8135f71b4561a0b9!2z7ZWc6rCV6rO17JuQIOuniO2PrOuCmOuTpOuqqQ!5e0!3m2!1sen!2skr!4v1702451568374!5m2!1sen!2skr"
    }, {
      url: 'http://223.130.136.187:8000/video3',
      location: '한강 잠실대교',
      cctv: '2번 카메라',
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50624.522248953246!2d126.99438566006066!3d37.53072784403215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5d0e32940fd%3A0xbfe7ce7613999ce!2sJamsil%20Bridge!5e0!3m2!1sen!2skr!4v1702451594153!5m2!1sen!2skr"
    }, {
      url: 'http://223.130.136.187:8000/video4',
      location: '제주 백록담 모니터링',
      cctv: '1번 카메라',
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13329.354680063074!2d126.52334607065174!3d33.36222327479088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cff4f885cc915%3A0x3806787a6fc4677b!2z67Cx66Gd64u0!5e0!3m2!1sen!2skr!4v1702451612783!5m2!1sen!2skr"
    }, {
      url: 'http://223.130.136.187:8000/video5',
      location: '대구 달성군 구지로',
      cctv: '3-1 4번 카메라',
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.0966549824275!2d128.41921742075573!3d35.66418893130986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356f59450095604b%3A0xdcee02065d82e483!2z7IaM7ZSE7Yq47Juo7Ja066eI7J207Iqk7YSw6rOg65Ox7ZWZ6rWQ!5e0!3m2!1sen!2skr!4v1702451662372!5m2!1sen!2skr"
    },
  ];

  const [isReportOpen, setIsReportOpen] = useState(false);

  const [clickedContent, setClickedContent] = useState(fire);

  const imgRef = useRef();

  return (
    <Container>
      <LeftContent>
        <MainContent>
          <Img src={clickedContent.url} alt="" ref={imgRef} loading={"lazy"}/>
          <CategoryContent>
            <Category type={clickedContent.location === fire.location ? '산불' : '안전'}/>
          </CategoryContent>
          <LiveContent>
            <Live>
              <C2VText text={'실시간'} type={'body'} color={Color.white}/>
              <div style={{width: '10px'}}></div>
              <CTVIcon src={IcLive} width={12} height={12}/>
            </Live>
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
        <div style={{
          width: '100%',
          border: `1px solid #f4f5f9`,
          marginTop: '52px'
        }}></div>
        <div style={{height: '12px'}}></div>
        <C2VText text={'지도로 보기'} type={'headline'} weight={700}/>
        <MapContent>
          <Map src={clickedContent.mapUrl}></Map>
        </MapContent>
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
        <Report location={clickedContent.location} callback={() => setIsReportOpen(false)} cctv={clickedContent.cctv} category={'산불'} img={imgRef.current}/>
      </Modal>
    </Container>
  );
}