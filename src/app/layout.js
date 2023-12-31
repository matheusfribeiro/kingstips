import './globals.css'
import { Inter } from 'next/font/google'
import { AOSInit } from './hooks/aos'
import Script from 'next/script'

const GTM_ID = 'GTM-5TKR2PRK';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kings Tips',
  description: 'Sucesso Absoluto KingsTips',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <AOSInit />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className={inter.className}>
        {children}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
