import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="lebepage, starprince, dev_starprince, @dev_starprince, blockchain, Emmanuel, nweke, software Developer, javascript developer, software developer, software engineer, fullstack, developer"
          />
          <meta
            name="description"
            content="Lebe Amadikwa is an accomplished software engineer
            based in London, United Kingdom. He specialises in web
            and mobile development using standard practices with an emphasis on
            offering practical solutions to people and small
            enterprises."
          />
          <meta name="author" content="Emmanuel Amadikwa L." />
          <meta name="og:title" content="Emmanuel Amadikwa Software developer" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="lebepage" />
          <meta
            name="og:description"
            content="Lebe Amadikwa is an accomplished software engineer
            based in London, United Kingdom. He specialises in web
            and mobile development using standard practices with an emphasis on
            offering practical solutions to people and small
            enterprises."
          />
          <meta
            name="og:image"
            content="https://res.cloudinary.com/starprince-dev/image/upload/w_700/v1688904351/princenweke.com/prince_white_bg_siqub6.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" /> {/* Specifies the type of card for Twitter */}
          <meta name="twitter:site" content="@emmanuellebe24" /> {/* Replace with your Twitter handle */}
          <meta name="twitter:title" content="Emmanuel lebe Amadikwa Software developer" />
          <meta
            name="twitter:description"
            content="Lebe Amadikwa is an accomplished software engineer based in London, United Kingdom. He specialises in web and mobile development using standard practices with an emphasis on offering practical solutions to people and small enterprises.."
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/starprince-dev/image/upload/w_700/v1688904351/princenweke.com/prince_white_bg_siqub6.jpg"
          />
          <link rel="canonical" href="https://lebepage.vercel.app/" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
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
