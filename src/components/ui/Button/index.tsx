type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={` font-bold font-jetbrains shadow-no-blur ${props.className}`}
    >
      {props.children}
    </button>
  );
}
