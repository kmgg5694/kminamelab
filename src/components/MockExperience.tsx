import { useState } from 'react'
import { CORE_PRINCIPLE, ENERGY_SLOTS, OFFICIAL_URL } from '../constants'

export default function MockExperience() {
  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')

  return (
    <section className="card" aria-labelledby="mock-title">
      <h2 id="mock-title" className="section-title">
        무료 이름풀이 모의 체험
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        아래는 체험용 입력란입니다. 실제 운세·오행 결과는 계산하지 않으며, 정밀
        풀이는 공식 연구소 사이트에서만 제공됩니다.
      </p>

      <form
        className="mt-5 space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          window.open(OFFICIAL_URL, '_blank', 'noopener,noreferrer')
        }}
      >
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">한글 이름</span>
          <input
            type="text"
            inputMode="text"
            autoComplete="name"
            placeholder="예: 홍길동"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-line bg-ivory px-3 py-3 text-base text-ink transition duration-200 placeholder:text-ink-soft/50 focus:border-crimson"
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">생년월일</span>
          <input
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            className="w-full rounded-xl border border-line bg-ivory px-3 py-3 text-base text-ink transition duration-200 focus:border-crimson"
          />
        </label>

        <div>
          <p className="mb-2 text-sm font-medium text-ink">4개 기운 슬롯 (표시만)</p>
          <div className="grid grid-cols-2 gap-2">
            {ENERGY_SLOTS.map((label) => (
              <div
                key={label}
                className="rounded-xl border border-dashed border-gold bg-ivory/70 px-3 py-4 text-center text-xs font-medium text-ink-soft sm:text-sm"
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <p className="rounded-xl border border-crimson/20 bg-crimson/5 px-3 py-3 text-sm font-semibold leading-relaxed text-crimson">
          최소 3개 이상 상생
          <span className="mt-1 block font-normal text-ink-soft">{CORE_PRINCIPLE}</span>
        </p>

        <button type="submit" className="btn-primary w-full py-3.5 text-base">
          공식 연구소에서 내 이름 정밀 풀이 보기
        </button>
      </form>
    </section>
  )
}
