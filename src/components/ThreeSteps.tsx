const STEPS = [
  { n: '1', title: '생년월일 입력', desc: '생년월일을 입력합니다.' },
  { n: '2', title: '한글 이름·한자 선택', desc: '한글 이름과 한자를 선택합니다.' },
  { n: '3', title: '즉시 30초 무료 풀이', desc: '바로 30초 무료 이름풀이를 확인합니다.' },
] as const

export default function ThreeSteps() {
  return (
    <section className="card" aria-labelledby="steps-title">
      <h2 id="steps-title" className="section-title">
        30초 3단계 안내
      </h2>
      <ol className="mt-5 space-y-4">
        {STEPS.map((step) => (
          <li key={step.n} className="flex gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crimson font-serif text-sm font-bold text-paper">
              {step.n}
            </span>
            <div>
              <p className="font-semibold text-ink">{step.title}</p>
              <p className="mt-0.5 text-sm text-ink-soft">{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
