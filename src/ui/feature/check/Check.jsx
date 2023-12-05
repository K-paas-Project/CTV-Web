import {Container, Content, SideBar} from "./CheckStyle";
import CheckCeil from "./component/CheckCeil";

export default function Check() {

  const arr = [1, 2, 3, 4]

  return (
    <Container>
      <SideBar>
        {arr.map(i => <CheckCeil callback={() => {console.log('change')}} text={i}/>)}
      </SideBar>
      <Content>
      </Content>
    </Container>
  );
}