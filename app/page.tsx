import Checker from "@/components/Checker";
import { findInstagramUrl } from "@/lib/extract/url";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

// 공유 목록(share_target)으로 들어오면 ?url= 또는 ?text= 안에 인스타 링크가 담겨 온다.
export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const pick = (k: string) => (Array.isArray(sp[k]) ? sp[k][0] : sp[k]) ?? "";
  const shared = [pick("url"), pick("text"), pick("title")].join(" ");
  const initialUrl = findInstagramUrl(shared) ?? "";

  return (
    <main className="page">
      <header className="hero">
        <h1 className="hero-title">For real</h1>
        <p className="hero-sub">인스타에서 본 게시물, 공유하기 전에 확인해 봐요.</p>
      </header>
      <Checker initialUrl={initialUrl} autoStart={initialUrl !== ""} />
    </main>
  );
}
