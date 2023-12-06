import {BaseInput} from "./InputStyle";

export default function CTVInput({isPw, value, onChange, placeholder}) {
  return (
    <BaseInput type={isPw ? 'password' : 'text'} value={value} onChange={i => onChange(i)} placeholder={placeholder}/>
  );
};