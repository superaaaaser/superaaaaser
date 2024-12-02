type Props = {
  type?: string;
  divClassName?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  id?: string;
};

function Input(props: Props) {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      className={`${props.className} border-black`}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
