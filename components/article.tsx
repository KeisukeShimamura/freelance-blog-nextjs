import { formatRichText } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import PublishedDate from '@/components/published-date';
import TagList from '@/components/tag-list';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main className="flex flex-col justify-between items-center">
      <h1 className="text-2xl mb-5 md:text-3xl md:mb-6 font-bold text-center">{data.title}</h1>
      <TagList tags={data.tags} />
      <p className="text-sm text-center mx-10 my-6">{data.description}</p>
      <div className="flex items-center mb-16">
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      <picture>
        <source
          type="image/webp"
          media="(max-width: 640px)"
          srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
        />
        <source
          type="image/webp"
          srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
        />
        <img
          src={data.thumbnail?.url}
          alt=""
          className="w-full mb-10"
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      </picture>
      <div
        className="w-full prose"
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
    </main>
  );
}
