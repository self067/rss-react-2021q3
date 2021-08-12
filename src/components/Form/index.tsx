import React, { useState, useEffect, FormEventHandler } from 'react';
import Input from 'components/Input';
import InputRadio from 'components/InputRadio';
import InputCheckBox from 'components/InputCheckBox';
import InputSelect from 'components/InputSelect';
import ValidateStatus from 'components/ValidateStatus/styled';
import { v4 as uuidv4 } from 'uuid';
import { FormWrap, FormButton, FormStatus } from './styled';

interface IErrors {
  firstName?: boolean;
  secondName?: boolean;
  email?: boolean;
  birthDate?: boolean;
  country?: boolean;
  drinks?: boolean;
  communic?: boolean;
  agree?: boolean;
  firstTime?: boolean;
}

interface IFormProp {
  setForms: React.Dispatch<React.SetStateAction<IForm[]>>;
}

const Form: React.FC<IFormProp> = ({ setForms }: IFormProp) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Russia');
  const [drinks, setDrinks] = useState<string[]>([]);
  const [communic, setCommunic] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<IErrors>({});
  const [empty, setEmpty] = useState(true);
  const [formStatus, setFormStatus] = useState(false);

  const resetForm = () => {
    setFirstName('');
    setEmail('');
    setBirthDate('');
    setCountry('Russia');
    setDrinks([]);
    setCommunic('');
    setAgree(false);

    setEmpty(true);
  };

  const validate = () => {
    setErrors({});
    let errs = 0;
    if (!agree) {
      setErrors(state => ({ ...state, agree: true }));
      errs += 1;
    }
    if (firstName === '') {
      setErrors(state => ({ ...state, firstName: true }));
      errs += 1;
    }
    if (email === '') {
      setErrors(state => ({ ...state, email: true }));
      errs += 1;
    }
    if (birthDate === '') {
      setErrors(state => ({ ...state, birthDate: true }));
      errs += 1;
    }
    if (country === '') {
      setErrors(state => ({ ...state, country: true }));
      errs += 1;
    }
    if (drinks.length === 0) {
      setErrors(state => ({ ...state, drinks: true }));
      errs += 1;
    }
    if (communic === '') {
      setErrors(state => ({ ...state, communic: true }));
      errs += 1;
    }

    return !errs;
  };

  useEffect(() => {
    if (!empty) {
      validate();
      setFormStatus(false);
    } else setEmpty(false);
  }, [agree, firstName, email, birthDate, country, drinks, communic]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    // setWasSubmit(true);
    // validate();
    if (validate()) {
      // if (Object.keys(errors).length === 0) {

      setForms(state => [
        ...state,
        { id: uuidv4(), firstName, email, birthDate, country, drinks, communic },
      ]);
      // setWasSubmit(false);
      setFormStatus(true);
      resetForm();
    }
  };

  const handleChangeDrinksSelect = (target: EventTarget & HTMLSelectElement) => {
    const updatedOptions = [...target.options].filter(option => option.selected).map(x => x.value);
    setDrinks(updatedOptions);
  };

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
        // value={communic}
        onChange={e => {
          setCommunic(e.target.value);
        }}
      />
      {errors.communic && <ValidateStatus>how can i contact you?</ValidateStatus>}
      <InputCheckBox
        inputName="agree"
        label="I agree to any madness"
        checked={agree}
        onChange={e => setAgree(e.target.checked)}
      />
      {errors.agree && <ValidateStatus>Oh, come on. Agree, it will be fun</ValidateStatus>}
      <FormButton>Submit</FormButton>
      {formStatus && <FormStatus>New form created</FormStatus>}
    </FormWrap>
  );
};
export default Form;
