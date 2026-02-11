import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import styles from '../../css/Page404.module.css';

const Page404 = () => {
  return (
    <div className={styles.container}>
      <Seo
        title="404 - Página no encontrada"
        description="Lo sentimos, la página que buscas no existe."
        url="https://digitalsysweb.com/404"
        image="https://digitalsysweb.com/logo2.svg"
      />
      <h1 className={styles.errorCode}>404</h1>
      <div className={styles.line}></div>
      <h2 className={styles.title}>Página no encontrada</h2>
      <p className={styles.message}>
        Esta pagina no existe, vuelve al inicio para seguir navegando.
      </p>
      <Link to="/" className={styles.backLink}>
        Volver al inicio
        <span className={styles.underline}></span>
      </Link>
    </div>
  );
};

export default Page404;