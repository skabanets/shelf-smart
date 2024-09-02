import { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  changeValue: (value: string) => void;
}

export const Input = ({ label, value, changeValue, ...inputProps }: InputProps) => {
  const hadneledChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    changeValue(event.target.value);
  };

  return (
    <label className="label">
      {label}
      <input {...inputProps} onChange={hadneledChangeInput} value={value} className="input-field" />
    </label>
  );
};
