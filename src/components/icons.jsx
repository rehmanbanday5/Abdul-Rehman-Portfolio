export function GithubIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C6.48 2 2 6.58 2 12.21c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.51-3.5-.7-3.72-1.34-.13-.34-.68-1.34-1.16-1.62-.4-.22-.97-.76-.01-.77.9-.01 1.55.85 1.76 1.2 1.03 1.75 2.68 1.26 3.33.96.1-.75.4-1.26.72-1.55-2.53-.29-5.18-1.29-5.18-5.72 0-1.26.44-2.3 1.16-3.11-.12-.29-.5-1.48.11-3.08 0 0 .95-.31 3.12 1.19a10.5 10.5 0 0 1 5.68 0c2.17-1.5 3.12-1.19 3.12-1.19.61 1.6.23 2.79.11 3.08.72.81 1.16 1.84 1.16 3.11 0 4.44-2.66 5.42-5.2 5.71.41.36.77 1.08.77 2.18 0 1.58-.01 2.85-.01 3.24 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.21C22 6.58 17.52 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7.5 10v6.5M7.5 7.5v.01M11.5 16.5V13c0-1.2.9-2 2-2s2 .8 2 2v3.5M11.5 10v6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}


