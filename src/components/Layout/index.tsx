// components/Layout.tsx
import Head from "next/head";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=yes" />
        <title>pensanoevento.com.br - Baladas, Shows, Eventos Culturais!</title>
        <meta
          name="description"
          content="O Site que vai ajudar você a pensar no evento. Compre ingressos e coloque seu nome na lista para shows, baladas, eventos culturais."
        />
        <meta property="og:title" content="Pensa No Evento" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/images/logo_pensanoevento_2019_ogurl.jpg"
        />
        <meta
          property="og:description"
          content="Compre ingressos e coloque seu nome na lista para os melhores eventos."
        />
        <link rel="stylesheet" href="/css/skeleton.css?v=1.7" />
        <link rel="stylesheet" href="/css/base.css?v=1.30" />
        <link rel="stylesheet" href="/css/style.css?v=1.66" />
      </Head>
      <Header />
    </>
  );
};

export default Layout;
