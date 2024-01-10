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
  activity4: {
    title: 'Actividad sin imagen con intro corta',
    image: null,
  },
};

const ActivityPage: React.FC<ActivityData> = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isSrolling, setIsScrolling] = useState(false);
  const isMobile = useMediaQueryBase({ query: `(max-width: 768px)` });

  const changeContainerClass = (containerId: string, activity: any) => {
    const viewportHeight = window.innerHeight;
    const element = document.getElementById(containerId);

    if (element) {
      const elementHeight = element.offsetHeight;
      element.className = '';

      if (activity.image && !activity.image?.isFullWidth) {
        element.className = styles.fullWidthIntro;
      } else {
        if (elementHeight + 100 > viewportHeight || elementHeight < viewportHeight / 3) {
          element.className = styles.fullWidthIntro;
        } else {
          element.className = styles.intro;
        }
      }
    }
  };

  const textContainerIds = ['textContainer1', 'textContainer2', 'textContainer3', 'textContainer4'];

  const setTextLayout = () => {
    textContainerIds.forEach((id, index) => {
      if (index === 0) {
        changeContainerClass(id, activities.activity1);
      } else if (index === 1) {
        changeContainerClass(id, activities.activity2);
      } else if (index === 2) {
        changeContainerClass(id, activities.activity3);
      } else if (index === 3) {
        changeContainerClass(id, activities.activity4);
      }
    });
  };
  useEffect(() => {
    setTextLayout();

    window.addEventListener('resize', setTextLayout);

    return () => {
      window.removeEventListener('resize', setTextLayout);
    };
  }, []);

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
    { name: 'Actividad intro corta', url: '#seccion4' },
  ];

  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

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
        <h1>Actividad</h1>
        <Link to="/">Volver a la home</Link>
        <section id="seccion1" ref={sectionRefs[0]}>
          <h2>{activities.activity1.title}</h2>

          {activities.activity1.image && (
            <img
              className={
                activities.activity1.image.isFullWidth ? styles.fullWidthImage : styles.image
              }
              src={activities.activity1.image.url}
            />
          )}

          <div id="textContainer1">
            <p>
              La exposición Ben Shahn. De la no conformidad examina la obra de este artista (Kaunas,
              Lituania, 1898 - Nueva York, 1969), figura central del realismo social americano. La
              comisaria de la muestra, Laura Katzman, propone un recorrido por los principales
              temas, que se acompaña de la lectura dramatizada, a cargo de Alberto Chessa, de una
              selección de ensayos y conferencias de Shahn en los que plasmó su concepción del
              proceso creativo y los fines del arte, así como de textos que influyeron en la vida y
              obra del artista.
            </p>
            <p>
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
            <p>
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
          <h2>{activities.activity2.title}</h2>
          <div>
            {activities.activity2.image && (
              <img
                className={activities.activity2.image.isFullWidth ? styles.image : styles.image}
                src={activities.activity2.image.url}
              />
            )}

            <div id="textContainer2">
              <p>
                La exposición Ben Shahn. De la no conformidad examina la obra de este artista
                (Kaunas, Lituania, 1898 - Nueva York, 1969), figura central del realismo social
                americano. La comisaria de la muestra, Laura Katzman, propone un recorrido por los
                principales temas, que se acompaña de la lectura dramatizada, a cargo de Alberto
                Chessa, de una selección de ensayos y conferencias de Shahn en los que plasmó su
                concepción del proceso creativo y los fines del arte, así como de textos que
                influyeron en la vida y obra del artista.
              </p>
              <p>
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
              <p>
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
          <h2>{activities.activity3.title}</h2>

          {activities.activity3.image && (
            <img
              className={
                activities.activity3.image.isFullWidth ? styles.fullWidthImage : styles.image
              }
              src={activities.activity3.image.url}
            />
          )}

          <div id="textContainer3">
            <p>
              1. La exposición Ben Shahn. De la no conformidad examina la obra de este artista
              (Kaunas, Lituania, 1898 - Nueva York, 1969), figura central del realismo social
              americano. La comisaria de la muestra, Laura Katzman, propone un recorrido por los
              principales temas, que se acompaña de la lectura dramatizada, a cargo de Alberto
              Chessa, de una selección de ensayos y conferencias de Shahn en los que plasmó su
              concepción del proceso creativo y los fines del arte, así como de textos que
              influyeron en la vida y obra del artista.
            </p>
            <p>
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
            <p>
              3. Este recorrido curatorial incide en los aspectos fundamentales de esta exposición,
              que incluyen las crisis económicas y medioambientales de la Gran Depresión, el auge
              del fascismo, las atrocidades de la Segunda Guerra Mundial, las cruzadas
              anticomunistas de la Guerra Fría, la amenaza de aniquilación de la era atómica, las
              luchas a favor de los derechos laborales, civiles y la defensa de los derechos
              humanos, así como el interés de Shahn por temas espirituales e historias bíblicas en
              sus últimos años.
            </p>
            <p>
              4. La exposición Ben Shahn. De la no conformidad examina la obra de este artista
              (Kaunas, Lituania, 1898 - Nueva York, 1969), figura central del realismo social
              americano. La comisaria de la muestra, Laura Katzman, propone un recorrido por los
              principales temas, que se acompaña de la lectura dramatizada, a cargo de Alberto
              Chessa, de una selección de ensayos y conferencias de Shahn en los que plasmó su
              concepción del proceso creativo y los fines del arte, así como de textos que
              influyeron en la vida y obra del artista.
            </p>
            <p>
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
            <p>
              6. Este recorrido curatorial incide en los aspectos fundamentales de esta exposición,
              que incluyen las crisis económicas y medioambientales de la Gran Depresión, el auge
              del fascismo, las atrocidades de la Segunda Guerra Mundial, las cruzadas
              anticomunistas de la Guerra Fría, la amenaza de aniquilación de la era atómica, las
              luchas a favor de los derechos laborales, civiles y la defensa de los derechos
              humanos, así como el interés de Shahn por temas espirituales e historias bíblicas en
              sus últimos años.
            </p>
          </div>
        </section>

        <section id="seccion4" ref={sectionRefs[3]}>
          <h2>{activities.activity4.title}</h2>

          {activities.activity4.image && (
            <img
              className={
                activities.activity4.image.isFullWidth ? styles.fullWidthImage : styles.image
              }
              src={activities.activity4.image.url}
            />
          )}

          <div id="textContainer4">
            <p>
              Proveniente de una familia de clase trabajadora e inmigrante de Europa del Este, Ben
              Shahn fue uno de los artistas más prolíficos y comprometidos de Estados Unidos entre
              las décadas de 1930 y 1960. Su obra trató aspectos cruciales del contexto social
              estadounidense y de la historia global, desde el New Deal hasta la guerra de Vietnam.
              Promoviendo como convicción “la no conformidad” (nonconformity, en palabras del
              artista), Shahn desafió el predominio del expresionismo abstracto y de otras variantes
              del arte de vanguardia de la década de 1950.
            </p>
            <p>
              Proveniente de una familia de clase trabajadora e inmigrante de Europa del Este, Ben
              Shahn fue uno de los artistas más prolíficos y comprometidos de Estados Unidos entre
              las décadas de 1930 y 1960. Su obra trató aspectos cruciales del contexto social
              estadounidense y de la historia global, desde el New Deal hasta la guerra de Vietnam.
              Promoviendo como convicción “la no conformidad” (nonconformity, en palabras del
              artista), Shahn desafió el predominio del expresionismo abstracto y de otras variantes
              del arte de vanguardia de la década de 1950.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default ActivityPage;
