import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "夏炜城｜智能硬件与 AI 产品经理", template: "%s｜夏炜城作品集" },
  description: "夏炜城的个人作品集，聚焦智能硬件、机器人、AI 产品、嵌入式开发与产品原型。",
  keywords: ["智能硬件产品经理", "AI 产品经理", "机器人", "嵌入式", "产品作品集", "夏炜城"],
  authors: [{ name: "夏炜城" }],
  openGraph: { title: "夏炜城｜智能硬件与 AI 产品经理", description: "让硬件、AI 与真实场景发生连接。", type: "website", locale: "zh_CN" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body>{children}</body></html>; }
