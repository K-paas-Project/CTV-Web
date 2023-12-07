import {Container, InfoContent, Video, CategoryContent} from "./RecommendStyle";
import C2VText from "../../../components/text/Text";
import Color from "../../../components/theme/color/Color";
import Category from "../../../components/category/Category";

export default function Recommend({model, callback, type}) {

  return (
    <Container onClick={() => callback()}>
      <Video src={model}/>
      {type ? <CategoryContent>
        <Category type={'산불'}/>
      </CategoryContent> : null}
      <InfoContent>
        <C2VText text={'dummy title'} type={'body'}/>
        <div style={{height: '4px'}}/>
        <C2VText text={'dummy body'} type={'caption'} color={Color.gray3}/>
      </InfoContent>
    </Container>
  );
}