const CARDS = [
  {
    age: '30대 이하',
    title: '행운역일진',
    href: 'https://kmgg5694.github.io/lucky-8/',
    desc: '젊은 세대에 맞춘 오늘의 일진을 확인하세요.',
  },
  {
    age: '50대 이후',
    title: '자미역일진',
    href: 'https://kmgg5694.github.io/app_iljin/',
    desc: '중·장년 세대에 맞춘 오늘의 일진을 확인하세요.',
  },
] as const

export default function DailyFortune() {
  return (
    <section aria-labelledby="iljin-title">
      <h2 id="iljin-title" className="section-title px-1">
        오늘의 일진
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {CARDS.map((card) => (
          <a
            key={card.title}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card block transition duration-200 hover:border-gold hover:shadow-[var(--shadow-soft)] active:scale-[0.99]"
          >
            <p className="text-xs font-semibold tracking-wide text-crimson">{card.age}</p>
            <h3 className="mt-1 font-serif text-lg font-semibold text-ink">{card.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{card.desc}</p>
            <span className="mt-3 inline-block text-sm font-medium text-crimson">바로가기 →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
