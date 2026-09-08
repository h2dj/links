/**
 * 이 파일 하나만 수정하면 사이트 내용이 전부 바뀝니다.
 * Edit this single file to customize your entire link-in-bio page.
 */

export type SocialPlatform =
  | "instagram"
  | "youtube"
  | "github"
  | "x"
  | "threads"
  | "tiktok"
  | "linkedin"
  | "email"
  | "website";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface LinkItem {
  /** 버튼에 표시될 제목 */
  title: string;
  /** 이동할 주소 */
  url: string;
  /** 버튼 아래 작은 설명 (선택) */
  description?: string;
  /** 이모지 아이콘 (선택, 예: "🎬") */
  emoji?: string;
  /** true로 설정하면 강조 스타일(그라디언트)로 표시됩니다 */
  highlighted?: boolean;
}

export const site = {
  /** 프로필 이름 */
  name: "내 이름",
  /** 프로필 한 줄 소개 */
  bio: "환영합니다 👋 아래에서 제 링크들을 확인해보세요.",
  /**
   * 프로필 사진. 둘 중 하나로 지정하세요:
   *  - 이미지 URL을 그대로: "https://github.com/yourhandle.png" (파일 업로드 불필요, 가장 간편)
   *  - public/ 폴더에 넣은 파일: "/avatar.jpg"
   * 비워두면 이니셜 아바타가 표시됩니다.
   */
  avatarUrl: "",
  /** 페이지 상단 배지 텍스트 (선택, 예: "🟢 예약 가능") */
  badge: "",
  /** 브라우저 탭 제목 */
  siteTitle: "내 이름 | 링크",
  /** 검색엔진/미리보기용 설명 */
  siteDescription: "제 모든 링크를 한 곳에서 확인하세요.",
  /** 테마 강조색 (버튼 강조, 링크 hover 등에 사용) */
  accentColor: "#7c3aed", // violet-600
} as const;

export const socialLinks: SocialLink[] = [
  { platform: "instagram", url: "https://instagram.com/dongjun.in" },
  { platform: "github", url: "https://github.com/h2dj" },
  { platform: "youtube", url: "https://youtube.com/@지각생-j3g" },
  { platform: "email", url: "mailto:h2dj@ictact.kr" },
];

export const links: LinkItem[] = [
  {
    title: "공동체IT 사회적협동조합",
    url: "https://ictact.kr",
    highlighted: true,
    emoji: "🎉 ",
  },
  {
    title: "블로그",
    url: "https://blog.jinbo.net/h2dj",
    description: "제가 썼던 글들을 모아둔 공간",
    emoji: "✍️",
  },
  {
    title: "포트폴리오(교육)",
    url: "https://citsc.notion.site/2a89b99c27e280f68910ec8a0f1a4959?source=copy_link",
    emoji: "💼",
  },
  {
    title: "마인드맵",
    url: "https://h2dj.github.io/freemindonline",
    emoji: "📩",
  },
  {
    title: "시스템사고 지도 그리기",
    url: "https://h2dj.github.io/sysmap",
    emoji: "📩",
  },
];
