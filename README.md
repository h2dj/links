# links

나만의 [Linktree](https://linktr.ee) 유사 링크 모음 페이지. Next.js + Tailwind CSS로 만든
가볍고 빠른 정적 사이트로, 코드 한 곳(`src/config/site.ts`)만 수정하면 됩니다.

- 프로필(이름, 소개, 아바타), 소셜 아이콘, 링크 버튼 목록
- 라이트/다크 모드 자동 감지 + 수동 토글
- 반응형(모바일 우선) 레이아웃, 부드러운 등장 애니메이션
- 서버·DB 없이 정적으로 배포 가능 (Vercel, Netlify, Cloudflare Pages 등)

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

## 커스터마이징

모든 콘텐츠는 **`src/config/site.ts`** 한 파일에서 관리합니다.

```ts
export const site = {
  name: "내 이름",
  bio: "환영합니다 👋 아래에서 제 링크들을 확인해보세요.",
  avatarUrl: "", // public/ 폴더에 이미지를 넣고 "/avatar.jpg" 처럼 지정. 비워두면 이니셜 아바타 표시
  badge: "",     // 상단에 표시할 짧은 배지 텍스트 (예: "🟢 예약 가능")
  siteTitle: "내 이름 | 링크",
  siteDescription: "제 모든 링크를 한 곳에서 확인하세요.",
  accentColor: "#7c3aed", // 강조 색상 (버튼, 링크 hover 등)
};

export const socialLinks = [
  { platform: "instagram", url: "https://instagram.com/yourhandle" },
  // instagram | youtube | github | x | threads | tiktok | linkedin | email | website
];

export const links = [
  {
    title: "🎉 새로운 소식 확인하기",
    url: "https://example.com",
    highlighted: true, // 강조 스타일(그라디언트 버튼)
  },
  {
    title: "블로그",
    url: "https://example.com/blog",
    description: "제가 쓰는 글들을 모아둔 공간", // 선택
    emoji: "✍️",                                // 선택
  },
];
```

### 프로필 이미지 추가하기

1. 이미지 파일을 `public/` 폴더에 넣습니다 (예: `public/avatar.jpg`).
2. `site.avatarUrl`을 `"/avatar.jpg"`로 설정합니다.

### 새 링크/소셜 추가하기

`links` 배열이나 `socialLinks` 배열에 객체를 추가/삭제/순서 변경하면 그대로 반영됩니다.

## 배포하기

### Vercel (추천)

1. 이 저장소를 GitHub에 푸시합니다.
2. [vercel.com/new](https://vercel.com/new)에서 저장소를 import 합니다.
3. 빌드 설정은 자동 감지되며, 별도의 환경 변수나 데이터베이스가 필요 없습니다.

### 다른 정적 호스팅 (Netlify, Cloudflare Pages 등)

```bash
npm run build
```

빌드 명령: `npm run build`, 프레임워크: Next.js 로 지정하면 됩니다.

## 기술 스택

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- [next-themes](https://github.com/pacocoursey/next-themes) — 다크 모드
- [lucide-react](https://lucide.dev) — UI 아이콘 (테마 토글, 화살표 등)

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드된 결과물 실행 |
| `npm run lint` | ESLint 검사 |
