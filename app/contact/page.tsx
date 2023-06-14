import Contact from '@/components/contact';

export const revalidate = 60;

export default async function Page() {
  return (
    <section className="py-16">
      <h1 className="text-center text-2xl font-bold mb-4">お問い合わせ</h1>
      <p className="text-center">開発依頼などのお仕事依頼も受け付けております。</p>
      <Contact />
    </section>
  );
}
