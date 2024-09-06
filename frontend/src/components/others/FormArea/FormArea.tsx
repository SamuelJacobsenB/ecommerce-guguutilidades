import { FormAreaType } from '@/types/FormAreaType';
import './FormArea.css';

const FormArea = (props: FormAreaType) => {
  return (
    <div className="form_area">
      <label htmlFor={props.name}>{props.labelText}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.inputPlaceholder}
        value={props.value}
        onChange={(evt) => props.setValue(evt.target.value)}
      />
    </div>
  );
};

export default FormArea;
