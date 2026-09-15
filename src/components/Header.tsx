import { OFFICIAL_URL } from '../constants'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[480px] items-center gap-3 px-4 py-3 sm:max-w-3xl sm:px-6 lg:max-w-5xl lg:px-8">
        <span className="text-2xl leading-none" aria-hidden="true">
          ☯
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-medium tracking-wide text-crimson/90">
            주역 성명학 20년 노하우
          </p>
          <h1 className="truncate font-serif text-sm font-semibold text-ink sm:text-base">
            김만기 주역 성명학 이름연구소
          </h1>
        </div>
        <a
          href={OFFICIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shrink-0 px-3 py-2 text-xs sm:text-sm"
        >
          공식 사이트
        </a>
      </div>
    </header>
  )
}
