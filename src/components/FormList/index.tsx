import React from 'react';

import { FormsWrapper, FormCard, FormItem } from './styled';

const FormList: React.FC<IForms> = ({ forms }: IForms) => (
  <FormsWrapper>
    {forms.map((f: IForm) => (
      <FormCard key={f.id}>
        <FormItem>Name: {f.firstName}</FormItem>
        <FormItem>EMail: {f.email}</FormItem>
        <FormItem>Birth Date: {f.birthDate}</FormItem>
        <FormItem>Country: {f.country}</FormItem>
        <FormItem>Communic: {f.communic}</FormItem>
        <FormItem>Drinks: {f.drinks.map(i => `${i} `)}</FormItem>
      </FormCard>
    ))}
  </FormsWrapper>
);

export default FormList;
