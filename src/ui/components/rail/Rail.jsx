import {Container} from "./RailStyle";
import RailCeil from "./component/RailCeil";

export default function Rail() {

  const arr = [1,2,3]

  return (
    <Container>
      {arr.map(i => (<RailCeil text={i}/>))}
    </Container>
  );
}