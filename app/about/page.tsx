import SinglePageH2 from '@/components/single-page-h2';

export const revalidate = 60;

export default async function Page() {
  return (
    <section className="py-16">
      <h1 className="text-center text-2xl font-bold mb-4">当ブログについて</h1>
      <p>
        はじめまして。当ブログ「北海道フリーランスライフ」を管理しているマムと申します。
        <br />
        北海道札幌市を拠点にフリーランスエンジニアとして生活してます。
        実際にフリーランスになった経験から得られるフリーランスで知っておくべきことや、エンジニアとして必要な知識などを執筆したり、
        北海道でのテレワークや生活についての記事も執筆してます。
      </p>
      <SinglePageH2 text="エンジニア経歴や経験" />
      <p className="mb-4">
        大学卒業から約10年間会社員として働き、現在はフリーランスエンジニアとして活動しております。
      </p>
      <ul className="steps steps-vertical">
        <li className="step step-primary">
          <div className="flex flex-col items-start mb-6">
            <strong>システム受託会社（2013/04〜2017/10）</strong>
            <p className="text-start text-sm">
              様々な企業の業務システムの開発や導入に携わってきました。Webシステムの開発が少なくスキルアップのため、転職を決意。
            </p>
          </div>
        </li>
        <li className="step step-primary">
          <div className="flex flex-col items-start mb-6">
            <strong>人材サービス会社（2017/11〜2022/10）</strong>
            <p className="text-start text-sm">
              自社サービスを行なっている会社のシステム開発部へ転職。プログラミングはもちろん
              <strong className="bg-gradient-to-b from-transparent via-transparent to-yellow-400">
                SEOや集客なども考えながら
              </strong>
              開発をメインに業務実施。
            </p>
          </div>
        </li>
        <li className="step step-primary">
          <div className="flex flex-col items-start mb-6">
            <strong>フリーランス（2022/11〜）</strong>
            <p className="text-start text-sm">
              プログラミングによるサイト改修などをメインに行い、
              <strong className="bg-gradient-to-b from-transparent via-transparent to-yellow-400">
                集客やデザインなども適宜対応
              </strong>
              しております。
            </p>
          </div>
        </li>
      </ul>
      <p className="mb-4">
        言語やフレームワークは Next.js / Nuxt.js / Laravel / Ruby on Rails
        をメインに対応しています。
      </p>
      <SinglePageH2 text="当ブログを開設した理由" />
      <p className="mb-4">エンジニアがフリーランスになる際の懸念事項は以下ではないでしょうか？</p>
      <ul className="list-disc ml-6 mt-2 mb-4">
        <li>税金とか確定申告が分からない。</li>
        <li>仕事はどうやってとってくればいいの。</li>
      </ul>
      <p className="mb-4">
        私自身もフリーランスになる際に、税金とか確定申告とかを書籍などを買い、勉強していました。
        税金や確定申告を題材にしたブログは多々ありますが、
        <strong className="bg-gradient-to-b from-transparent via-transparent to-yellow-400">
          フリーランスになるエンジニア向けに執筆し、体系的に分かるに情報発信をしようと思い、
        </strong>
        ブログを開設しました。
      </p>
      <p className="mb-4">
        また、今まで私はQiitaやZennなどの技術発信プラットフォームにも記事を出していないため、
        <strong className="bg-gradient-to-b from-transparent via-transparent to-yellow-400">
          何かしらの形で得た知識をアウトプットする
        </strong>
        のもブログ開設した理由の一つです。
        あとは世間ではブログで稼ぐのはオワコンと言われていますが、まだまだ需要はあるため、今後は収益化できないかも試していきたいと思ってます。
        収益化についてもブログで記事を執筆できればと思ってますので、その際は一読してもらえるとありがたいです。
      </p>
    </section>
  );
}
