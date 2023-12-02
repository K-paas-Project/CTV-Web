import {AppContainer} from "./AppStyle";
import {GlobalStyle} from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../home/Home";
import UiTest from "../uitest/UiTest";
import Nav from "../../components/nav/Nav";

function App() {
  return (
    <AppContainer>
      <GlobalStyle/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/ui-test'} element={<UiTest/>}></Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
