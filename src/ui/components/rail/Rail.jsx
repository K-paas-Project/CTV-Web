import {Container} from "./RailStyle";
import RailCeil from "./component/RailCeil";
import IcCheck1 from '../../../asset/ic_check_1.svg';
import IcCheck2 from '../../../asset/ic_check_2.svg';
import IcHome1 from '../../../asset/ic_home_1.svg';
import IcHome2 from '../../../asset/ic_home_2.svg';
import IcMy1 from '../../../asset/ic_my_1.svg';
import IcMy2 from '../../../asset/ic_my_2.svg';
import {Url} from "../../feature/root/App";
import {useNavigate} from "react-router-dom";

export default function Rail() {

  const pathName = window.location.pathname;

  const navigate = useNavigate();

  const arr = [
    {
      icon: IcHome1,
      selectedIcon: IcHome2,
      text: '홈',
      url: Url.homeUrl
    },
    {
      icon: IcCheck1,
      selectedIcon: IcCheck2,
      text: '신고 기록 확인',
      url: Url.checkUrl
    },
    {
      icon: IcMy1,
      selectedIcon: IcMy2,
      text: '내 정보',
      url: Url.myUrl
    }
  ]

  return (
    <Container>
      {arr.map((i) => (<RailCeil callback={() => navigate(i.url)} icon={pathName == i.url ? i.selectedIcon : i.icon} text={i.text}/>))}
    </Container>
  );
};