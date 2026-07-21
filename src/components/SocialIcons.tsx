type IconProps = { className?: string };

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3.5 21h3v-11h-3v11zm6.5 0h3v-5.8c0-1.54.61-2.7 2.13-2.7 1.34 0 1.87 1 1.87 2.7V21h3v-6.5c0-3.3-1.76-4.83-4.1-4.83-1.9 0-2.68 1.05-3.14 1.78h.04V10h-2.8c.04.86 0 11 0 11z" />
    </svg>
  );
}

export function DribbbleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M4.5 8.5c4 1.6 9 1.9 14 .6M3.5 14c5.5-1.2 11.5-.3 15.7 2.4M9.8 3.2c2.8 3.7 4.7 8.9 5 17.4" strokeLinecap="round" />
    </svg>
  );
}
