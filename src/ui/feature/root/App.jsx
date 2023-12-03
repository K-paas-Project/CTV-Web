import {AppContainer} from "./AppStyle";
import {GlobalStyle} from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../home/Home";
import UiTest from "../uitest/UiTest";
import Nav from "../../components/nav/Nav";
import Rail from "../../components/rail/Rail";
import {useState} from "react";

export const Url = {
  homeUrl: '/',
  checkUrl: '/check',
  myUrl: '/my',
  uiTestUrl: '/ui-test',
};

function App() {

  const [isRail, setIsRail] = useState(false);

  return (
    <AppContainer>
      <GlobalStyle/>
      <BrowserRouter>
        {isRail ? <Rail/> : null}
        <Nav callback={() => setIsRail(i => !i)}/>
        <Routes>
          <Route path={Url.homeUrl} element={<Home/>}></Route>
          <Route path={Url.checkUrl} element={<Home/>}></Route>
          <Route path={Url.myUrl} element={<Home/>}></Route>
          <Route path={Url.uiTestUrl} element={<UiTest/>}></Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
