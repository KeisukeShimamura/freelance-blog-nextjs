import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';

export const formatDate = (date: string) => {
  const utcDate = new Date(date);
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  return format(jstDate, 'yyyy/MM/dd');
};

export const formatRichText = (richText: string) => {
  const $ = cheerio.load(richText);
  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class');
    const res = lang
      ? hljs.highlight($(elm).text(), { language: lang?.replace(/^language-/, '') || '' })
      : hljs.highlightAuto($(elm).text());
    $(elm).html(res.value);
  });
  return $.html();
};

export const renderToc = (richText: string) => {
  const $ = cheerio.load(richText);
  const headings = $('h1, h2, h3').toArray();
  const toc = headings.map((data) => ({
    // @ts-ignore
    text: data.children[0].data,
    // @ts-ignore
    id: data.attribs.id,
    // @ts-ignore
    name: data.name,
  }));

  return toc;
};
