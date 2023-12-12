import {Container, InfoContent, Video, CategoryContent} from "./RecommendStyle";
import C2VText from "../../../components/text/Text";
import Color from "../../../components/theme/color/Color";
import Category from "../../../components/category/Category";

export default function Recommend({model, callback, type}) {

  return (
    <Container onClick={() => callback()}>
      <Video src={model.url}/>
      {type ? <CategoryContent>
        <Category type={type}/>
      </CategoryContent> : null}
      <InfoContent>
        <C2VText text={model.location} type={'body'}/>
        <div style={{height: '4px'}}/>
        <C2VText text={model.cctv} type={'caption'} color={Color.gray3}/>
      </InfoContent>
    </Container>
  );
}