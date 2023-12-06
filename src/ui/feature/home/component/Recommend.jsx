import {Container, InfoContent, Video} from "./RecommendStyle";
import C2VText from "../../../components/text/Text";
import Color from "../../../components/theme/color/Color";

export default function Recommend(model) {
  return (
    <Container>
      <Video src={model.model}/>
      <InfoContent>
        <C2VText text={'dummy title'} type={'body'}/>
        <div style={{height: '4px'}}/>
        <C2VText text={'dummy body'} type={'caption'} color={Color.gray3}/>
      </InfoContent>
    </Container>
  );
}