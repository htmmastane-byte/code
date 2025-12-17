import "./globals.css";

export const metadata = {
  title: "کالسکه‌چی - فروشگاه کودک",
  description:
    "فروشگاه لوازم‌التحریر، اسباب‌بازی، لباس کودک و حمل‌ونقل کودک با ارسال سریع",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
