type btnType = 'submit' | 'reset' | 'button';
type colorType = 'blue' | 'red' | 'yellow';

export interface ButtonType {
  colorType: colorType;
  type: btnType;
  children: string;
  className?: string;
}
