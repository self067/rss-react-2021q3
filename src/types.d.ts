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
