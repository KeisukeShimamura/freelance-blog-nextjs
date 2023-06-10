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
          <Image
            className="w-full md:w-60"
            src={article.thumbnail?.url || `/noimage.png`}
            width={1600}
            height={1200}
            alt=""
          />
        ) : (
          <Image
            className="w-full md:w-60"
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
          />
        )}
        <dl>
          <dt className="text-lg md:text-xl font-bold">{article.title}</dt>
          <dd className="flex gap-6 items-center">
            <CategoryItem category={article.category!} hasLink={false} />
            <TagList tags={article.tags} hasLink={false} />
          </dd>
          <dd>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </dd>
        </dl>
      </Link>
    </article>
  );
}
