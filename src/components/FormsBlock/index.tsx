import React, { useState } from 'react';
import Form from 'components/Form';
import FormList from 'components/FormList';

const FormBlock: React.FC = () => {
  const [forms, setForms] = useState<IForm[]>([]);

  return (
    <>
      <Form setForms={setForms} />
      <FormList forms={forms} />
    </>
  );
};
export default FormBlock;
