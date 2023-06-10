import { getCategoryList, getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';
import Sidebar from '@/components/sidebar';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Simple Blog',
  description: 'A simple blog presented by microCMS',
  openGraph: {
    title: 'Simple Blog',
    description: 'A simple blog presented by microCMS',
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
          <Header tags={tags.contents} />
          <div className="flex-1 container mx-auto flex flex-col lg:flex-row">
            <main className="w-full">{children}</main>
            <Sidebar tags={tags.contents} categories={categories.contents} />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
