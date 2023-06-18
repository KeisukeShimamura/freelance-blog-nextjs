'use client';

import { useCallback, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SearchField() {
  const [composing, setComposition] = useState(false);
  const startComposition = () => setComposition(true);
  const endComposition = () => setComposition(false);
  const _onEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === 'Enter' && !composing) {
        location.href = `/search?q=${inputRef.current?.value}`;
      }
    },
    [composing],
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get('q') || '';
  return (
    <div className="form-control w-full">
      <input
        type="search"
        name="q"
        ref={inputRef}
        className="input input-bordered w-full rounded-xl bg-search bg-no-repeat bg-[16px] ps-12"
        placeholder="Search..."
        onKeyDown={_onEnter}
        onCompositionStart={startComposition}
        onCompositionEnd={endComposition}
        defaultValue={defaultQuery}
      />
    </div>
  );
}
