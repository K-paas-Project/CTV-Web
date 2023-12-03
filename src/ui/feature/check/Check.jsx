import {Container, SideBar} from "./CheckStyle";
import CheckCeil from "./component/CheckCeil";

export default function Check() {

  const arr = [1, 2, 3, 4]

  return (
    <Container>
      <SideBar>
        {arr.map(i => <CheckCeil text={i}/>)}
      </SideBar>
    </Container>
  );
}