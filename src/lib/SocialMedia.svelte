<script lang="ts">
  const facebookLink = import.meta.env.VITE_FACEBOOK || 'https://facebook.com/koloMAD'
  const instagramLink = import.meta.env.VITE_INSTAGRAM || 'https://instagram.com/koloMAD'
  const linkedinLink = import.meta.env.VITE_LINKEDIN || 'https://linkedin.com/company/koloMAD'
  const githubLink = import.meta.env.VITE_GITHUB || 'https://github.com/koloMAD'
</script>

<section>
  <a
    href={facebookLink}
    target="_blank"
    aria-label="Facebook"
    class="social-logo hover:opacity-80 transition-opacity"
  >
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      />
    </svg>
  </a>

  <a
    href={instagramLink}
    target="_blank"
    aria-label="Instagram"
    class="social-logo hover:opacity-80 transition-opacity"
  >
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      />
    </svg>
  </a>

  <a
    href={linkedinLink}
    target="_blank"
    aria-label="LinkedIn"
    class="social-logo hover:opacity-80 transition-opacity"
  >
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.785v2.167h.068c.667-1.263 2.297-2.594 4.728-2.594 5.056 0 5.984 3.333 5.984 7.667V24h-5v-7.333c0-1.75-.032-4-2.438-4-2.44 0-2.813 1.897-2.813 3.867V24h-5V8z"
      />
    </svg>
  </a>

  <a
    href={githubLink}
    target="_blank"
    aria-label="GitHub"
    class="social-logo hover:opacity-80 transition-opacity"
  >
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.095 3.292 9.408 7.865 10.94.575.105.785-.25.785-.555 0-.275-.01-1-.015-1.965-3.2.695-3.875-1.54-3.875-1.54-.525-1.335-1.28-1.69-1.28-1.69-1.045-.715.08-.7.08-.7 1.155.08 1.765 1.185 1.765 1.185 1.03 1.765 2.71 1.255 3.37.96.105-.75.405-1.255.735-1.545-2.555-.29-5.24-1.28-5.24-5.695 0-1.26.45-2.285 1.185-3.09-.12-.29-.515-1.475.115-3.07 0 0 .975-.31 3.195 1.18a11.07 11.07 0 012.91-.39c.985 0 1.98.135 2.91.39 2.215-1.49 3.19-1.18 3.19-1.18.635 1.595.24 2.78.12 3.07.74.805 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.255 5.69.42.365.79 1.07.79 2.17 0 1.57-.015 2.835-.015 3.225 0 .305.205.67.79.555A10.997 10.997 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
      />
    </svg>
  </a>
</section>
