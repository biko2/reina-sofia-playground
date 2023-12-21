import React, { useEffect } from 'react';

export const Calendar: React.FC = () => {
  var gapi = window.gapi;
  var google = window.google;

  var CLIENT_ID = '956204883146-8d1v98lrtuolrmi37nkhe4g5v12t7h13.apps.googleusercontent.com';
  var API_KEY = 'AIzaSyAMktpLgSt0f0oluEg7iBSoda-gHLNk7ok';
  var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
  var SCOPES = 'https://www.googleapis.com/auth/calendar.events';
  let tokenClient: any;

  useEffect(() => {
    gapiLoaded();
    gisLoaded();
  }, []);

  function gapiLoaded() {
    gapi.load('client', async function initializeGapiClient() {
      await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS,
      });
    });
  }

  function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '',
    });
  }

  function handleAuthClick() {
    tokenClient.callback = async (resp: any) => {
      if (resp.error !== undefined) {
        throw resp;
      }
      addToCalendar();
    };

    if (gapi.client.getToken() === null) {
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      tokenClient.requestAccessToken({ prompt: '' });
    }
  }

  function addToCalendar() {
    const event = {
      summary: 'Museo Reina Sofía Playground',
      location: 'Madrid, España',
      description: 'Probando creación de eventos mediante el Google Calendar API',
      start: {
        dateTime: '2023-12-28T09:00:00-07:00',
        timeZone: 'America/Los_Angeles',
      },
      end: {
        dateTime: '2023-12-28T10:00:00-07:00',
        timeZone: 'America/Los_Angeles',
      },
      recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
      attendees: [{ email: 'alvaro.delpazo@biko2.com' }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 10 },
        ],
      },
    };

    const request = gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });

    request.execute(function (event: any) {
      document.getElementById('content').innerText = 'Event created: ' + event.htmlLink;
    });
  }

  return (
    <>
      <button onClick={handleAuthClick}>Añadir evento mediante GoogleCalendarAPI</button>

      <pre id="content" />
    </>
  );
};
