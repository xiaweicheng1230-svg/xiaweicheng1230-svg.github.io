import Link from "next/link";
export default function NotFound() { return <main className="not-found"><p className="eyebrow">404 / NOT FOUND</p><h1>这个页面还没有被做成现实。</h1><p>你访问的内容不存在，或地址已经变化。</p><Link href="/" className="button button-dark">返回首页</Link></main>; }
