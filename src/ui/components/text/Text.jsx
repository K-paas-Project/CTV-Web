// export interface TextProps {
//   theme?: TextColor
//   weight?: TextWeight
//   size?: number
//   height?: TextHeight
//   centered?: boolean
//   cropped?: boolean
//   nowrap?: boolean
// }
import Color from "../theme/color/Color";
import {BaseText} from "./TextStyle";

export default function C2VText({ color, weight, size, type, text }) {

  let property = generateProperty(type);

  function generateProperty(type) {
    let color, weight, size;
    switch (type) {
      case 'title':
        color = Color.black;
        weight = 700;
        size = 24;
        break;
      case 'headline':
        color = Color.black;
        weight = 700;
        size = 20;
        break;
      case 'body':
        color = Color.black;
        weight = 500;
        size = 16;
        break;
      case 'label':
        color = Color.black;
        weight = 500;
        size = 14;
        break;
      case 'caption':
        color = Color.black;
        weight = 500;
        size = 12;
        break;
      case 'mini':
        color = Color.black;
        weight = 500;
        size = 10;
        break;
    }
    return {color, weight, size};
  }

  return (
    <BaseText
      size={property.size}
      color={property.color}
      weight={property.weight}
    >{text}</BaseText>
  )
}

