import Color from "../theme/color/Color";
import {BaseCategory} from "./CategoryStyle";
import C2VText from "../text/Text";

export default function Category({type}) {

  let color1, color2;

  switch (type) {
    case '산불':
      color1 = Color.red3;
      color2 = Color.red;
      break;
    case '쓰나미':
      color1 = Color.blue3;
      color2 = Color.blue2;
      break;
    case '홍수':
      color1 = Color.brown2;
      color2 = Color.brown;
      break;
    case '안전':
      color1 = Color.green2;
      color2 = Color.green;
      break;
  }

  return (
    <BaseCategory color={color1}>
      <C2VText text={type} color={color2}/>
    </BaseCategory>
  );
}