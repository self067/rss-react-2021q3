import React from 'react';
import { ItemLabel, ItemP, ItemInput } from './styled';

interface IInputSh {
  inputName: string;
  inputType: string;
  label: string;
  // value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface IInput extends IInputSh {
  value: string;
}

interface IInputNum extends IInputSh {
  value: number;
  max: number;
}

const Input: React.FC<IInput> = ({ inputName, inputType, label, value, onChange }: IInput) => (
  <ItemLabel htmlFor={inputName}>
    <ItemP>{label}</ItemP>
    <ItemInput id={inputName} type={inputType} value={value} onChange={onChange} />
  </ItemLabel>
);

export const InputNum: React.FC<IInputNum> = ({
  inputName,
  inputType,
  label,
  value,
  max,
  onChange,
}: IInputNum) => (
  <ItemLabel htmlFor={inputName}>
    <ItemP>{label}</ItemP>
    <ItemInput
      id={inputName}
      type={inputType}
      value={value}
      onChange={onChange}
      max={max}
      min={1}
    />
  </ItemLabel>
);

export default Input;
