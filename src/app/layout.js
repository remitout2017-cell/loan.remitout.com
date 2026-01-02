import "./globals.css";
import LoadingWrapper from "../components/LoadingWrapper";
import { LoadingProvider } from "../context/LoadingContext";

export const metadata = {
  metadataBase: new URL("https://loan.remitout.com"), // ← FIX: Added this line
  title: "Remitout - Education Loan | Study Abroad",
  description:
    "Fastest education loans for abroad studies. Compare 20+ banks, AI approval in 24hrs. No collateral needed.",
  keywords: "education loan, study abroad, abroad loan, student loan India",
  authors: [{ name: "Remitout" }],
  openGraph: {
    title: "Remitout - Education Loan | Study Abroad",
    description:
      "Fastest education loans for abroad studies. Compare 20+ banks, AI approval in 24hrs.",
    url: "https://loan.remitout.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remitout - Education Loan | Study Abroad",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://loan.remitout.com" />
      </head>
      <body>
        <LoadingProvider>
          <LoadingWrapper>{children}</LoadingWrapper>
        </LoadingProvider>
      </body>
    </html>
  );
}
