import { useEffect, useMemo, useState } from 'react';

export function useClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return useMemo(() => {
    const time = new Intl.DateTimeFormat(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    }).format(now);

    const seconds = new Intl.DateTimeFormat(undefined, {
      second: '2-digit',
    }).format(now);

    const date = new Intl.DateTimeFormat(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }).format(now);

    const compact = new Intl.DateTimeFormat(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(now);

    return { now, time, seconds, date, compact };
  }, [now]);
}
