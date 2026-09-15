import Header from './components/Header'
import Hero from './components/Hero'
import AudioPlayer from './components/AudioPlayer'
import MockExperience from './components/MockExperience'
import KeyPoints from './components/KeyPoints'
import ThreeSteps from './components/ThreeSteps'
import DailyFortune from './components/DailyFortune'
import MultilangShare from './components/MultilangShare'
import StickyCta from './components/StickyCta'

export default function App() {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-[480px] pb-28 sm:max-w-3xl lg:max-w-5xl">
      <Header />
      <main className="space-y-8 px-4 pt-20 sm:px-6 lg:px-8">
        <AudioPlayer />
        <Hero />
        <MockExperience />
        <KeyPoints />
        <ThreeSteps />
        <DailyFortune />
        <MultilangShare />
        <footer className="pb-4 text-center text-xs text-ink-soft">
          <p>김만기 주역 성명학 이름연구소</p>
          <p className="mt-1">
            공식 사이트{' '}
            <a
              href="https://kmgg5694.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-crimson underline-offset-2 hover:underline"
            >
              kmgg5694.github.io
            </a>
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-ink-soft/80">
            케이 엠 지 지 오 육 구 사, 깃허브 점 아이오
          </p>
        </footer>
      </main>
      <StickyCta />
    </div>
  )
}
