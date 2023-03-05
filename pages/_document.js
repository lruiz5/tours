import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=optional"
          rel="stylesheet"
        />
        <title>Natours | Exciting tours for adventurous people</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
