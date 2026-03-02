# 냉장고를 부탁해

Google Gemini API를 활용해 사용자가 입력한 재료를 기반으로 맞춤형 요리 레시피를 추천하는 웹 애플리케이션입니다.

## 주요 기능

- **로그인**: 세션 기반 인증 (Next.js API Routes)
- **레시피 추천**: 재료, 맵기, 종류, 목적 조건 선택 후 Gemini API로 레시피 생성
- **추천 결과 Modal**: 마크다운 렌더링, 캐러셀 형태로 결과 표시
- **연락처 문의**: Contact 폼 → Naver SMTP로 메일 전송

## 디자인 시스템 (Clean & Warm)

- **테마**: daisyUI `recipeTheme` (primary: #F97316, secondary: #22C55E, accent: #FBBF24)
- **타이포그래피**: Pretendard, text-h1/h2/body1/body2/caption
- **레이아웃**: 모바일 `max-w-md`, 태블릿 이상 `max-w-2xl`, `bg-base-200` 배경
- **컴포넌트**: `btn-primary rounded-2xl`, `input-bordered rounded-xl`, `card shadow-xl rounded-2xl`

## 기술 스택

### Core
- ![React](https://img.shields.io/badge/React-18-61DAFB.png?logo=react&logoColor=white)
- ![Next.js](https://img.shields.io/badge/Next.js-13-000000.png?logo=nextdotjs&logoColor=white) (Pages Router)
- ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6.png?logo=typescript&logoColor=white)

### UI & Styling
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.png?logo=tailwindcss&logoColor=white)
- ![daisyUI](https://img.shields.io/badge/daisyUI-4.12-5A0EF8.png?logo=daisyui&logoColor=white)
- @tailwindcss/typography
- ![Headless UI](https://img.shields.io/badge/Headless_UI-1.7-222222.png?logo=headlessui&logoColor=white)
- @heroicons/react
- animate.css

### State & Data
- ![Zustand](https://img.shields.io/badge/Zustand-4-000000.png) (상태 관리)
- ![Axios](https://img.shields.io/badge/Axios-1.3-5A29E4.png?logo=axios&logoColor=white) (API 호출)
- @google/genai (Gemini API)

### 기타
- nodemailer (Naver SMTP 메일 전송)
- react-markdown, remark-gfm (마크다운 렌더링)
- react-transition-group (페이지 전환)

### 개발 & 테스트
- ![Jest](https://img.shields.io/badge/Jest-29.5-C21325.png?logo=jest&logoColor=white), React Testing Library
- ![ESLint](https://img.shields.io/badge/ESLint-8-4B32C3.png?logo=eslint&logoColor=white), ![Prettier](https://img.shields.io/badge/Prettier-3-1A2B34.png?logo=prettier&logoColor=white)

## 프로젝트 구조

```
├── api/                 # API 클라이언트 (axios)
├── components/
│   ├── Contact/         # 연락처 페이지
│   ├── Home/            # 재료 입력 및 추천 요청
│   ├── Login/           # 로그인
│   ├── Modules/         # 공통 컴포넌트 (Modal, Select, Carousel 등)
│   ├── header.tsx
│   └── layout.tsx
├── pages/
│   ├── api/             # Next.js API Routes (login, logout, mail, isLogin 등)
│   ├── index.tsx        # 로그인 페이지
│   ├── home.tsx         # 레시피 추천 페이지
│   └── contact.tsx      # 연락처 페이지
├── source/              # Zustand store, types
├── styles/
├── __test__/
└── graphql/             # GraphQL 스키마 (선택 사용)
```

## 환경 변수

`.env` 파일을 프로젝트 루트에 생성하고 다음 변수를 설정하세요.

```env
# Gemini API (레시피 추천)
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=your_gemini_api_key

# API Base URL (로컬: http://localhost:3000)
NEXT_PUBLIC_API_SSR_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
NEXT_PUBLIC_BASE_TIMEOUT=10000

# Naver SMTP (Contact 메일 전송)
NODE_MAILER_USERNAME=your_naver_email@naver.com
NODE_MAILER_PASS=your_naver_app_password
```

> **Naver 메일 설정**: 2단계 인증 → 앱 비밀번호 발급, POP3/IMAP 사용 활성화 필요

## 시작하기

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev
```

- 로컬: http://localhost:3000

## 스크립트

| 명령 | 설명 |
|------|------|
| `yarn dev` | 개발 서버 실행 |
| `yarn build` | 프로덕션 빌드 |
| `yarn start` | 프로덕션 서버 실행 |
| `yarn test` | Jest 테스트 실행 |

## 배포

- Vercel 배포 지원
- 배포 시 `.env` 대신 Vercel 환경 변수에 동일 키 설정

## 페이지별 설명

| 경로 | 설명 |
|------|------|
| `/` | 로그인 |
| `/home` | 재료 입력, 조건 선택, 추천 받기 |
| `/contact` | 문의 메일 전송 |

## 라이선스

MIT
