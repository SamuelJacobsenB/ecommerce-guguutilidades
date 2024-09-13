import { ButtonType } from '@/types/ButtonType';
import './Button.css';

const Button = (props: ButtonType) => {
  return (
    <button
      type={props.type}
      className={`btn ${props.colorType} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
