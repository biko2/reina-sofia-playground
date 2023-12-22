import React from 'react';

import * as styles from './ActivityPage.module.scss';

const activities = {
  activity1: {
    title: 'Actividad con imagen horizontal',
    image: {
      id: 1,
      url: '/images/image.png',
      isFullWidth: true,
    },
  },
  activity2: {
    title: 'Actividad con imagen vertical',
    image: {
      id: 2,
      url: '/images/image24.png',
      isFullWidth: false,
    },
  },
};

const ActivityPage: React.FC = () => {
  return (
    <div style={{ padding: '60px' }}>
      <section>
        <h2>{activities.activity1.title}</h2>
        <img
          className={activities.activity1.image.isFullWidth ? styles.fullWidthImage : styles.image}
          src={activities.activity1.image.url}
        />

        <div
          className={activities.activity1.image.isFullWidth ? styles.intro : styles.fullWidthIntro}
        >
          <p>
            La exposición Ben Shahn. De la no conformidad examina la obra de este artista (Kaunas,
            Lituania, 1898 - Nueva York, 1969), figura central del realismo social americano. La
            comisaria de la muestra, Laura Katzman, propone un recorrido por los principales temas,
            que se acompaña de la lectura dramatizada, a cargo de Alberto Chessa, de una selección
            de ensayos y conferencias de Shahn en los que plasmó su concepción del proceso creativo
            y los fines del arte, así como de textos que influyeron en la vida y obra del artista.
          </p>
          <p>
            Proveniente de una familia de clase trabajadora e inmigrante de Europa del Este, Ben
            Shahn fue uno de los artistas más prolíficos y comprometidos de Estados Unidos entre las
            décadas de 1930 y 1960. Su obra trató aspectos cruciales del contexto social
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
            la Guerra Fría, la amenaza de aniquilación de la era atómica, las luchas a favor de los
            derechos laborales, civiles y la defensa de los derechos humanos, así como el interés de
            Shahn por temas espirituales e historias bíblicas en sus últimos años.
          </p>
        </div>
      </section>

      <section>
        <h2>{activities.activity2.title}</h2>
        <div>
          <img
            className={activities.activity2.image.isFullWidth ? styles.image : styles.image}
            src={activities.activity2.image.url}
          />

          <div
            className={
              activities.activity2.image.isFullWidth ? styles.intro : styles.fullWidthIntro
            }
          >
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
              interés de Shahn por temas espirituales e historias bíblicas en sus últimos años. Este
              recorrido curatorial incide en los aspectos fundamentales de esta exposición, que
              incluyen las crisis económicas y medioambientales de la Gran Depresión, el auge del
              fascismo, las atrocidades de la Segunda Guerra Mundial, las cruzadas anticomunistas de
              la Guerra Fría, la amenaza de aniquilación de la era atómica, las luchas a favor de
              los derechos laborales, civiles y la defensa de los derechos humanos, así como el
              interés de Shahn por temas espirituales e historias bíblicas en sus últimos años.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivityPage;
