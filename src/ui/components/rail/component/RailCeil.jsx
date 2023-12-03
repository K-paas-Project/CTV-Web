import {Container, Content, Icon} from "./RailCeilStyle";
import C2VText from "../../text/Text";

export default function RailCeil({icon, text, callback}) {
  return (
    <Container onClick={callback}>
      <Content>
        <Icon src={icon}/>
        <div style={{ width: '8px'}}></div>
        <C2VText text={text}/>
      </Content>
    </Container>
  )
}