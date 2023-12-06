import {Container, Content, SideBar} from "./CheckStyle";
import CheckCeil from "./component/CheckCeil";
import {useEffect, useState} from "react";
import {getReportAll} from "../../../data/service/api/ReportApi";

export default function Check() {

  const [arr, setArr] = useState([]);

  useEffect(() => {
    getReportAll()
      .then(response => {
        const lst = response.data.data;
        console.log(lst);
        setArr(lst);

      })
  }, []);

  return (
    <Container>
      <SideBar>
        {arr.map(i => <CheckCeil callback={() => {console.log('change')}} model={i}/>)}
      </SideBar>
      <Content>
      </Content>
    </Container>
  );
}