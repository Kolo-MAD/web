<script lang="ts">
  import SocialMedia from './SocialMedia.svelte'
  import { applyNbsp } from './nbsp.ts'

  const facebookLink = import.meta.env.VITE_FACEBOOK || 'https://facebook.com/koloMAD'
  const instagramLink = import.meta.env.VITE_INSTAGRAM || 'https://instagram.com/koloMAD'
  const linkedinLink = import.meta.env.VITE_LINKEDIN || 'https://linkedin.com/company/koloMAD'
  const macMeetingLink = import.meta.env.VITE_MACMEETING || 'https://macmeeting.pl'
  const mailLink = import.meta.env.VITE_MAIL || 'mad@student.wroclaw.merito.pl'

  const text = `
    MAD to koło naukowe, które pozwala stać się Power-Userem systemu operacyjnego Apple.
    Oprócz tego umożliwia studentom rozwijanie swoich projektów w języku Swift,
    przy wykorzystaniu najnowszych technologii. Koło jest prowadzone pod czujnym okiem
    certyfikowanego trenera Apple. Uczestnictwo w kole otwiera szereg dróg: od możliwości
    podejścia do certyfikatów po budowanie sieci kontaktów w kręgu osób interesujących się Apple.
    Ponadto koło MAD jest współorganizatorem konferencji technologicznej MacMeeting.
    Wejdź na oficjalną stronę wydarzenia, aby dowiedzieć się więcej!
  `

  const formatted = applyNbsp(text)
</script>

<main>
  <p>{@html formatted}</p>

  <SocialMedia />

  <button on:click={() => (window.location.href = `mailto:${mailLink}`)}> Dołącz do nas! </button>
</main>
