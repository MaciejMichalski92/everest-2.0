import React, { ReactElement } from 'react';
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { Helmet } from 'react-helmet';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render(): ReactElement {
    return (
      <Html lang='pl'>
        <Head />
        <Helmet>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;500;700&display=swap'
            rel='stylesheet'
          />
          <script src='https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js'></script>
          <script src='https://unpkg.com/smoothscroll-anchor-polyfill'></script>
        </Helmet>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
