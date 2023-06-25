import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/libs/microcms';
import TagList from '@/components/tag-list';
import PublishedDate from '@/components/published-date';
import CategoryItem from '@/components/category-item';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <article className="mb-10 pb-5 border-b-2 md:border-b-0 border-base-200">
      <Link href={`/articles/${article.id}`} className="flex flex-col md:flex-row gap-10">
        {article.thumbnail ? (
          <picture>
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
            />
            <source
              type="image/webp"
              srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=180 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=180&dpr=2 2x`}
            />
            <img
              src={article.thumbnail?.url || `/noimage.png`}
              alt=""
              className="w-full md:w-60"
              width={article.thumbnail?.width}
              height={article.thumbnail?.height}
            />
          </picture>
        ) : (
          <Image
            className="w-full md:w-60"
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
          />
        )}
        <dl className="flex-1">
          <dt className="text-lg md:text-xl font-bold">{article.title}</dt>
          <dd className="flex flex-wrap gap-y-0 gap-x-6 items-center my-2">
            <CategoryItem category={article.category!} hasLink={false} />
            <TagList tags={article.tags} hasLink={false} />
          </dd>
          <dd>
            <PublishedDate
              publishedDate={article.publishedAt || article.createdAt}
              updatedDate={article.updatedAt}
            />
          </dd>
        </dl>
      </Link>
    </article>
  );
}
