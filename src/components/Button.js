import '../../src/Button.css'

const Button = ({ Name, value, Click }) => {
  return (
    <button className={Name} onClick={Click}>
      {value}
    </button>
  );
};

export default Button
