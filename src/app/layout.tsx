import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



export const metadata: Metadata = {
  title: "EBTech",
  description: "analisamos perfis de colaboradores para identificar padrões de comportamento que perpetuam desigualdades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
