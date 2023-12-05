import C2VText from "../../components/text/Text";
import Category from "../../components/category/Category";
import {Container} from "./UiTestStyle";

export default function UiTest() {
  return (
    <Container>
      <C2VText text={'ss'} type={'title'}/>
      <C2VText text={'ss'} type={'headline'}/>
      <C2VText text={'ss'} type={'body'}/>
      <C2VText text={'ss'} type={'label'}/>
      <C2VText text={'ss'} type={'caption'}/>
      <C2VText text={'ss'} type={'mini'}/>

      <Category type={'산불'}/>
      <Category type={'홍수'}/>
      <Category type={'쓰나미'}/>
      <Category type={'안전'}/>

    </Container>
  )
}