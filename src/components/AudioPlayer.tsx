import { useCallback, useEffect, useRef, useState } from 'react'
import { AUDIO_SRC, OFFICIAL_URL, SHARE_TEXT } from '../constants'

function formatTime(sec: number) {
  if (!Number.isFinite(sec) || sec < 0) return '0:00'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function resolveAudioUrl() {
  try {
    return new URL(AUDIO_SRC, window.location.href).href
  } catch {
    return AUDIO_SRC
  }
}

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [statusMsg, setStatusMsg] = useState('')
  const [needsTap, setNeedsTap] = useState(false)
  const [audioUrl] = useState(resolveAudioUrl)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTime = () => setCurrent(audio.currentTime)
    const onMeta = () => setDuration(Number.isFinite(audio.duration) ? audio.duration : 0)
    const onEnded = () => setPlaying(false)
    const onPlay = () => {
      setPlaying(true)
      setNeedsTap(false)
    }
    const onPause = () => setPlaying(false)
    const onError = () =>
      setStatusMsg('소개 음성을 불러오지 못했습니다. 새로고침 후 다시 시도해 주세요.')

    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('durationchange', onMeta)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('error', onError)

    audio.muted = true
    audio.load()

    const tryAutoplay = async () => {
      try {
        await audio.play()
        setStatusMsg('음소거로 자동 재생 중입니다. 소리를 켜 주세요.')
      } catch {
        setNeedsTap(true)
        setStatusMsg('재생을 눌러 소개영상을 들어 주세요.')
      }
    }
    void tryAutoplay()

    return () => {
      audio.pause()
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('durationchange', onMeta)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('error', onError)
    }
  }, [audioUrl])

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      try {
        await audio.play()
        setStatusMsg('')
      } catch {
        setNeedsTap(true)
        setStatusMsg('재생을 시작할 수 없습니다. 다시 눌러 주세요.')
      }
    } else {
      audio.pause()
    }
  }, [])

  const startWithSound = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = false
    setMuted(false)
    try {
      if (audio.paused) await audio.play()
      setNeedsTap(false)
      setStatusMsg('')
    } catch {
      setNeedsTap(true)
      setStatusMsg('재생을 시작할 수 없습니다. 다시 눌러 주세요.')
    }
  }, [])

  const restart = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = 0
    void audio.play().catch(() => {
      setNeedsTap(true)
      setStatusMsg('처음부터 재생에 실패했습니다.')
    })
  }, [])

  const toggleMute = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !audio.muted
    setMuted(audio.muted)
    if (!audio.muted) setStatusMsg('')
  }, [])

  const onSeek = (value: number) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = value
    setCurrent(value)
  }

  const share = async () => {
    const payload = {
      title: '소개영상 전체 듣기 | 김만기 주역 성명학 이름연구소',
      text: SHARE_TEXT,
      url: OFFICIAL_URL,
    }
    try {
      if (typeof navigator.share === 'function') {
        await navigator.share(payload)
        setStatusMsg('공유했습니다.')
        return
      }
      await navigator.clipboard.writeText(`${payload.text}\n${payload.url}`)
      setStatusMsg('링크를 복사했습니다.')
    } catch {
      try {
        await navigator.clipboard.writeText(OFFICIAL_URL)
        setStatusMsg('링크를 복사했습니다.')
      } catch {
        setStatusMsg('공유에 실패했습니다. 주소를 직접 복사해 주세요.')
      }
    }
  }

  const progress = duration > 0 ? (current / duration) * 100 : 0

  return (
    <section className="card overflow-hidden p-0" aria-labelledby="audio-title">
      <div className="relative min-h-[220px] bg-gradient-to-br from-crimson via-[#6e2313] to-[#3d160c] px-5 py-8 text-paper sm:min-h-[260px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(229,199,159,0.45), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,253,249,0.18), transparent 40%)',
          }}
          aria-hidden="true"
        />

        <p className="relative text-xs font-semibold tracking-wide text-gold">첫 화면 소개</p>
        <h2 id="audio-title" className="relative mt-2 font-serif text-2xl font-bold sm:text-3xl">
          소개영상 전체 듣기
        </h2>
        <p className="relative mt-2 max-w-md text-sm text-paper/85">
          50초 전체 소개 음성 · 케이 엠 지 지 오 육 구 사, 깃허브 점 아이오
        </p>

        <div className="relative mt-6 flex items-center gap-4">
          <button
            type="button"
            onClick={() => void (muted || needsTap ? startWithSound() : togglePlay())}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold text-2xl text-crimson shadow-lg transition duration-200 hover:scale-105 active:scale-95"
            aria-label={playing ? '일시정지' : '소개영상 재생'}
          >
            {playing && !muted ? '❚❚' : '▶'}
          </button>
          <div className="min-w-0 flex-1">
            <p className="font-serif text-lg font-semibold">김만기 주역 성명학</p>
            <p className="text-sm text-paper/80">
              {playing ? (muted ? '음소거 재생 중' : '재생 중') : '대기 중'} · {formatTime(current)} /{' '}
              {formatTime(duration)}
            </p>
          </div>
        </div>

        {(needsTap || muted) && (
          <button
            type="button"
            onClick={() => void startWithSound()}
            className="relative mt-5 w-full rounded-xl bg-gold px-4 py-3 text-sm font-bold text-crimson transition duration-200 active:scale-[0.98]"
          >
            {needsTap ? '탭하여 소개영상 시작' : '소리 켜고 듣기'}
          </button>
        )}
      </div>

      <audio ref={audioRef} src={audioUrl} preload="auto" playsInline className="hidden">
        <track kind="captions" />
      </audio>

      <div className="space-y-4 p-5">
        <div className="flex items-center gap-2 text-xs text-ink-soft">
          <span className="tabular-nums">{formatTime(current)}</span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={current}
            onChange={(e) => onSeek(Number(e.target.value))}
            aria-label="재생 위치"
            className="h-2 w-full cursor-pointer accent-crimson"
            style={{
              background: `linear-gradient(to right, #8C2D19 ${progress}%, #E8DFD0 ${progress}%)`,
            }}
          />
          <span className="tabular-nums">{formatTime(duration)}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <button type="button" className="btn-primary" onClick={() => void togglePlay()}>
            {playing ? '일시정지' : '재생'}
          </button>
          <button type="button" className="btn-secondary" onClick={restart}>
            처음부터
          </button>
          <button type="button" className="btn-secondary" onClick={toggleMute}>
            {muted ? '음소거 해제' : '음소거'}
          </button>
          <button type="button" className="btn-secondary" onClick={() => void share()}>
            공유
          </button>
        </div>

        {statusMsg ? (
          <p className="text-center text-xs text-crimson" role="status">
            {statusMsg}
          </p>
        ) : null}
      </div>
    </section>
  )
}
