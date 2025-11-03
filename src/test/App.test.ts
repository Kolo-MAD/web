import { render, screen, fireEvent } from '@testing-library/svelte';
import App from '../App.svelte'; 

describe('App component', () => {

  test('renders MAD logo', () => {
    render(App);

    const logo = screen.getByAltText(/Mad Logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders social media links with default URLs', () => {
    render(App);

    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/people/Ko%C5%82o-Naukowe-MAD/61578651728482/');

    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/mad.merito');

    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/company/mad-merito');
  });

  test('renders MacMeeting link inside description text', () => {
    render(App);

    const macLink = screen.getByRole('link', { name: /oficjalną stronę/i });
    expect(macLink).toHaveAttribute('href', 'https://macmeeting.pl');
    expect(macLink).toHaveAttribute('target', '_blank');
  });

  test('button triggers mailto action', async () => {
    delete (window.location as any);
    window.location = { href: '' } as any;

    render(App);

    const button = screen.getByRole('button', { name: /dołącz do nas!/i });
    await fireEvent.click(button);

    expect(window.location.href).toBe('mailto:mad@student.wroclaw.merito.pl');
  });

});
