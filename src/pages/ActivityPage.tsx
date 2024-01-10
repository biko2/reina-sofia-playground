import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery as useMediaQueryBase } from 'react-responsive';

import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';

import { Layout } from '../components/Layout';
import * as styles from './ActivityPage.module.scss';

interface ActivityData {
  [key: string]: {
    title: string;
    image: {
      url: string;
      isFullWidth: boolean;
    } | null;
  };
}

const activities: ActivityData = {
  activity1: {
    title: 'Actividad con imagen fullWidth',
    image: {
      url: '/images/image.png',
      isFullWidth: true,
    },
  },
  activity2: {
    title: 'Actividad con imagen',
    image: {
      url: '/images/image24.png',
      isFullWidth: false,
    },
  },
  activity3: {
    title: 'Actividad sin imagen',
    image: null,
  },
};

const ActivityPage: React.FC<ActivityData> = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isSrolling, setIsScrolling] = useState(false);
  const isMobile = useMediaQueryBase({ query: `(max-width: 768px)` });

  const handleVisibilityScroll = () => {
    if (window.scrollY >= 100) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibilityScroll);

    return () => {
      window.removeEventListener('scroll', handleVisibilityScroll);
    };
  }, []);

  const NavigationAnimation = {
    initial: {
      y: !isMobile ? -100 : 100,
      x: !isMobile ? '-50%' : '0%',
      opacity: 0,
    },
    animate: {
      y: 0,
      x: !isMobile ? '-50%' : '0%',
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
    exit: {
      y: !isMobile ? -150 : 150,
      opacity: 0,
    },
  };
  const links = [
    { name: 'Actividad con imagen fullwidth', url: '#seccion1' },
    { name: 'Actividad con imagen', url: '#seccion2' },
    { name: 'Actividad sin imagen', url: '#seccion3' },
  ];

  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sectionRefs.forEach((ref: any, index) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop - 100;
          const height = ref.current.clientHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(links[index].name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Layout slug="activity-page">
      <AnimatePresence>
        {isSrolling && (
          <motion.div
            key={1}
            className={styles.navbarWrapper}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={NavigationAnimation}
          >
            <ul className={styles.navbar}>
              {links.map(link => (
                <motion.li
                  className={`${styles.navbarItem} ${
                    link.name === activeSection && styles.navbarActiveItem
                  }`}
                >
                  <Link to={link.url} onClick={() => setActiveSection(link.name)}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.wrapper}>
        <h1 className={styles.title}>Actividad</h1>
        <Link to="/">Volver a la home</Link>
        <section id="seccion1" ref={sectionRefs[0]}>
          <h2 className={styles.sectionTitle}>{activities.activity1.title}</h2>

          {activities.activity1.image && (
            <img
              className={
                activities.activity1.image.isFullWidth ? styles.fullWidthImage : styles.image
              }
              src={activities.activity1.image.url}
            />
          )}

          <div
            className={
              !activities.activity1.image
                ? styles.intro
                : activities.activity1.image.isFullWidth
                ? styles.intro
                : styles.fullWidthIntro
            }
          >
            <p className={styles.contentText}>
              La exposición Ben Shahn. De la no conformidad examina la obra de este artista (Kaunas,
              Lituania, 1898 - Nueva York, 1969), figura central del realismo social americano. La
              comisaria de la muestra, Laura Katzman, propone un recorrido por los principales
              temas, que se acompaña de la lectura dramatizada, a cargo de Alberto Chessa, de una
              selección de ensayos y conferencias de Shahn en los que plasmó su concepción del
              proceso creativo y los fines del arte, así como de textos que influyeron en la vida y
              obra del artista.
            </p>
            <p className={styles.contentText}>
              Proveniente de una familia de clase trabajadora e inmigrante de Europa del Este, Ben
              Shahn fue uno de los artistas más prolíficos y comprometidos de Estados Unidos entre
              las décadas de 1930 y 1960. Su obra trató aspectos cruciales del contexto social
              estadounidense y de la historia global, desde el New Deal hasta la guerra de Vietnam.
              Promoviendo como convicción “la no conformidad” (nonconformity, en palabras del
              artista), Shahn desafió el predominio del expresionismo abstracto y de otras variantes
              del arte de vanguardia de la década de 1950. Esta retrospectiva, la primera organizada
              en España, pone el foco en el compromiso del artista con una idea de justicia social
              entendida desde la perspectiva de la diversidad y equidad contemporáneas, ya que Shahn
              fue impulsor de los derechos de trabajadores y migrantes, y criticó abiertamente los
              abusos perpetrados por las clases privilegiadas y poderosas.
            </p>
            <p className={styles.contentText}>
              Este recorrido curatorial incide en los aspectos fundamentales de esta exposición, que
              incluyen las crisis económicas y medioambientales de la Gran Depresión, el auge del
              fascismo, las atrocidades de la Segunda Guerra Mundial, las cruzadas anticomunistas de
              la Guerra Fría, la amenaza de aniquilación de la era atómica, las luchas a favor de
              los derechos laborales, civiles y la defensa de los derechos humanos, así como el
              interés de Shahn por temas espirituales e historias bíblicas en sus últimos años.
            </p>
          </div>
        </section>

        <section id="seccion2" ref={sectionRefs[1]}>
          <h2 className={styles.sectionTitle}>{activities.activity2.title}</h2>
          <div>
            {activities.activity2.image && (
              <img
                className={activities.activity2.image.isFullWidth ? styles.image : styles.image}
                src={activities.activity2.image.url}
              />
            )}

            <div
              className={
                !activities.activity2.image
                  ? styles.intro
                  : activities.activity2.image.isFullWidth
                  ? styles.intro
                  : styles.fullWidthIntro
              }
            >
              <p className={styles.contentText}>
                La exposición Ben Shahn. De la no conformidad examina la obra de este artista
                (Kaunas, Lituania, 1898 - Nueva York, 1969), figura central del realismo social
                americano. La comisaria de la muestra, Laura Katzman, propone un recorrido por los
                principales temas, que se acompaña de la lectura dramatizada, a cargo de Alberto
                Chessa, de una selección de ensayos y conferencias de Shahn en los que plasmó su
                concepción del proceso creativo y los fines del arte, así como de textos que
                influyeron en la vida y obra del artista.
              </p>
              <p className={styles.contentText}>
                Proveniente de una familia de clase trabajadora e inmigrante de Europa del Este, Ben
                Shahn fue uno de los artistas más prolíficos y comprometidos de Estados Unidos entre
                las décadas de 1930 y 1960. Su obra trató aspectos cruciales del contexto social
                estadounidense y de la historia global, desde el New Deal hasta la guerra de
                Vietnam. Promoviendo como convicción “la no conformidad” (nonconformity, en palabras
                del artista), Shahn desafió el predominio del expresionismo abstracto y de otras
                variantes del arte de vanguardia de la década de 1950. Esta retrospectiva, la
                primera organizada en España, pone el foco en el compromiso del artista con una idea
                de justicia social entendida desde la perspectiva de la diversidad y equidad
                contemporáneas, ya que Shahn fue impulsor de los derechos de trabajadores y
                migrantes, y criticó abiertamente los abusos perpetrados por las clases
                privilegiadas y poderosas.
              </p>
              <p className={styles.contentText}>
                Este recorrido curatorial incide en los aspectos fundamentales de esta exposición,
                que incluyen las crisis económicas y medioambientales de la Gran Depresión, el auge
                del fascismo, las atrocidades de la Segunda Guerra Mundial, las cruzadas
                anticomunistas de la Guerra Fría, la amenaza de aniquilación de la era atómica, las
                luchas a favor de los derechos laborales, civiles y la defensa de los derechos
                humanos, así como el interés de Shahn por temas espirituales e historias bíblicas en
                sus últimos años. Este recorrido curatorial incide en los aspectos fundamentales de
                esta exposición, que incluyen las crisis económicas y medioambientales de la Gran
                Depresión, el auge del fascismo, las atrocidades de la Segunda Guerra Mundial, las
                cruzadas anticomunistas de la Guerra Fría, la amenaza de aniquilación de la era
                atómica, las luchas a favor de los derechos laborales, civiles y la defensa de los
                derechos humanos, así como el interés de Shahn por temas espirituales e historias
                bíblicas en sus últimos años.
              </p>
            </div>
          </div>
        </section>

        <section id="seccion3" ref={sectionRefs[2]}>
          <h2 className={styles.sectionTitle}>{activities.activity3.title}</h2>

          {activities.activity3.image && (
            <img
              className={
                activities.activity3.image.isFullWidth ? styles.fullWidthImage : styles.image
              }
              src={activities.activity3.image.url}
            />
          )}

          <div
            className={
              !activities.activity3.image
                ? styles.intro
                : activities.activity3.image.isFullWidth
                ? styles.intro
                : styles.fullWidthIntro
            }
          >
            <p className={styles.contentText}>
              1. La exposición Ben Shahn. De la no conformidad examina la obra de este artista
              (Kaunas, Lituania, 1898 - Nueva York, 1969), figura central del realismo social
              americano. La comisaria de la muestra, Laura Katzman, propone un recorrido por los
              principales temas, que se acompaña de la lectura dramatizada, a cargo de Alberto
              Chessa, de una selección de ensayos y conferencias de Shahn en los que plasmó su
              concepción del proceso creativo y los fines del arte, así como de textos que
              influyeron en la vida y obra del artista.
            </p>
            <p className={styles.contentText}>
              2. Proveniente de una familia de clase trabajadora e inmigrante de Europa del Este,
              Ben Shahn fue uno de los artistas más prolíficos y comprometidos de Estados Unidos
              entre las décadas de 1930 y 1960. Su obra trató aspectos cruciales del contexto social
              estadounidense y de la historia global, desde el New Deal hasta la guerra de Vietnam.
              Promoviendo como convicción “la no conformidad” (nonconformity, en palabras del
              artista), Shahn desafió el predominio del expresionismo abstracto y de otras variantes
              del arte de vanguardia de la década de 1950. Esta retrospectiva, la primera organizada
              en España, pone el foco en el compromiso del artista con una idea de justicia social
              entendida desde la perspectiva de la diversidad y equidad contemporáneas, ya que Shahn
              fue impulsor de los derechos de trabajadores y migrantes, y criticó abiertamente los
              abusos perpetrados por las clases privilegiadas y poderosas.
            </p>
            <p className={styles.contentText}>
              3. Este recorrido curatorial incide en los aspectos fundamentales de esta exposición,
              que incluyen las crisis económicas y medioambientales de la Gran Depresión, el auge
              del fascismo, las atrocidades de la Segunda Guerra Mundial, las cruzadas
              anticomunistas de la Guerra Fría, la amenaza de aniquilación de la era atómica, las
              luchas a favor de los derechos laborales, civiles y la defensa de los derechos
              humanos, así como el interés de Shahn por temas espirituales e historias bíblicas en
              sus últimos años.
            </p>
            <p className={styles.contentText}>
              4. La exposición Ben Shahn. De la no conformidad examina la obra de este artista
              (Kaunas, Lituania, 1898 - Nueva York, 1969), figura central del realismo social
              americano. La comisaria de la muestra, Laura Katzman, propone un recorrido por los
              principales temas, que se acompaña de la lectura dramatizada, a cargo de Alberto
              Chessa, de una selección de ensayos y conferencias de Shahn en los que plasmó su
              concepción del proceso creativo y los fines del arte, así como de textos que
              influyeron en la vida y obra del artista.
            </p>
            <p className={styles.contentText}>
              5. Proveniente de una familia de clase trabajadora e inmigrante de Europa del Este,
              Ben Shahn fue uno de los artistas más prolíficos y comprometidos de Estados Unidos
              entre las décadas de 1930 y 1960. Su obra trató aspectos cruciales del contexto social
              estadounidense y de la historia global, desde el New Deal hasta la guerra de Vietnam.
              Promoviendo como convicción “la no conformidad” (nonconformity, en palabras del
              artista), Shahn desafió el predominio del expresionismo abstracto y de otras variantes
              del arte de vanguardia de la década de 1950. Esta retrospectiva, la primera organizada
              en España, pone el foco en el compromiso del artista con una idea de justicia social
              entendida desde la perspectiva de la diversidad y equidad contemporáneas, ya que Shahn
              fue impulsor de los derechos de trabajadores y migrantes, y criticó abiertamente los
              abusos perpetrados por las clases privilegiadas y poderosas.
            </p>
            <p className={styles.contentText}>
              6. Este recorrido curatorial incide en los aspectos fundamentales de esta exposición,
              que incluyen las crisis económicas y medioambientales de la Gran Depresión, el auge
              del fascismo, las atrocidades de la Segunda Guerra Mundial, las cruzadas
              anticomunistas de la Guerra Fría, la amenaza de aniquilación de la era atómica, las
              luchas a favor de los derechos laborales, civiles y la defensa de los derechos
              humanos, así como el interés de Shahn por temas espirituales e historias bíblicas en
              sus últimos años.
            </p>
            <p className={styles.contentText}>
              7. La exposición Ben Shahn. De la no conformidad examina la obra de este artista
              (Kaunas, Lituania, 1898 - Nueva York, 1969), figura central del realismo social
              americano. La comisaria de la muestra, Laura Katzman, propone un recorrido por los
              principales temas, que se acompaña de la lectura dramatizada, a cargo de Alberto
              Chessa, de una selección de ensayos y conferencias de Shahn en los que plasmó su
              concepción del proceso creativo y los fines del arte, así como de textos que
              influyeron en la vida y obra del artista.
            </p>
            <p className={styles.contentText}>
              8. Proveniente de una familia de clase trabajadora e inmigrante de Europa del Este,
              Ben Shahn fue uno de los artistas más prolíficos y comprometidos de Estados Unidos
              entre las décadas de 1930 y 1960. Su obra trató aspectos cruciales del contexto social
              estadounidense y de la historia global, desde el New Deal hasta la guerra de Vietnam.
              Promoviendo como convicción “la no conformidad” (nonconformity, en palabras del
              artista), Shahn desafió el predominio del expresionismo abstracto y de otras variantes
              del arte de vanguardia de la década de 1950. Esta retrospectiva, la primera organizada
              en España, pone el foco en el compromiso del artista con una idea de justicia social
              entendida desde la perspectiva de la diversidad y equidad contemporáneas, ya que Shahn
              fue impulsor de los derechos de trabajadores y migrantes, y criticó abiertamente los
              abusos perpetrados por las clases privilegiadas y poderosas.
            </p>
            <p className={styles.contentText}>
              9. Este recorrido curatorial incide en los aspectos fundamentales de esta exposición,
              que incluyen las crisis económicas y medioambientales de la Gran Depresión, el auge
              del fascismo, las atrocidades de la Segunda Guerra Mundial, las cruzadas
              anticomunistas de la Guerra Fría, la amenaza de aniquilación de la era atómica, las
              luchas a favor de los derechos laborales, civiles y la defensa de los derechos
              humanos, así como el interés de Shahn por temas espirituales e historias bíblicas en
              sus últimos años.
            </p>
            <p className={styles.contentText}>
              10. La exposición Ben Shahn. De la no conformidad examina la obra de este artista
              (Kaunas, Lituania, 1898 - Nueva York, 1969), figura central del realismo social
              americano. La comisaria de la muestra, Laura Katzman, propone un recorrido por los
              principales temas, que se acompaña de la lectura dramatizada, a cargo de Alberto
              Chessa, de una selección de ensayos y conferencias de Shahn en los que plasmó su
              concepción del proceso creativo y los fines del arte, así como de textos que
              influyeron en la vida y obra del artista.
            </p>
            <p className={styles.contentText}>
              11. Proveniente de una familia de clase trabajadora e inmigrante de Europa del Este,
              Ben Shahn fue uno de los artistas más prolíficos y comprometidos de Estados Unidos
              entre las décadas de 1930 y 1960. Su obra trató aspectos cruciales del contexto social
              estadounidense y de la historia global, desde el New Deal hasta la guerra de Vietnam.
              Promoviendo como convicción “la no conformidad” (nonconformity, en palabras del
              artista), Shahn desafió el predominio del expresionismo abstracto y de otras variantes
              del arte de vanguardia de la década de 1950. Esta retrospectiva, la primera organizada
              en España, pone el foco en el compromiso del artista con una idea de justicia social
              entendida desde la perspectiva de la diversidad y equidad contemporáneas, ya que Shahn
              fue impulsor de los derechos de trabajadores y migrantes, y criticó abiertamente los
              abusos perpetrados por las clases privilegiadas y poderosas.
            </p>
            <p className={styles.contentText}>
              12. Este recorrido curatorial incide en los aspectos fundamentales de esta exposición,
              que incluyen las crisis económicas y medioambientales de la Gran Depresión, el auge
              del fascismo, las atrocidades de la Segunda Guerra Mundial, las cruzadas
              anticomunistas de la Guerra Fría, la amenaza de aniquilación de la era atómica, las
              luchas a favor de los derechos laborales, civiles y la defensa de los derechos
              humanos, así como el interés de Shahn por temas espirituales e historias bíblicas en
              sus últimos años.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ActivityPage;
