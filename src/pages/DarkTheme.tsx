import React, { useEffect, useState } from 'react';

import { Link } from 'gatsby';

import * as styles from './DarkTheme.module.scss';

const DarkTheme: React.FC = () => {
  const [isMedia, setIsMedia] = useState<boolean[]>([]);

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

  return (
    <div className={`${styles.container} ${themeClasses.join(' ')}`}>
      <h1>Prueba dark theme</h1>
      <Link to="/">Volver a la home</Link>
      <p>
        Aunque en Picasso todo es diverso y todo fluye y confluye, en 1906 encontramos una poética
        propia que evoluciona rápidamente desde sí misma. Estamos ante la refundación de la
        experiencia artística. El proyecto Picasso 1906. La gran transformación quiere mirar con
        ojos contemporáneos la primera aportación de Pablo Picasso a la definición de Arte Moderno.
        En el recorrido expositivo, las obras de Picasso se muestran junto a piezas de diferentes
        periodos de la cultura europea y diversos objetos de cultura material de sociedades
        africanas considerados hoy «obras de arte». Esta acumulación de registros y referencias
        configuró el aspecto biográfico de la «transculturalidad» del Picasso de 1906, un aspecto
        decisivo para entender el sentido de su obra.
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
        ojos contemporáneos la primera aportación de Pablo Picasso a la definición de Arte Moderno.
        En el recorrido expositivo, las obras de Picasso se muestran junto a piezas de diferentes
        periodos de la cultura europea y diversos objetos de cultura material de sociedades
        africanas considerados hoy «obras de arte». Esta acumulación de registros y referencias
        configuró el aspecto biográfico de la «transculturalidad» del Picasso de 1906, un aspecto
        decisivo para entender el sentido de su obra.
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
        ojos contemporáneos la primera aportación de Pablo Picasso a la definición de Arte Moderno.
        En el recorrido expositivo, las obras de Picasso se muestran junto a piezas de diferentes
        periodos de la cultura europea y diversos objetos de cultura material de sociedades
        africanas considerados hoy «obras de arte». Esta acumulación de registros y referencias
        configuró el aspecto biográfico de la «transculturalidad» del Picasso de 1906, un aspecto
        decisivo para entender el sentido de su obra.
      </p>

      <div style={{ height: '300px' }} />
    </div>
  );
};

export default DarkTheme;
