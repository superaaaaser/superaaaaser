type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Card(CardProps: CardProps) {
  return (
    <div
      className={`${CardProps.className} shadow-no-blur dark:border-zinc-100 dark:shadow-no-blur-dark border-2`}
    >
      {CardProps.children}
    </div>
  );
}
