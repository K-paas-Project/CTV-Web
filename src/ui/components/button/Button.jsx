import {BaseButton} from "./ButtonStyle";
import Color from "../theme/color/Color";

export default function CTVButton({onClick, children, type}) {

  let property = generateProperty(type);

  function generateProperty(type) {
    let color, strokeColor, shadowColor;
    switch (type) {
      case 'blue':
        color = Color.primary;
        strokeColor = Color.primary;
        shadowColor = Color.primary2;
        break;
      case 'blueStroke':
        color = Color.white;
        strokeColor = Color.primary;
        shadowColor = Color.primary2;
        break;
      case 'red':
        color = Color.red;
        strokeColor = Color.red;
        shadowColor = Color.red2;
        break;
    }
    return {color, strokeColor, shadowColor};
  }

  return (
    <BaseButton
      color={property.color}
      strokeColor={property.strokeColor}
      onClick={onClick ? () => onClick() : () => {
      }}
      shadowColor={property.shadowColor}
    >
      {children}
    </BaseButton>
  );
};