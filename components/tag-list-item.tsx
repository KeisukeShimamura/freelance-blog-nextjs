import Link from 'next/link';
import { Tag } from '@/libs/microcms';

type Props = {
  tag: Tag;
  hasLink?: boolean;
};

export default function TagListItem({ tag, hasLink = true }: Props) {
  if (hasLink) {
    return (
      <Link href={`/tags/${tag.id}`} className="bg-base-200 py-1 px-2 rounded-md text-xs">
        #{tag.name}
      </Link>
    );
  }
  return <span className="bg-base-200 py-1 px-2 rounded-md text-xs">#{tag.name}</span>;
}
