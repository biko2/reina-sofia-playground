import React, { useEffect, useState } from 'react';

import { Link } from 'gatsby';

import { MediaContent } from '../components/MediaContent';
import * as styles from './DarkTheme.module.scss';

const DarkThemeFramer: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const framerTheme = isDarkTheme ? styles.darkTheme : '';

  return (
    <div className={`${styles.container} ${framerTheme}`}>
      <h1>Prueba dark theme con Framer Motion</h1>
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

      <MediaContent setIsDarkTheme={setIsDarkTheme}>
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
      </MediaContent>
      <div style={{ height: '300px' }} />

      <MediaContent setIsDarkTheme={setIsDarkTheme}>
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
      </MediaContent>

      <div style={{ height: '300px' }} />
    </div>
  );
};

export default DarkThemeFramer;
