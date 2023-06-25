import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer footer-center mt-8 p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link className="link link-hover" href={`/about`}>
          このブログについて
        </Link>
        <Link className="link link-hover" href={`/privacy`}>
          プライバシーポリシー
        </Link>
        <Link className="link link-hover" href={`/contact`}>
          お問い合わせ
        </Link>
      </div>
      <div>
        <p>© 北海道フリーランスライフ. All Rights Reserved 2023</p>
      </div>
    </footer>
  );
}
