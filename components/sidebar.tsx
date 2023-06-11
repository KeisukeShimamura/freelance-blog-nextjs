import { Category, Tag } from '@/libs/microcms';
import SearchField from '@/components/search-field';
import TagList from '@/components/tag-list';
import CategoryList from '@/components/category-list';
import SidebarH2 from '@/components/sidebar-h2';

type Props = {
  tags: Tag[];
  categories: Category[];
};

export default function Sidebar({ tags, categories }: Props) {
  return (
    <aside className="w-full lg:w-96 mt-16 lg:mt-0 lg:ml-3 flex flex-col">
      <SearchField />
      <SidebarH2 text={`カテゴリー`} />
      <CategoryList categories={categories} />
      <SidebarH2 text={`タグ`} />
      <TagList tags={tags} />
    </aside>
  );
}
