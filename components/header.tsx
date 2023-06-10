import Image from 'next/image';
import Link from 'next/link';
import SearchField from '@/components/search-field';
import TagList from '@/components/tag-list';
import { Tag } from '@/libs/microcms';

type Props = {
  tags: Tag[];
};

export default function Header({ tags }: Props) {
  return (
    <header className="navbar bg-base-100 px-6 mb-12 border-b border-base-300">
      <div className="flex-1">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="SIMPLE"
            className="h-6 w-auto"
            width={348}
            height={133}
            priority
          />
        </Link>
      </div>
      <div className="flex-none">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <nav className="menu w-80 h-full p-4 bg-base-100 gap-2">
              <SearchField />
              <TagList tags={tags} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}