import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For real — 인스타 게시물 사실 확인",
  description: "인스타그램 게시물 링크를 넣으면 글을 읽고, 주장이 사실인지 근거와 함께 확인해 줘요.",
  applicationName: "For real",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121212", // 주소창 색 = globals.css의 --bg (항상 어두운 화면)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* 글꼴: Pretendard (한글·영문 한 벌). 못 불러와도 시스템 글꼴로 보인다 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
