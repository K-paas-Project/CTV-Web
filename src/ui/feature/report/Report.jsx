import {ButtonContainer, Container, Img, Info, InfoContent, InputContent, TitleContent} from "./ReportStyle";
import C2VText from "../../components/text/Text";
import CTVInput from "../../components/input/Input";
import {useEffect, useState} from "react";
import CTVInputArea from "../../components/inputarea/InputArea";
import Color from "../../components/theme/color/Color";
import CTVButton from "../../components/button/Button";
import {report} from "../../../data/service/api/ReportApi";
import axios from "axios";
import Category from "../../components/category/Category";
import {httpClient} from "../../../data/service/HttpClient";

export default function Report({callback, category, cctv, imgRef}) {

  const [content, setContent] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [blob, setBlob] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    console.log(img.width, img.height);
    console.log(img);

    canvas.width = img.width * 1.6;
    canvas.height = img.height * 1.6;
    img.crossOrigin = 'Anonymous';
    context.drawImage(img, 0, 0);
    try {
      canvas.toBlob((b) => {
        console.log('Blob 생성 완료:', b);
        const blobUrl = URL.createObjectURL(b);
        setBlob(b);
        console.log(blobUrl);
        setImgUrl(blobUrl);
      });
    } catch {
      setImgUrl('');
    }
  }, []);

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const time = new Date();
    setCurrentTime(`${time.getFullYear()}-${time.getMonth()}-${time.getDay()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
  }, []);


  return (
    <Container>
      <TitleContent>
        <C2VText text={'신고하기'} type={'title'}/>
      </TitleContent>
      <Img
        src={imgUrl}/>
      <InfoContent>
        <Info>
          <C2VText text={'카테고리'} type={'body'} weight={'700'}/>
          <Category type={category}/>
        </Info>
        <Info>
          <C2VText text={'위치'} type={'body'} weight={700}/>
          <C2VText text={cctv} type={'label'} color={Color.gray3}/>
        </Info>
        <Info>
          <C2VText text={'발생 시간'} type={'body'} weight={700}/>
          <C2VText text={currentTime} type={'label'} color={Color.gray3}/>
        </Info>
      </InfoContent>
      <InputContent>
        <C2VText text={'내용'} type={'body'} weight={700}/>
        <div style={{height: '4px'}}></div>
        <CTVInputArea placeholder={'내용을 입력하세요'} height={110} value={content}
                      onChange={(i) => setContent(i.target.value)}/>
      </InputContent>
      <ButtonContainer>
        <CTVButton isLoading={isLoading} type={'red'} onClick={() => {
          setIsLoading(true);
          report(category, '제목', content, '대구 어딘가', blob)
            .then(res => {
              setIsLoading(false);
              callback();
              console.log(res);
            })
            .catch(e => {
              setIsLoading(false);
              console.log(e)
            });
        }}>
          <C2VText text={'신고 완료'} type={'label'} color={Color.white}/>
        </CTVButton>
      </ButtonContainer>
    </Container>
  );
}