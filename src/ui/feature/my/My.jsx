import {useEffect, useState} from "react";
import {Container, Content, Info} from "./MyStyle";
import {getProfile} from "../../../data/service/api/AuthApi";
import C2VText from "../../components/text/Text";

export default function My() {

  const [userAccount, setUserAccount] = useState('');
  const [userName, setUserName] = useState('');
  const [organization, setOrganization] = useState('');

  useEffect(() => {
    getProfile()
      .then(res => {
        const {userAccount, userName, organization} = res.data.data;
        console.log(userAccount, userName, organization);
        setUserAccount(userAccount);
        setUserName(userName);
        setOrganization(organization);
      })
      .catch(e => {
        console.log(e);
      })
  }, []);

  return (
    <Container>
      <C2VText text={'내 정보'} type={'title'}/>
      <div style={{height: '24px'}}></div>
      <Info>
        <Content>
          <C2VText text={'아이디'} type={'title'}/>
          <div style={{width: '120px'}}></div>
          <C2VText text={userAccount} type={'headline'} weight={'normal'}/>
        </Content>
        <div style={{height: '12px'}}></div>
        <Content>
          <C2VText text={'이름'} type={'title'}/>
          <div style={{width: '120px'}}></div>
          <C2VText text={userName} type={'headline'} weight={'normal'}/>
        </Content>
      </Info>
    </Container>
  );
}