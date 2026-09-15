# 김만기 주역 성명학 이름연구소 — 홍보 랜딩

모바일 우선 정적 랜딩페이지입니다. React + Vite + TypeScript + Tailwind CSS.

공식 서비스: https://kmgg5694.github.io/

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 표시되는 주소(보통 `http://localhost:5173`)로 접속합니다.

## 빌드

```bash
npm run build
```

결과물은 `dist/` 폴더에 생성됩니다. 미리보기는 `npm run preview`입니다.

## GitHub Pages 배포

1. 이 저장소를 GitHub에 푸시합니다 (`main` 브랜치).
2. 저장소 **Settings → Pages → Build and deployment**에서 Source를 **GitHub Actions**로 설정합니다.
3. `main`에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드·배포합니다.
4. Vite `base`는 `'./'`이므로 프로젝트/유저 페이지 모두 상대 경로로 동작합니다.

## 소개 음성

`public/audio/kmgg_full_introduction_50s.m4a` (50초 전체 소개).

```powershell
New-Item -ItemType Directory -Force public/audio
Invoke-WebRequest -Uri "https://files.manuscdn.com/user_upload_by_module/session_file/310519663247136306/dyaKUFIyrfaEIPTm.m4a" -OutFile public/audio/kmgg_full_introduction_50s.m4a
```
