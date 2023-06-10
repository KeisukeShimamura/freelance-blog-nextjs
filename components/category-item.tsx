import { Category } from '@/libs/microcms';
import Link from 'next/link';

type Props = {
  category: Category;
  hasLink?: boolean;
};

export default function CategoryItem({ category, hasLink = true }: Props) {
  if (hasLink) {
    return (
      <Link
        href={`/category/${category.id}`}
        className="badge badge-primary badge-outline badge-lg rounded-md"
      >
        {category.name}
      </Link>
    );
  }
  return (
    <span className="badge badge-primary badge-outline badge-lg rounded-md">{category.name}</span>
  );
}
