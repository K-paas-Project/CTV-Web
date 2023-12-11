import {Container, Content, DetailContent, Img, SideBar, TitleContent} from "./CheckStyle";
import CheckCeil from "./component/CheckCeil";
import {useEffect, useState} from "react";
import {getReportAll} from "../../../data/service/api/ReportApi";
import Category from "../../components/category/Category";
import C2VText from "../../components/text/Text";
import Color from "../../components/theme/color/Color";
import {LocalKeys} from "../../../data/local/LocalClient";
import {useNavigate} from "react-router-dom";
import {Url} from "../root/App";

export default function Check() {

  const [arr, setArr] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [model, setModel] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    getReportAll()
      .then(response => {
        const lst = response.data.data;
        console.log(lst);
        setArr(lst);
      })
      .catch(e => {
        navigate(Url.login);
        setIsLogin(false);
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
          <div style={{height:'36px'}}></div>
          <DetailContent>
            <C2VText text={'담당기관'} type={'body'}/>
            <div style={{width:'16px'}}></div>
            <C2VText text={model.reportOrganization} type={'label'} color={Color.gray3}/>
          </DetailContent>
          <div style={{height: '28px'}}></div>
          <DetailContent>
            <C2VText text={'접수상태'} type={'body'}/>
            <div style={{width:'16px'}}></div>
            <C2VText text={model.reportStatus} type={'label'} color={Color.gray3}/>
          </DetailContent>
          </TitleContent> : null}
      </Content>
    </Container>
  );
}