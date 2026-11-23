import type { MetadataRoute } from "next";

// 안드로이드에서 PWA로 설치하면 인스타 "공유" 목록에 뜬다 (Web Share Target).
// iOS Safari는 share_target을 지원하지 않으므로 iOS는 링크 붙여넣기만 쓴다.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "For real — 인스타 게시물 사실 확인",
    short_name: "For real",
    start_url: "/",
    display: "standalone",
    background_color: "#121212",
    theme_color: "#121212",
    lang: "ko",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    share_target: {
      action: "/",
      method: "GET",
      params: { title: "title", text: "text", url: "url" },
    },
  };
}
