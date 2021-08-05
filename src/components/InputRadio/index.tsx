import React from 'react';
import { RadioLabel, RadioItemLabel, RadioItemP, RadioItemInput } from './styled';

interface IInput {
  inputName: string;
  label: string;
  choices: string[];
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputRadio: React.FC<IInput> = ({ inputName, label, choices, value, onChange }: IInput) => (
  <RadioLabel htmlFor={inputName}>
    <RadioItemP>{label}</RadioItemP>
    {choices.map((item: string) => (
      <RadioItemLabel key={`key-${item}`} htmlFor={`ir-${item}`}>
        <RadioItemInput
          type="radio"
          name={inputName}
          value={item}
          id={`ir-${item}`}
          onChange={onChange}
        />
        {item}
      </RadioItemLabel>
    ))}
  </RadioLabel>
);

export default InputRadio;
