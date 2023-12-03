import {BaseInputArea} from "./InputAreaStyle";

export default function CTVInputArea({ height, value, onChange, placeholder}) {
  return (
    <BaseInputArea height={height} value={value} onChange={i => onChange(i)} placeholder={placeholder}/>
  );
}