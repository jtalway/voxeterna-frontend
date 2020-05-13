import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from "next/config";
const {publicRuntimeConfig} = getConfig();

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }
  setGoogleTags() {
    if(publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-165962395-1');
        `
      }
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
          <link rel="manifest" crossOrigin="use-credentials" href="/site.webmanifest" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"/>
          <link rel="stylesheet" href="/css/styles.css" />
          <script 
            src="https://kit.fontawesome.com/baf631f306.js" 
            crossOrigin="anonymous">
          </script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165962395-1"></script>
          <script dangerouslySetInnerHTML={this.setGoogleTags()}></script>
          <script data-ad-client="ca-pub-6897605241296031" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default MyDocument;
