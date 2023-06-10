import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/pagination';
import ArticleList from '@/components/article-list';

type Props = {
  params: {
    categoryId: string;
    current: string;
  };
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const { categoryId } = params;
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
    filters: `category[equals]${categoryId}`,
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        current={current}
        basePath={`/category/${categoryId}`}
      />
    </>
  );
}
