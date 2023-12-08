import {Container, Content, InputContent} from "./JoinStyle";
import C2VText from "../../components/text/Text";
import CTVInput from "../../components/input/Input";
import {useState} from "react";
import CTVButton from "../../components/button/Button";
import Color from "../../components/theme/color/Color";
import {join, login} from "../../../data/service/api/AuthApi";
import {useNavigate} from "react-router-dom";
import {Url} from "../root/App";

export default function Join() {

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  return (
    <Container>
      <div style={{height: '24px'}}></div>
      <C2VText text={'회원가입'} type={'title'}/>
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
        <CTVInput isPw={true} value={pw} onChange={i => setPw(i.target.value)} placeholder={'비밀번호를 입력해 주세요'}/>
      </InputContent>
      <InputContent style={{
        marginTop: '12px'
      }}>
        <C2VText text={'이름'}/>
        <div style={{height: '4px'}}></div>
        <CTVInput value={name} onChange={i => setName(i.target.value)} placeholder={'이름을 입력해 주세요'}/>
      </InputContent>
      <InputContent style={{
        marginTop: '12px'
      }}>
        <C2VText text={'소속'}/>
        <div style={{height: '4px'}}></div>
        <CTVInput value={org} onChange={i => setOrg(i.target.value)} placeholder={'소속을 입력해 주세요'}/>
      </InputContent>
      <div style={{height: '24px'}}></div>
      <Content>
        <CTVButton isLoading={isLoading} type={'blue'} onClick={() => {
          setIsLoading(true);
          join(id, pw, name, org)
            .then(response => {
              setIsLoading(false);
              console.log('join success');
              navigate(Url.login);
            })
            .catch(e => {
              alert('회원가입 실패', e);
              setIsLoading(false);
              console.log(e);
            });
        }}>
          <C2VText text={'회원가입'} color={Color.white}/>
        </CTVButton>
        <div style={{width: '8px'}}></div>
        <CTVButton type={'blueStroke'} onClick={() => navigate(Url.login)}>
          <C2VText text={'로그인'}/>
        </CTVButton>
      </Content>

    </Container>
  );
}