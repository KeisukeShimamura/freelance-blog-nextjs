import { Category, Tag } from '@/libs/microcms';
import SearchField from '@/components/search-field';
import TagList from '@/components/tag-list';
import CategoryList from './category-list';

type Props = {
  tags: Tag[];
  categories: Category[];
};

export default function Sidebar({ tags, categories }: Props) {
  return (
    <aside className="w-full lg:w-96 mt-16 lg:mt-0 lg:ml-3 flex flex-col">
      <SearchField />
      <h2 className="bg-base-200 font-bold text-xl my-4 p-2">カテゴリー</h2>
      <CategoryList categories={categories} />
      <h2 className="bg-base-200 font-bold text-xl my-4 p-2">タグ</h2>
      <TagList tags={tags} />
    </aside>
  );
}
