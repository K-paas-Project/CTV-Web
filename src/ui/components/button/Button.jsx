import {BaseButton} from "./ButtonStyle";

export default function CTVButton({onClick, children}) {
  return (
    <BaseButton onClick={onClick ? () => onClick() : () => {
    }}>
      {children}
    </BaseButton>
  );
};