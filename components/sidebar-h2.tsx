type Props = {
  text: string;
};

export default function SidebarH2({ text }: Props) {
  return <h2 className="bg-base-200 font-bold text-xl my-4 p-2">{text}</h2>;
}
