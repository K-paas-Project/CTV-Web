import {CategoryContent, Container, DetailContent, DownContent} from "./CheckCeilStyle";
import C2VText from "../../../components/text/Text";
import Color from "../../../components/theme/color/Color";
import Category from "../../../components/category/Category";

export default function CheckCeil({model, callback}) {

  const D = new Date(model.dateTime);
  const dateText = `${D.getFullYear()}-${D.getMonth()}-${D.getDay()} ${D.getHours()}:${D.getMinutes()}:${D.getSeconds()}`
  let text = model.content;

  if (text.length > 24) {
    text = text.substr(0, 24) + '...';
  }

  return (
    <Container onClick={callback}>
      <CategoryContent>
        <Category type={model.category}/>
      </CategoryContent>
      <DownContent>
        <C2VText text={model.title} type={'body'} weight={700}/>
        <DetailContent>
          <C2VText text={text} type={'label'} color={Color.gray3}/>
          <C2VText text={dateText} type={'label'} color={Color.gray3}/>
        </DetailContent>
      </DownContent>
    </Container>
  )
}