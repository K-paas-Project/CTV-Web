import {BaseButton} from "./ButtonStyle";
import Color from "../theme/color/Color";

export default function CTVButton({isLoading, onClick, children, type, padding}) {

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
        shadowColor = Color.transparent;
        break;
      case 'red':
        color = Color.red;
        strokeColor = Color.red;
        shadowColor = Color.red2;
        break;
      default:
        color = Color.transparent;
        strokeColor = Color.transparent;
        shadowColor = Color.transparent;
        break;
    }
    return {color, strokeColor, shadowColor};
  }

  return (
    <BaseButton
      isLoading={isLoading}
      color={property.color}
      strokeColor={property.strokeColor}
      onClick={onClick ? () => onClick() : () => {
      }}
      shadowColor={property.shadowColor}
      padding={padding}
    >
      {children}
    </BaseButton>
  );
};