import Head from "next/head";

export default function Headers() {
  return (
    <Head>
      <title>aiwordle.com</title>
      <meta
        name="description"
        content="aiwordle.com | Let our AI guess your word."
      />
      <meta property="og:title" content="aiwordle.com" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.aiwordle.com" />
      <meta
        property="og:image"
        content="https://images.ctfassets.net/pedj0c0bs6fa/7JXRgXbjsRhShVkCfaT5On/1722d18869cbfc107325669c54346e81/aiwordle.png?w=800"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
