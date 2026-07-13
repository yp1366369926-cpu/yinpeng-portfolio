import "./globals.css";

export const metadata = {
  title: "殷鹏 · UI / Visual Designer",
  description: "殷鹏 — UI / Visual Designer Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
