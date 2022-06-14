// NEXT Components
import Head from "next/head";

export default function Header(props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" />
      <meta name=" theme-color" content="#1c1b22" />
      <meta name="author" content="Bibek Aryal" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />

      <title>
        {props.title ? props.title : "Bibek Aryal - Networking and IT Security"}
      </title>

      <meta
        name="description"
        content={
          props.description
            ? props.description
            : "A portfolio website of Bibek Aryal. A Computer Networking & IT Security graduate from Islington College, Kathmandu, Nepal."
        }
      />
      <meta
        name="keywords"
        content={
          props.keywords
            ? props.keywords
            : "Bibek, Aryal, Networking, IT, Security, Islington, College, Nepal"
        }
      />

      <link rel="icon" type="image/png" href="./favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      {props.children}
    </Head>
  );
}
