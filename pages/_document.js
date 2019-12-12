import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta property="og:url" content="https://vibe.capital" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@vibecapital" />
          <meta name="twitter:creator" content="@vibecapital" />
          <meta name="twitter:title" content="Vibe Capital" />
          <meta name="twitter:description" content="good vibes only" />
          <meta name="twitter:image" content="https://vibe.capital/card.png" />
          <meta name="og:image" content="https://vibe.capital/card.png" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-60788487-11"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-60788487-11');
`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
