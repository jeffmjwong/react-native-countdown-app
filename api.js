import moment from 'moment';
import uuid from 'uuid';

const url = 'http://localhost:3000/events';

export function getEvents() {
  return fetch(url)
    .then(response => response.json())
    .then(events => events.map(evt => ({
      ...evt,
      date: new Date(evt.date)
    })));
}

export function saveEvent({ title, date }) {
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      title,
      date,
      id: uuid()
    })
  })
    .then(res => res.json())
    .catch(err => console.error(err));
}

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('D MMM YYYY');
}

export function formatDateTime(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('H A on D MMM YYYY');
}

export function getCountdownParts(eventDate) {
  const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));

  return {
    days: parseInt(duration.as('days')),
    hours: duration.get('hours'),
    minutes: duration.get('minutes'),
    seconds: duration.get('seconds')
  }
}
