import React, { useState, useEffect, FormEventHandler } from 'react';
import Input from 'components/Input';
import InputRadio from 'components/InputRadio';
import InputCheckBox from 'components/InputCheckBox';
import InputSelect from 'components/InputSelect';
import ValidateStatus from 'components/ValidateStatus/styled';
import { FormWrap, FormButton } from './styled';
// interface IForm {
//   id: number;
//   name: string;
//   image: string;
//   species: string;
//   description: string;
//   country: string;
// }

interface IErrors {
  firstName?: boolean;
  secondName?: boolean;
  email?: boolean;
  birthDate?: boolean;
  country?: boolean;
  drinks?: boolean;
  communic?: boolean;
  agree?: boolean;
}

const Form: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Russia');
  const [drinks, setDrinks] = useState<string[]>([]);
  const [communic, setCommunic] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<IErrors>({});
  const [wasSubmit, setWasSubmit] = useState(false);

  const validate = () => {
    setErrors({});
    if (!agree) {
      setErrors(state => ({ ...state, agree: true }));
    }
    if (firstName === '') setErrors(state => ({ ...state, firstName: true }));
    if (secondName === '') setErrors(state => ({ ...state, secondName: true }));
    if (email === '') setErrors(state => ({ ...state, email: true }));
    if (birthDate === '') setErrors(state => ({ ...state, birthDate: true }));
    if (country === '') setErrors(state => ({ ...state, country: true }));
    if (drinks.length === 0) setErrors(state => ({ ...state, drinks: true }));
    if (communic === '') setErrors(state => ({ ...state, communic: true }));
  };

  useEffect(() => {
    if (wasSubmit) validate();
  }, [agree, firstName, secondName, email, birthDate, country, drinks, communic, wasSubmit]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    validate();
    setWasSubmit(true);
    console.log('email: ', email);
    console.log('birthDate: ', birthDate);
    console.log('country: ', country);
    console.log('drinks: ', drinks);
    console.log('communic: ', communic);
    console.log('agree: ', agree);
    if (Object.keys(errors).length === 0) {
      // if (!agree) 'Oh, come on. Agree, it will be fun';
      // if (communic === '') alert('Choose communic method');
    }
  };

  const handleChangeDrinksSelect = (target: EventTarget & HTMLSelectElement) => {
    const updatedOptions = [...target.options].filter(option => option.selected).map(x => x.value);
    setDrinks(updatedOptions);
  };
  // const year = dateOfBirth.getFullYear();
  // const month =
  //   dateOfBirth.getMonth() + 1 > 9
  //     ? dateOfBirth.getMonth() + 1
  //     : `0${dateOfBirth.getMonth() + 1}`;
  // const date = dateOfBirth.getDate() > 9 ? dateOfBirth.getDate() : `0${dateOfBirth.getDate()}`;

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Input
        inputName="firstName"
        inputType="text"
        label="Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      {errors.firstName && <ValidateStatus>what should I call you my friend?</ValidateStatus>}
      {/* <Input
        inputName="secondName"
        inputType="text"
        label="Second Name"
        value={secondName}
        onChange={e => setSecondName(e.target.value)}
      /> */}

      <Input
        inputName="email"
        inputType="email"
        label="E-Mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      {errors.email && (
        <ValidateStatus>I will definitely write to you, soon, probably</ValidateStatus>
      )}
      <Input
        inputName="birthDay"
        inputType="date"
        label="Birth Day"
        value={birthDate}
        onChange={e => {
          setBirthDate(e.target.value);
        }}
      />
      {errors.birthDate && (
        <ValidateStatus>when to sing &quot;happy birthday&quot; to you?</ValidateStatus>
      )}
      <InputSelect
        multiple={false}
        inputName="country"
        label="Select your country"
        choices={['Russia', 'German', 'Belaruss', 'Ukraine']}
        value={country}
        onChange={e => {
          setCountry(e.target.value);
        }}
      />
      {errors.country && <ValidateStatus>What is your FaterLand ?</ValidateStatus>}
      <InputSelect
        multiple
        inputName="drinks"
        label="Select your preffered drinks (multiselect)"
        choices={[
          'Vermouth',
          'Wine',
          'Cognac',
          'Whiskey',
          'Liquor',
          'Vodka',
          'Sherry',
          'Just water',
        ]}
        value={drinks}
        onChange={e => {
          handleChangeDrinksSelect(e.target);
        }}
      />
      {errors.drinks && <ValidateStatus>Please, choose at least water)</ValidateStatus>}
      <InputRadio
        inputName="Rad1"
        label="Choose a communication method"
        choices={['EMail', 'Phone', 'Telegram', 'WhatsUp']}
        value={communic}
        onChange={e => {
          setCommunic(e.target.value);
        }}
      />
      {errors.communic && <ValidateStatus>how can i contact you?</ValidateStatus>}
      <InputCheckBox
        inputName="agree"
        // inputType="checkbox"
        label="I agree to any madness"
        checked={agree}
        onChange={e => setAgree(e.target.checked)}
      />
      {errors.agree && <ValidateStatus>Oh, come on. Agree, it will be fun</ValidateStatus>}
      <FormButton>Submit</FormButton>
    </FormWrap>
  );
};
export default Form;
