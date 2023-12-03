import {BaseInput} from "./InputStyle";

export default function CTVInput({ value, onChange}) {
  return (
    <BaseInput value={value} onChange={i => onChange(i)}/>
  );
}