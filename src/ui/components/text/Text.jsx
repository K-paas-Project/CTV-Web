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
        weight = 700;
        size = 24;
        break;
      case 'headline':
        weight = 700;
        size = 20;
        break;
      case 'body':
        weight = 500;
        size = 16;
        break;
      case 'label':
        weight = 500;
        size = 14;
        break;
      case 'caption':
        weight = 500;
        size = 12;
        break;
      case 'mini':
        weight = 500;
        size = 10;
        break;
    }
    return {weight, size};
  }

  return (
    <BaseText
      size={property.size ? property.size : size}
      color={color}
      weight={property.weight ? property.weight : weight}
    >{text}</BaseText>
  )
}

