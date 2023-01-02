export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#1c1b22" />
      <meta name="author" content="Bibek Aryal" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />

      <title>Bibek Aryal</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content={
          "A portfolio website of Bibek Aryal. A Computer Networking & IT Security graduate from Islington College, Kathmandu, Nepal. Making the world a better place with technology."
        }
      />
      <meta
        name="keywords"
        content={
          "Bibek, Aryal, Networking, IT, Security, Islington, College, Nepal"
        }
      />
      <link rel="icon" type="image/png" href="images/favicon.ico" />
      <link rel="apple-touch-icon" href="images/favicon.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </>
  );
}
