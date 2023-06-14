'use client';

import Loading from '@/app/loading';
import { FormEvent, useRef, useState } from 'react';

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          body: bodyRef.current?.value,
        }),
      });
      console.log('res: ', res);
      alert('送信しました');
    } catch (error) {
      console.error('Fetch error : ', error);
      alert('送信に失敗しました。');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-screen-md mx-auto mt-12">
      <form onSubmit={onSubmit}>
        <div className="mb-5">
          <div className="text-sm mb-1">お名前</div>
          <input
            type="text"
            ref={nameRef}
            placeholder="お名前を入力してください"
            required
            className="input input-bordered w-full rounded-xl"
          />
        </div>
        <div className="mb-5">
          <div className="text-sm mb-1">メールアドレス</div>
          <input
            type="email"
            ref={emailRef}
            placeholder="メールアドレスを入力してください"
            required
            className="input input-bordered w-full rounded-xl"
          />
        </div>
        <div className="mb-5">
          <div className="text-sm mb-1">本文</div>
          <textarea
            ref={bodyRef}
            placeholder="お問い合わせ内容を入力してください"
            required
            className="textarea textarea-bordered w-full rounded-xl"
            rows={8}
          />
        </div>

        <div className="text-center mb-5">
          {loading ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn-primary btn-wide">
              送信
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
