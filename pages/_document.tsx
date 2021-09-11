import React, { ReactElement } from 'react';
import Document, { DocumentContext,Html, Head, Main, NextScript  } from 'next/document';
import {Helmet} from 'react-helmet';

class MyDocument extends Document {
	
	
  static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
render(): ReactElement {
    return (
      <Html lang="pl">
        <Head />
				<Helmet>
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
					<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;500;700&display=swap" rel="stylesheet"/>
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