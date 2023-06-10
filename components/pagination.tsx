import Link from 'next/link';
import { LIMIT } from '@/constants';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export default function Pagination({ totalCount, current = 1, basePath = '', q }: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT) }).map((_, i) => i + 1);
  return (
    <div className="join w-full justify-center">
      {pages.map((p) => (
        <div key={p}>
          {current !== p ? (
            <Link href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}>
              <button className="join-item btn">{p}</button>
            </Link>
          ) : (
            <button className="join-item btn btn-active">{p}</button>
          )}
        </div>
      ))}
    </div>
  );
}
