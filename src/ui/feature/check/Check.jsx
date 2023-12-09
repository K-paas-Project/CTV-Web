import {Container, Content, Img, SideBar, TitleContent} from "./CheckStyle";
import CheckCeil from "./component/CheckCeil";
import {useEffect, useState} from "react";
import {getReportAll} from "../../../data/service/api/ReportApi";
import Category from "../../components/category/Category";
import C2VText from "../../components/text/Text";
import Color from "../../components/theme/color/Color";
import {LocalKeys} from "../../../data/local/LocalClient";

export default function Check() {

  const [arr, setArr] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [model, setModel] = useState(null);

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
  let dateText;
  if (model != null) {
    const dateTime = new Date(model.dateTime);
    dateText = `${dateTime.getFullYear()}/${dateTime.getMonth()}/${dateTime.getDay()}`;
  }

  return (
    <Container>
      <SideBar>
        {arr.map(i => <CheckCeil callback={() => {
          setModel(i);
        }} model={i}/>)}
        {!isLogin ? <div>로그인 해 주세요!</div> : null}
      </SideBar>
      <Content>
        {model ? <TitleContent>
            <Category type={model.category}/>
            <div style={{
              display: 'flex',
              alignItems: 'end'
            }}>
              <div style={{margin:'4px 0 0 0'}}>
                <C2VText text={model.title} type={'title'}/>
              </div>
              <div style={{width: '16px'}}></div>
              <C2VText text={`${model.reportUserName} · ${dateText}`} type={'caption'} color={Color.gray3}/>
            </div>
            <C2VText text={model.content} type={'label'} color={Color.gray3}/>
          <Img src={model.imgUrl}/>
          </TitleContent> : null}
      </Content>
    </Container>
  );
}
// category: "string"
// content: "string"
// dateTime: "2023-12-09T23:21:55.671587"
// id: 14
// imgUrl: "https://ctv.kr.object.ncloudstorage.com/images/images.png"
// location: "string"
// reportOrganization: "대기중"
// reportStatus: "접수됨"
// reportUserName: "익명의 신고자"
// title