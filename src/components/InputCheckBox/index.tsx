import React from 'react';
import { ItemLabel, ItemSpan, ItemInput } from './styled';

interface IInputCheckBox {
  inputName: string;

  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputCheckBox: React.FC<IInputCheckBox> = ({
  inputName,
  label,
  checked,
  onChange,
}: IInputCheckBox) => (
  <ItemLabel htmlFor={inputName}>
    <ItemInput type="checkbox" checked={checked} onChange={onChange} />
    <ItemSpan>{label}</ItemSpan>
  </ItemLabel>
);

export default InputCheckBox;
