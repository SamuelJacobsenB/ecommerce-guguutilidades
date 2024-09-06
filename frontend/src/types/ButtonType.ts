type btnType = 'submit' | 'reset' | 'button';
type colorType = 'blue' | 'red';

export interface ButtonType {
  colorType: colorType;
  type: btnType;
  children: string;
  className?: string;
}
