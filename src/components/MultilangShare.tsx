import { useState } from 'react'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  OFFICIAL_URL,
  SHARE_TEXT,
} from '../constants'

export default function MultilangShare() {
  const [msg, setMsg] = useState('')

  const sharePage = async () => {
    const payload = {
      title: '김만기 주역 성명학 이름연구소',
      text: SHARE_TEXT,
      url: typeof window !== 'undefined' ? window.location.href : OFFICIAL_URL,
    }
    try {
      if (typeof navigator.share === 'function') {
        await navigator.share(payload)
        setMsg('페이지를 공유했습니다.')
        return
      }
      await navigator.clipboard.writeText(`${payload.text}\n${payload.url}`)
      setMsg('페이지 링크를 복사했습니다.')
    } catch {
      try {
        await navigator.clipboard.writeText(payload.url)
        setMsg('페이지 링크를 복사했습니다.')
      } catch {
        setMsg('공유에 실패했습니다.')
      }
    }
  }

  return (
    <section className="card" aria-labelledby="share-title">
      <h2 id="share-title" className="section-title">
        다국어 · 모바일 최적화
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        모바일 390px 기준으로 읽기 쉽게 구성했으며, 공식 허브에서는 한글·영어 등
        다국어 이름풀이 서비스로 이어집니다.
      </p>
      <p className="mt-3 text-sm text-ink">
        인스타그램{' '}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-crimson underline-offset-2 hover:underline"
        >
          {INSTAGRAM_HANDLE}
        </a>
      </p>

      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button type="button" className="btn-secondary w-full" onClick={() => void sharePage()}>
          페이지 공유
        </button>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full"
        >
          인스타그램 DM
        </a>
      </div>
      {msg ? (
        <p className="mt-3 text-center text-xs text-crimson" role="status">
          {msg}
        </p>
      ) : null}
    </section>
  )
}
