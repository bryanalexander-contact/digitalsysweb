import React from 'react';
import Seo from '../../components/Seo';
import { motion } from 'framer-motion';
import styles from '../../css/Terms.module.css';

const Terms = () => {
  return (
    <div className={styles.pageWrapper}>
      <Seo
        title="Términos y Condiciones"
        description="Reglas y condiciones de uso para los servicios de diseño y desarrollo web de Digital Sys Web."
        url="https://digitalsysweb.com/terms"
        image="https://digitalsysweb.com/logo2.svg"
      />

      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className={styles.subtitle}>Acuerdo de Uso</p>
          <h1 className={styles.title}>Terms.</h1>
        </motion.header>

        <main className={styles.content}>
          <section>
            <h2>1. Aceptación de Términos</h2>
            <p>
              Al acceder a este sitio web, aceptas cumplir con estos términos de servicio y todas las leyes aplicables. Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar o acceder a este sitio.
            </p>
          </section>

          <section className={styles.clayCard}>
            <h2>2. Propiedad Intelectual</h2>
            <p>
              Todo el diseño, código, logotipos y contenido visual en este sitio son propiedad exclusiva de <strong>Digital Sys Web</strong>. Está prohibida la reproducción total o parcial de nuestra estética "Clay" o código fuente sin autorización previa.
            </p>
          </section>

          <section>
            <h2>3. Uso del Cotizador</h2>
            <p>
              Los precios generados por nuestro cotizador son estimaciones referenciales y no constituyen un contrato vinculante hasta que un representante de la agencia valide los requerimientos técnicos finales.
            </p>
          </section>

          <section>
            <h2>4. Limitación de Responsabilidad</h2>
            <p>
              Digital Sys Web no se hace responsable por daños derivados del uso o la imposibilidad de usar los materiales en su sitio web, incluso si se nos ha notificado oralmente o por escrito la posibilidad de tales daños.
            </p>
          </section>

          <div className={styles.contactBox}>
            <p>Para consultas legales:</p>
            <strong>digitalsysweb@gmail.com</strong>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Terms;