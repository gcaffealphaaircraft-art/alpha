import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alpha Aircraft Systems, APU Overhauling Expert for aircraft APU repair, maintenance, fuel systems, hydraulic, plasma spray and professional welding",
  description:
    "Strategic design partner to bold digital brands.",
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="zoho-salesiq-init" strategy="afterInteractive">
          {`window.$zoho = window.$zoho || {};
window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };`}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siqf867f4069cbe2e7980e0502f5be57ebae143f994ff08f9ef885e18913bd45667113b1ef7841ff72c9370586c28750dee"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}