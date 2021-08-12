interface IForms {
  forms: IForm[];
}

interface IForm {
  id: string;
  firstName: string;
  email: string;
  birthDate: string;
  country: string;
  drinks: string[];
  communic: string;
}

interface ISearchCards {
  docs: ISearch[];
  limit?: number;
  offset?: number;
  page?: number;
  pages?: number;
  total: number;
}

interface ISearch {
  _id: string;
  name: string;
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  race: string;
  wikiUrl: string;
}

interface ISortOrder {
  orderField: string;
  orderDir: boolean;
  setOrderField;
  setOrderDir;
}

declare module '*.svg' {
  import React from 'react';

  export const Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  const src: string;
  export default src;
}

// declare module '*.png' {
//   export const Png: React.FunctionComponent<React.SVGProps<SVGElement>>;

//   const src: string;
//   export default src;
// }
