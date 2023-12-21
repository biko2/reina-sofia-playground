import React, { useEffect } from 'react';

import gsap from 'gsap';

import { Calendar } from './components/Calendar';
import * as styles from './index.module.scss';

const Index: React.FC = () => {
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

  return (
    <>
      <Calendar />

      <a
        target="_blank"
        className={styles.calendar}
        href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Reina+Sofia+Playground+Event&dates=20240127T224000Z/20240320T221500Z&details=For+details,+link+here:+http://www.example.com&location=Madrid,+Spain&sf=true&output=xml"
      >
        Add to Google calendar link button
      </a>

      <a
        target="_blank"
        className={styles.calendar}
        href="https://outlook.live.com/calendar/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=2024-01-12T16:00:00Z&enddt=2024-01-12T17:40:00Z&subject=Reina+Sofia+Playground+Event&location=Madrid,+Spain"
      >
        Add to Outlook calendar link button
      </a>

      <a
        target="_blank"
        className={styles.calendar}
        href="https://outlook.office.com/calendar/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=2024-01-12T16:00:00Z&enddt=2024-01-12T17:40:00Z&subject=Reina+Sofia+Playground+Event&location=Madrid,+Spain"
      >
        Add to Office365 calendar link button
      </a>

      <a
        target="_blank"
        className={styles.calendar}
        href="data:text/calendar;charset=utf8;base64,QkVHSU46VkNBTEVOREFSDQpWRVJTSU9OOjIuMA0KQkVHSU46VkVWRU5UDQpVSUQ6ZmE4NzYzZTdkMmU5ZTkyNmJmMDJlN2RiODcwZGM4YzMNClNVTU1BUlk6QW50ZXMgZGUgQW3DqXJpY2EgZW4gbGEgZ3JhbiBwYW50YWxsYS4gRnVlbnRlcyBvcmlnaW5hcmlhcyB5IG1vZGVybmlkYWQgY2luZW1hdG9ncsOhZmljYSAoSVYpOiBEZXNlYWRhICgxOTUxKSBkZSBSb2JlcnRvIEdhdmFsZMOzbg0KRFRTVEFSVDoyMDI0MDExMlQxNjAwMDBaDQpEVEVORDoyMDI0MDExMlQxNzQwMDBaDQpMT0NBVElPTjpNdXNldSBGdW5kYWNpw7NuIEp1YW4gTWFyY2ggfCBQYWxtYS4gQ2FycmVyIGRlIFNhbnQgTWlxdWVsXCwgMTENCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVI="
      >
        Add to Apple calendar link button
      </a>

      <a
        target="_blank"
        className={styles.calendar}
        href="https://calendar.yahoo.com/?v=60&view=d&type=20&ST=20240112T160000Z&ET=20240112T174000Z&TITLE=Reina+Sofia+Playground+Event&in_loc=Madrid,+Spain"
      >
        Add to Yahoo calendar link button
      </a>

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
    </>
  );
};

export default Index;
