type Props = {
  text: string;
};

export default function SinglePageH2({ text }: Props) {
  return <h2 className="text-xl font-bold mt-12 pb-2 mb-4 border-b-2 border-base-200">{text}</h2>;
}
