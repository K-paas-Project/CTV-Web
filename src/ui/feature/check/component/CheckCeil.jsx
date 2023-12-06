import {Container, DetailContent, DownContent} from "./CheckCeilStyle";
import C2VText from "../../../components/text/Text";
import Color from "../../../components/theme/color/Color";

export default function CheckCeil({model, callback}) {
  return (
    <Container onClick={callback}>
      <div>{model.category}</div>
      <DownContent>
        <C2VText text={model.title} type={'body'} weight={700}/>
        <DetailContent>
          <C2VText text={model.content} type={'label'} color={Color.gray3}/>
          <C2VText text={model.dateTime} type={'label'} color={Color.gray3}/>
        </DetailContent>
      </DownContent>
    </Container>
  )
}