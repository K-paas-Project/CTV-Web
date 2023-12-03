import {Container, DetailContent, DownContent} from "./CheckCeilStyle";
import C2VText from "../../../components/text/Text";
import Color from "../../../components/theme/color/Color";

export default function CheckCeil({text}) {
  return (
    <Container>
      <div>(화재)</div>
      <DownContent>
        <C2VText text={'dummy title'} type={'body'} weight={700}/>
        <DetailContent>
          <C2VText text={'dummy date'} type={'label'} color={Color.gray3}/>
          <C2VText text={'dummy author'} type={'label'} color={Color.gray3}/>
        </DetailContent>
      </DownContent>
    </Container>
  )
}