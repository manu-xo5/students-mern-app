import './input.css';

const Input = ({
  containerClass = '',
  labelClass = '',
  className = '',
  as: As = 'input',
  label,
  ...props
}) => (
  <>
    <label
      className={`field-label ${labelClass}}`}
      htmlFor={props.id || props.name}
    >
      {label}
    </label>
    <As className={`field-input ${className}`} {...props} />
  </>
);

export default Input;
