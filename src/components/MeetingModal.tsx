'use client';

import { useEffect, useState } from 'react';
import styles from './MeetingModal.module.css';

const BOOKING_URL = 'https://cal.com/bravio-demo/30min';
const DELAY_MS = 3000;
const STORAGE_KEY = 'bravio_meeting_modal_dismissed';

export default function MeetingModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show again if the user already dismissed it this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setVisible(true);
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Schedule a meeting">
      <div className={styles.modal}>
        {/* Small decorative top bar */}
        <div className={styles.topBar} />

        <div className={styles.body}>
          {/* Icon */}
          <div className={styles.iconWrap}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>

          <p className={styles.eyebrow}>Free 30-minute call</p>

          <h2 className={styles.heading}>See Bravio in action</h2>

          <p className={styles.sub}>
            Book a quick demo with our team and find out how Bravio can streamline your biomed service ops — no pressure, no commitment.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            onClick={dismiss}
          >
            Book a meeting
          </a>

          <button className={styles.skip} onClick={dismiss} type="button">
            Skip for now
          </button>
        </div>

        {/* Close button */}
        <button className={styles.close} onClick={dismiss} type="button" aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
