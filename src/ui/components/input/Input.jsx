import {BaseInput} from "./InputStyle";

export default function CTVInput({ value, onChange, placeholder}) {
  return (
    <BaseInput value={value} onChange={i => onChange(i)} placeholder={placeholder}/>
  );
}