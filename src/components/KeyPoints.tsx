const POINTS = [
  {
    title: '음령오행 2개 · 자원오행 2개',
    body: '이름에는 음령오행(한글) 2개와 자원오행(한문) 2개, 총 4개의 기운이 있습니다.',
  },
  {
    title: '최소 3개 이상 상생',
    body: '이 중 최소 3개 이상이 서로 상생해야 복을 받습니다.',
  },
  {
    title: '세대별 맞춤 일진',
    body: '30대 이하는 행운역일진, 50대 이후는 자미역일진으로 오늘의 흐름을 살핍니다.',
  },
] as const

export default function KeyPoints() {
  return (
    <section aria-labelledby="points-title">
      <h2 id="points-title" className="section-title px-1">
        핵심 포인트
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {POINTS.map((point) => (
          <article key={point.title} className="card h-full">
            <h3 className="font-serif text-base font-semibold text-crimson">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{point.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
