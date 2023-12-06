import {Container, InputContent} from "./LoginStyle";
import C2VText from "../../components/text/Text";
import CTVInput from "../../components/input/Input";
import {useState} from "react";
import CTVButton from "../../components/button/Button";
import Color from "../../components/theme/color/Color";
import {login} from "../../../data/service/api/AuthApi";

export default function Login() {

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <Container>
      <div style={{height: '24px'}}></div>
      <C2VText text={'로그인'} type={'title'}/>
      <InputContent style={{
        marginTop: '24px'
      }}>
        <C2VText text={'아이디'}/>
        <div style={{height: '4px'}}></div>
        <CTVInput value={id} onChange={i => setId(i.target.value)} placeholder={'아이디를 입력해 주세요'}/>
      </InputContent>
      <InputContent style={{
        marginTop: '12px'
      }}>
        <C2VText text={'비밀번호'}/>
        <div style={{height: '4px'}}></div>
        <CTVInput value={pw} onChange={i => setPw(i.target.value)} placeholder={'비밀번호를 입력해 주세요'}/>
      </InputContent>
      <div style={{height: '12px'}}></div>
      <CTVButton type={'blue'} onClick={() => {
        login(id, pw)
          .then(response => {
            const {accessToken, refreshToken} = response.data.data;
            console.log(':: login');
            console.log('accessToken -', accessToken);
            console.log('refreshToken -', refreshToken);
          })
          .catch(e => {
            console.log(e);
          })
      }}>
        <C2VText text={'로그인'} color={Color.white}/>
      </CTVButton>
    </Container>
  );
}