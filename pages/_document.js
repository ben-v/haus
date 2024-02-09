import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
