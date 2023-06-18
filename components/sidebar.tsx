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
      <SidebarH2 text={`サイト内検索`} />
      <SearchField />
      <SidebarH2 text={`カテゴリー`} hasMarginTop={true} />
      <CategoryList categories={categories} />
      <SidebarH2 text={`タグ`} hasMarginTop={true} />
      <TagList tags={tags} />
    </aside>
  );
}
