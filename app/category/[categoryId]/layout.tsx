import { getCategory } from '@/libs/microcms';
import CategoryItem from '@/components/category-item';

type Props = {
  children: React.ReactNode;
  params: {
    categoryId: string;
  };
};

export default async function TagsLayout({ children, params }: Props) {
  const { categoryId } = params;
  const category = await getCategory(categoryId);
  return (
    <div>
      <p className="mb-6">
        <CategoryItem category={category} hasLink={false} />
        の記事一覧
      </p>
      <div>{children}</div>
    </div>
  );
}
