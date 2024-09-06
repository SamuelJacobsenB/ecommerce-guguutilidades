import { Dispatch, SetStateAction } from 'react';

export interface FormAreaType {
  name: string;
  type: string;
  labelText: string;
  inputPlaceholder: string;
  minLength?: number;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
