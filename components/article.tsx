import { formatRichText, renderToc } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import PublishedDate from '@/components/published-date';
import TagList from '@/components/tag-list';
import CategoryItem from '@/components/category-item';
import Image from 'next/image';
import TableOfContents from './table-of-contents';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <article className="flex flex-col justify-between">
      <h1 className="text-2xl mb-2 md:text-3xl font-bold text-start">{data.title}</h1>
      <div className="flex flex-col mb-16">
        <div className="flex items-center gap-6">
          <CategoryItem category={data.category!} />
          <TagList tags={data.tags} />
        </div>
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      <Image
        className="w-full md:w-96 mb-10 mx-auto"
        src={data.thumbnail?.url || `/noimage.png`}
        width={1600}
        height={1200}
        alt=""
      />
      <TableOfContents toc={renderToc(data.content)} />
      <div
        className={`w-full prose max-w-none
          prose-h2:border-b-2 prose-h2:border-base-200 prose-h2:pb-2
          prose-table:table prose-table:table-zebra
          prose-a:link prose-a:link-primary prose-a:link-hover
          prose-strong:bg-gradient-to-b prose-strong:from-transparent prose-strong:via-transparent prose-strong:to-yellow-400`}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
    </article>
  );
}
