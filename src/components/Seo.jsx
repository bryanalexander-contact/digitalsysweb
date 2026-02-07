import { Helmet } from 'react-helmet-async';

const Seo = ({ title, description, url, image, schema }) => {
  return (
    <Helmet>
      {/* SEO Básico */}
      <title>{title} | Digital Systech</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Redes Sociales (Open Graph / Facebook) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter (X) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Etiquetas GEO (Local SEO) */}
      <meta name="geo.region" content="CL" /> {/* Ajusta según tu país */}
      <meta name="geo.placename" content="Santiago" />
      <meta name="geo.position" content="-33.4489;-70.6693" />
      <meta name="ICBM" content="-33.4489, -70.6693" />

      {/* Esquema JSON-LD (SEO/AEO) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;