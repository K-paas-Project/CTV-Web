import {Container, Content, SideBar} from "./CheckStyle";
import CheckCeil from "./component/CheckCeil";
import {useEffect, useState} from "react";
import {getReportAll} from "../../../data/service/api/ReportApi";

export default function Check() {

  const [arr, setArr] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    getReportAll()
      .then(response => {
        const lst = response.data.data;
        console.log(lst);
        setArr(lst);
      })
      .catch(e => {
        setIsLogin(false);
        alert('로그인 해 주세요!');
      })
  }, []);

  return (
    <Container>
      <SideBar>
        {arr.map(i => <CheckCeil callback={() => {console.log('change')}} model={i}/>)}
        {!isLogin ? <div>로그인 해 주세요!</div> : null}
      </SideBar>
      <Content>

      </Content>
    </Container>
  );
}