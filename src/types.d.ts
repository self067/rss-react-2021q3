interface ISearchAction {
  type: string;
  payload: {
    searchCards: ISearchCards;
  };
}
// interface IApp {
//   searchResults: ISearch;
//   searchStringComplete: string;
//   orderField: string;
//   orderDir: boolean;
//   isLoading: boolean;
//   loadError: string;
//   limit: number;
//   page: number;
// }

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
  communicate: string;
}

interface ISearchCards {
  docs: ISearch[];
  limit?: number;
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
  // import React from 'react';

  // export const Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const src: string;
  export default src;
}

// declare module '*.png' {
//   export const Png: React.FunctionComponent<React.SVGProps<SVGElement>>;

//   const src: string;
//   export default src;
// }
