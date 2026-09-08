# links

나만의 [Linktree](https://linktr.ee) 유사 링크 모음 페이지. Next.js + Tailwind CSS로 만든
가볍고 빠른 정적 사이트로, 코드 한 곳(`src/config/site.ts`)만 수정하면 됩니다.

- 프로필(이름, 소개, 아바타), 소셜 아이콘, 링크 버튼 목록
- 라이트/다크 모드 자동 감지 + 수동 토글
- 반응형(모바일 우선) 레이아웃, 부드러운 등장 애니메이션
- 서버·DB 없이 정적으로 배포 가능 (Vercel, Netlify, Cloudflare Pages 등)

## 🔗 배포된 사이트

https://links-kappa.vercel.app

`main` 브랜치에 커밋이 올라갈 때마다 Vercel이 자동으로 다시 배포합니다.

## ✍️ 가장 빠른 편집 방법 (설치 필요 없음)

로컬에 코드를 내려받지 않아도 브라우저만으로 프로필 사진/링크를 바꿀 수 있습니다.

1. **[여기를 클릭해서 `site.ts`를 GitHub.dev로 열기](https://github.dev/h2dj/links/blob/main/src/config/site.ts)**
   (주소창 URL에서 `github.com`을 `github.dev`로 바꾸면 어떤 파일이든 이렇게 열 수 있습니다.)
2. `name`, `bio`, `avatarUrl`, `links`, `socialLinks` 값을 원하는 대로 수정합니다. (아래 [커스터마이징](#커스터마이징) 참고)
3. 좌측 소스 제어(⑂) 탭 → 메시지 입력 → **Commit & Push** → "Commit directly to the main branch" 선택.
4. 1분 이내로 Vercel이 자동 재배포합니다. 위 배포 URL에서 확인하세요.

> 💡 실수로 문법 오류가 생겨도 걱정 마세요 — Vercel은 빌드가 실패하면 기존에 **정상 동작 중인 배포를 그대로 유지**하므로 사이트가 내려가지 않습니다. Vercel 대시보드의 Deployments 탭에서 실패 원인을 확인할 수 있습니다.

## 로컬에서 실행하기

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
  avatarUrl: "", // 이미지 URL(https://...) 또는 "/avatar.jpg"(public/ 폴더). 비워두면 이니셜 아바타 표시
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

### 프로필 사진 바꾸기

두 가지 방법이 있습니다 — 파일을 추가할 필요 없는 **방법 A**가 가장 간편합니다.

**방법 A. 이미지 URL을 바로 붙여넣기 (추천, 파일 업로드 불필요)**

`avatarUrl`에 `https://`로 시작하는 이미지 주소를 넣으면 바로 표시됩니다. 어떤 호스팅이든 상관없이 동작합니다.

```ts
avatarUrl: "https://github.com/h2dj.png", // 예: 내 GitHub 프로필 사진을 그대로 사용
```

사진을 어디에도 올려둔 게 없다면, 본인 GitHub 계정 사진 주소(`https://github.com/<아이디>.png`)를 쓰는 게 가장 빠릅니다. 그 외에도 Google 프로필 사진, Imgur, Instagram 프로필 등 공개 이미지 URL이면 어디든 됩니다.

**방법 B. 저장소에 이미지 파일 추가하기**

1. 이미지 파일을 `public/` 폴더에 넣습니다 (예: `public/avatar.jpg`). GitHub 웹에서는 `public` 폴더 → "Add file" → "Upload files"로 바로 업로드할 수 있습니다.
2. `site.avatarUrl`을 `"/avatar.jpg"`로 설정합니다 (앞에 `/`, 도메인 없이 파일 이름만).

### 링크 추가/삭제/순서 바꾸기

`links` 배열에 항목을 추가·삭제하거나 순서를 바꾸면 그대로 화면에 반영됩니다 (배열 순서 = 화면에 표시되는 순서).

새 링크를 추가하려면 아래 블록을 복사해서 `links` 배열 안에 붙여넣고 값만 바꾸세요:

```ts
  {
    title: "새 링크 제목",
    url: "https://",
    emoji: "🔗",        // 선택, 지워도 됨
    description: "",    // 선택, 지워도 됨
    highlighted: false, // true로 하면 강조 버튼 스타일
  },
```

삭제하려면 해당 `{ ... }` 블록 전체를 지우면 됩니다. `socialLinks`도 같은 방식으로 항목을 추가/삭제합니다.

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
