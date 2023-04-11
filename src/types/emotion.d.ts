import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      colorBtn: string;
      activBtn: string;
      activText: string;
    };
    borderBtn: string;
    transitionFunction: string;
    spacing(value: number): string;
  }
}
