import { Category, Tag } from '@/libs/microcms';
import SearchField from '@/components/search-field';
import TagList from '@/components/tag-list';

type Props = {
  tags: Tag[];
  categories: Category[];
};

export default function Sidebar({ tags, categories }: Props) {
  return (
    <aside className="w-full lg:w-96 lg:ml-3 flex flex-col">
      <SearchField />
      <h2>カテゴリー</h2>
      <h2>タグ</h2>
      <TagList tags={tags} />
    </aside>
  );
}
