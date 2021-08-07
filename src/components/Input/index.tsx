import React from 'react';
import { ItemLabel, ItemP, ItemInput } from './styled';

interface IInput {
  inputName: string;
  inputType: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<IInput> = ({ inputName, inputType, label, value, onChange }: IInput) => (
  <ItemLabel htmlFor={inputName}>
    <ItemP>{label}</ItemP>
    <ItemInput type={inputType} value={value} onChange={onChange} />
  </ItemLabel>
);

export default Input;
