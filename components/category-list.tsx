import { Category } from '@/libs/microcms';
import Link from 'next/link';

type Props = {
  categories?: Category[];
};
export default function CategoryList({ categories }: Props) {
  if (!categories) {
    return null;
  }
  return (
    <ul className="flex flex-col gap-2 my-2">
      {categories.map((category) => (
        <li key={category.id} className="border-b border-base-200 pb-2">
          <Link href={`/category/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}
