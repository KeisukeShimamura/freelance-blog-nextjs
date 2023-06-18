type Props = {
  text: string;
  hasMarginTop?: boolean;
};

export default function SidebarH2({ text, hasMarginTop = false }: Props) {
  return (
    <h2
      className={`font-bold text-lg border-b border-primary mb-4 pb-2 ${
        hasMarginTop ? 'mt-6' : ''
      }`}
    >
      {text}
    </h2>
  );
}
