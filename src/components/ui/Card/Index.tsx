type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Card(CardProps: CardProps) {
  return (
    <div className={`${CardProps.className} shadow-no-blur border-2`}>
      {CardProps.children}
    </div>
  );
}
