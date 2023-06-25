import { getCategoryList, getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';
import Sidebar from '@/components/sidebar';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: '北海道フリーランスライフ',
  description:
    '北海道札幌市を拠点にフリーランスエンジニアとして生活してます。実際にフリーランスになった経験から得られるフリーランスで知っておくべきことや、エンジニアとして必要な知識などを執筆したり、北海道でのテレワークや生活についての記事も執筆してます。',
  openGraph: {
    title: '北海道フリーランスライフ',
    description:
      '北海道札幌市を拠点にフリーランスエンジニアとして生活してます。実際にフリーランスになった経験から得られるフリーランスで知っておくべきことや、エンジニアとして必要な知識などを執筆したり、北海道でのテレワークや生活についての記事も執筆してます。',
    images: '/og-image.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  const categories = await getCategoryList({});
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header tags={tags.contents} categories={categories.contents} />
          <div className="flex-1 container mx-auto max-w-6xl flex flex-col lg:flex-row">
            <main className="w-full">{children}</main>
            <Sidebar tags={tags.contents} categories={categories.contents} />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
