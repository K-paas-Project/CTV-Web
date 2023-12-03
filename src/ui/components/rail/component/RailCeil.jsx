import {Container, Content} from "./RailCeilStyle";
import C2VText from "../../text/Text";

export default function RailCeil({icon, text}) {
  return (
    <Container>
      <Content>
        <C2VText text={text}/>
      </Content>
    </Container>
  )
}