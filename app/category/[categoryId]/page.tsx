import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/pagination';
import ArticleList from '@/components/article-list';

type Props = {
  params: {
    categoryId: string;
  };
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const { categoryId } = params;
  const data = await getList({
    limit: LIMIT,
    filters: `category[equals]${categoryId}`,
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath={`/category/${categoryId}`} />
    </>
  );
}
