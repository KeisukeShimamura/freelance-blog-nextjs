import { formatRichText, renderToc } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import PublishedDate from '@/components/published-date';
import TagList from '@/components/tag-list';
import CategoryItem from '@/components/category-item';
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
        <PublishedDate
          publishedDate={data.publishedAt || data.createdAt}
          updatedDate={data.updatedAt}
        />
      </div>
      <picture>
        <source
          type="image/webp"
          media="(max-width: 640px)"
          srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
        />
        <source
          type="image/webp"
          srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=800&h=600 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=800&h=600&dpr=2 2x`}
        />
        <img
          src={data.thumbnail?.url}
          alt=""
          className="w-full md:w-96 mb-10 mx-auto"
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      </picture>
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
