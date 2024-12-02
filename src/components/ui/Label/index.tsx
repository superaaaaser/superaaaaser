type Props = {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
};

function Label(props: Props) {
  return (
    <>
      <label htmlFor={props.htmlFor} className={props.className}>
        {props.children}
      </label>
    </>
  );
}

export default Label;
