type Props = {
  toc: any[];
};

export default function TableOfContents({ toc }: Props) {
  return (
    <div className="mb-12 p-4 bg-gray-50">
      <p className="text-center font-bold text-lg">目次</p>
      <ul>
        {toc.map((data) => (
          <li
            key={data.id}
            className={`text-sm py-1.5 border-b border-base-300 before:content-['-'] before:mr-2 before:text-base-300 ${
              data.name == 'h3' ? 'ml-4' : ''
            }`}
          >
            <a href={`#${data.id}`}>{data.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
