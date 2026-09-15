import { CORE_PRINCIPLE, OFFICIAL_HOST } from '../constants'

export default function Hero() {
  return (
    <section className="card relative overflow-hidden bg-gradient-to-br from-paper via-ivory to-gold/20">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/30 blur-2xl"
        aria-hidden="true"
      />
      <span className="inline-flex rounded-full border border-crimson/20 bg-crimson/5 px-3 py-1 text-xs font-semibold text-crimson">
        30초 무료 이름풀이
      </span>
      <h2 className="mt-4 font-serif text-[1.65rem] font-bold leading-snug text-ink sm:text-3xl">
        당신의 이름!
        <br />
        안녕하신가요?
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
        한글·한문 이름을 30초 만에 빠르게 살펴보고, 정밀 풀이는 공식 연구소에서
        이어가세요. 공식 주소는{' '}
        <span className="font-semibold text-crimson">{OFFICIAL_HOST}</span> 입니다.
      </p>
      <p className="mt-4 rounded-xl border border-gold/60 bg-ivory/80 p-3 text-sm leading-relaxed text-ink">
        {CORE_PRINCIPLE}
      </p>
    </section>
  )
}
