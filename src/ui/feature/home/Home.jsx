import {Container, MainContent, MainVideo} from "./HomeStyle";

export default function Home() {
  return (
    <Container>
      <MainContent>
        <MainVideo controls autoPlay={true}>
          <source type={'video/mp4'} src={''}/>
        </MainVideo>
      </MainContent>
    </Container>
  );
}