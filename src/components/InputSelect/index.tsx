import React from 'react';
import { SelectLabel, SelectItemP, Select, Option } from './styled';

interface IInputSelect {
  inputName: string;
  label: string;
  choices: string[];
  value: string | string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  multiple: boolean;
}

const InputSelect: React.FC<IInputSelect> = ({
  inputName,
  label,
  choices,
  value,
  onChange,
  multiple = false,
}: IInputSelect) => (
  <SelectLabel htmlFor={inputName}>
    <SelectItemP>{label}</SelectItemP>
    <Select multiple={multiple} name={inputName} value={value} onChange={onChange}>
      {choices.map((item: string) => (
        <Option key={`key-${item}`}>{item}</Option>
      ))}
    </Select>
  </SelectLabel>
);
export default InputSelect;
