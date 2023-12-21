import React, { useEffect, useState } from 'react';

import gsap from 'gsap';

import { MediaContent } from '../components/MediaContent';
import * as styles from './index.module.scss';

const Index: React.FC = () => {
  const [isMedia, setIsMedia] = useState<boolean[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    gsap.fromTo(
      '#title',
      { x: 0 },
      { x: 400, ease: 'Linear.easeNone', repeat: -1, duration: 3, yoyo: true }
    );

    gsap.fromTo(
      '#paragraph',
      { y: 0 },
      { y: 400, ease: 'Linear.easeNone', repeat: -1, duration: 3, yoyo: true }
    );

    gsap.to('#gsap', { rotation: 360, repeat: -1, duration: 8 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const mediaContents = document.getElementsByClassName('multimediaContent');

      const updatedStates = Array.from(mediaContents).map(mediaElement => {
        const mediaRect = mediaElement.getBoundingClientRect();
        const mediaVerticalCenter = mediaRect.top + mediaRect.height / 2;

        return (
          mediaVerticalCenter > window.innerHeight / 4 &&
          mediaVerticalCenter < (3 * window.innerHeight) / 4
        );
      });

      setIsMedia(updatedStates);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const themeClasses = isMedia.map(state => (state ? styles.darkTheme : ''));
  const framerTheme = isDarkTheme ? styles.dark : '';

  return (
    <div className={`${framerTheme}`}>
      <div className={`${styles.container} ${themeClasses.join(' ')}`}>
        <h1 className={styles.title} id="title">
          Reina Sofía playground
        </h1>

        <p id="paragraph">
          Lanzamos este espacio para probar animaciones de{' '}
          <span className={styles.gsap} id="gsap">
            GSAP
          </span>{' '}
          en Gatsby y con CSS modules.
        </p>

        <div style={{ height: '500px' }} />

        <h2>Picasso 1906. La gran transformación</h2>

        <div className="multimediaContent">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WtUQR4NbTIE?si=K5efTOSh83KUTVih"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <p>
          Aunque en Picasso todo es diverso y todo fluye y confluye, en 1906 encontramos una poética
          propia que evoluciona rápidamente desde sí misma. Estamos ante la refundación de la
          experiencia artística. El proyecto Picasso 1906. La gran transformación quiere mirar con
          ojos contemporáneos la primera aportación de Pablo Picasso a la definición de Arte
          Moderno. En el recorrido expositivo, las obras de Picasso se muestran junto a piezas de
          diferentes periodos de la cultura europea y diversos objetos de cultura material de
          sociedades africanas considerados hoy «obras de arte». Esta acumulación de registros y
          referencias configuró el aspecto biográfico de la «transculturalidad» del Picasso de 1906,
          un aspecto decisivo para entender el sentido de su obra.
        </p>

        <div style={{ height: '300px' }} />

        <h2>Picasso 1906. La gran transformación</h2>

        <div className="multimediaContent">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WtUQR4NbTIE?si=K5efTOSh83KUTVih"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <p>
          Aunque en Picasso todo es diverso y todo fluye y confluye, en 1906 encontramos una poética
          propia que evoluciona rápidamente desde sí misma. Estamos ante la refundación de la
          experiencia artística. El proyecto Picasso 1906. La gran transformación quiere mirar con
          ojos contemporáneos la primera aportación de Pablo Picasso a la definición de Arte
          Moderno. En el recorrido expositivo, las obras de Picasso se muestran junto a piezas de
          diferentes periodos de la cultura europea y diversos objetos de cultura material de
          sociedades africanas considerados hoy «obras de arte». Esta acumulación de registros y
          referencias configuró el aspecto biográfico de la «transculturalidad» del Picasso de 1906,
          un aspecto decisivo para entender el sentido de su obra.
        </p>

        <div style={{ height: '300px' }} />

        <MediaContent isDarkTheme setIsDarkTheme={setIsDarkTheme}>
          <h2>Picasso 1906. La gran transformación</h2>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WtUQR4NbTIE?si=K5efTOSh83KUTVih"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <p>
            Aunque en Picasso todo es diverso y todo fluye y confluye, en 1906 encontramos una
            poética propia que evoluciona rápidamente desde sí misma. Estamos ante la refundación de
            la experiencia artística. El proyecto Picasso 1906. La gran transformación quiere mirar
            con ojos contemporáneos la primera aportación de Pablo Picasso a la definición de Arte
            Moderno. En el recorrido expositivo, las obras de Picasso se muestran junto a piezas de
            diferentes periodos de la cultura europea y diversos objetos de cultura material de
            sociedades africanas considerados hoy «obras de arte». Esta acumulación de registros y
            referencias configuró el aspecto biográfico de la «transculturalidad» del Picasso de
            1906, un aspecto decisivo para entender el sentido de su obra.
          </p>
        </MediaContent>
        <div style={{ height: '300px' }} />

        <MediaContent isDarkTheme setIsDarkTheme={setIsDarkTheme}>
          <h2>Picasso 1906. La gran transformación</h2>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WtUQR4NbTIE?si=K5efTOSh83KUTVih"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <p>
            Aunque en Picasso todo es diverso y todo fluye y confluye, en 1906 encontramos una
            poética propia que evoluciona rápidamente desde sí misma. Estamos ante la refundación de
            la experiencia artística. El proyecto Picasso 1906. La gran transformación quiere mirar
            con ojos contemporáneos la primera aportación de Pablo Picasso a la definición de Arte
            Moderno. En el recorrido expositivo, las obras de Picasso se muestran junto a piezas de
            diferentes periodos de la cultura europea y diversos objetos de cultura material de
            sociedades africanas considerados hoy «obras de arte». Esta acumulación de registros y
            referencias configuró el aspecto biográfico de la «transculturalidad» del Picasso de
            1906, un aspecto decisivo para entender el sentido de su obra.
          </p>
        </MediaContent>

        <div style={{ height: '300px' }} />
      </div>
    </div>
  );
};

export default Index;
