import { OFFICIAL_URL } from '../constants'

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line/80 bg-paper/95 px-4 py-3 backdrop-blur-md safe-pb">
      <div className="mx-auto max-w-[480px] sm:max-w-3xl lg:max-w-5xl">
        <a
          href={OFFICIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full py-3.5 text-sm sm:text-base"
        >
          지금 30초 무료 이름풀이 시작하기
        </a>
      </div>
    </div>
  )
}
