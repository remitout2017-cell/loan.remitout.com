"use client";
import Script from "next/script";

const GA_ID = "G-KJ4KBZV4JE"; // REPLACE WITH YOUR GA4 ID
const FB_PIXEL = "24644541608561899"; // OPTIONAL

export default function LayoutClient() {
  return (
    <>
      <title>Remitout - Education Loan | Study Abroad</title>
      <meta
        name="description"
        content="Fastest education loans for abroad studies. Compare 20+ banks, AI approval in 24hrs."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://loan.remitout.com" />

      {GA_ID !== "G-KJ4KBZV4JE" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {FB_PIXEL !== "24644541608561899" && (
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');fbq('init','${FB_PIXEL}');fbq('track','PageView');
          `,
          }}
        />
      )}
    </>
  );
}
