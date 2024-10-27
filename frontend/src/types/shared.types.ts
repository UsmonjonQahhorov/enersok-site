import type { BaseSyntheticEvent } from 'react';

export type Image = {
  url: string;
  width: number;
  height: number;
  name: string;
};

export type FormTargetEvent =
  | BaseSyntheticEvent<object, HTMLFormElement, HTMLFormElement>
  | undefined;