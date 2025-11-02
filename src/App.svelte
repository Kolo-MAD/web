<script lang="ts">
  import madLogo from '/mad.svg'

  const facebookLink: string = import.meta.env.VITE_FACEBOOK || 'https://facebook.com/koloMAD';
  const instagramLink: string = import.meta.env.VITE_INSTAGRAM || 'https://instagram.com/koloMAD';
  const linkedinLink: string = import.meta.env.VITE_LINKEDIN || 'https://linkedin.com/company/koloMAD';
  const macMeetingLink: string = import.meta.env.VITE_MACMEETING || 'https://macmeeting.pl';
  const mailLink: string = import.meta.env.VITE_MAIL || 'mad@student.wroclaw.merito.pl';

  const sendMail = (): void => {
    window.location.href = `mailto:${mailLink}`;
  };
</script>

<main class="max-w-4xl mx-auto p-6 text-center">
  <div class="mb-6">
    <img src={madLogo} alt="Mad Logo" class="mx-auto h-24 w-24 logo hover:drop-shadow-xl transition-shadow" />
  </div>

  <h1 class="text-4xl font-bold mb-2">Koło Naukowe MAD</h1>
  <h2 class="text-xl mb-4">przy Uniwersytecie WSB Merito we Wrocławiu</h2>

  <p class="mb-6 text-gray-200">
    MAD to koło naukowe, które pozwala stać się Power-Userem systemu operacyjnego Apple. 
    Oprócz tego umożliwia studentom rozwijanie swoich projektów w języku Swift, przy wykorzystaniu najnowszych technologii.
    Koło jest prowadzone pod czujnym okiem certyfikowanego trenera Apple.
    Uczestnictwo w kole otwiera szereg dróg: od możliwości podejścia do certyfikatów po budowanie sieci kontaktów w kręgu osób interesujących się Apple.
    Ponadto koło MAD jest współorganizatorem konferencji technologicznej MacMeeting. Wejdź na 
    <a href={macMeetingLink} target="_blank" rel="noreferrer" class="text-sky-500 hover:underline">oficjalną stronę</a> wydarzenia, aby dowiedzieć się więcej!
  </p>

  <section class="flex justify-center gap-6 mb-6">
    <a href={facebookLink} target="_blank" aria-label="Facebook" class="social-logo hover:opacity-80 transition-opacity">
      <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    </a>

    <a href={instagramLink} target="_blank" aria-label="Instagram" class="social-logo hover:opacity-80 transition-opacity">
      <svg class="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-1a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
      </svg>
    </a>

    <a href={linkedinLink} target="_blank" aria-label="LinkedIn" class="social-logo hover:opacity-80 transition-opacity">
      <svg class="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.785v2.167h.068c.667-1.263 2.297-2.594 4.728-2.594 5.056 0 5.984 3.333 5.984 7.667V24h-5v-7.333c0-1.75-.032-4-2.438-4-2.44 0-2.813 1.897-2.813 3.867V24h-5V8z"/>
      </svg>
    </a>
  </section>

  <button
    class="px-6 py-2 bg-sky-600 text-white font-semibold rounded hover:bg-sky-700 transition-colors"
    on:click={sendMail}
  >
    Dołącz do nas!
  </button>
</main>
