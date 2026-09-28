'use strict';

const interests = {
  pilot: {
    description: 'Sie haben einen konkreten Wasserbedarf oder bieten Wassertechnik an? Nennen Sie Branche, Standort und Ihren Bedarf oder Ihr Angebot.',
    subject: 'REWASSER — Pilotgespräch',
    body: 'Guten Tag Herr Asmalouski,\n\nwir möchten einen möglichen Pilotfall besprechen.\n\nUnternehmen / Branche:\nStandort:\nUnser Wasserbedarf / Angebot:\n\nKontakt für das Gespräch:\n\nMit freundlichen Grüßen'
  },
  investment: {
    description: 'Sie möchten REWASSER mit Kapital oder als strategischer Partner aufbauen? Lassen Sie uns über MVP, Pilotziele und Finanzierung sprechen.',
    subject: 'REWASSER — Investment und strategische Partnerschaft',
    body: 'Guten Tag Herr Asmalouski,\n\nwir möchten den Aufbau von REWASSER besprechen und mehr über MVP, Pilotziele und den Finanzierungsplan erfahren.\n\nUnser Hintergrund:\nMöglicher Beitrag:\n\nKontakt für das Gespräch:\n\nMit freundlichen Grüßen'
  },
  region: {
    description: 'Sie sehen REWASSER in Ihrer Region? Nennen Sie den Standort, passende Unternehmen und die Unterstützung, die Sie anbieten können.',
    subject: 'REWASSER — Willkommen in unserer Region',
    body: 'Guten Tag Herr Asmalouski,\n\nwir möchten über einen Standort für REWASSER sprechen.\n\nRegion / Organisation:\nZugang zu Pilotbetrieben:\nMögliche Unterstützung beim Aufbau:\n\nKontakt für das Gespräch:\n\nMit freundlichen Grüßen'
  }
};
function selectInterest(key) {
  const selected = interests[key];
  if (!selected) return;
  document.querySelectorAll('[data-interest]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.interest === key));
  });
  document.getElementById('contact-description').textContent = selected.description;
  document.getElementById('contact-mail').href = `mailto:kontakt@rewasser.de?subject=${encodeURIComponent(selected.subject)}&body=${encodeURIComponent(selected.body)}`;
}
document.querySelectorAll('[data-interest]').forEach(button => {
  button.addEventListener('click', () => selectInterest(button.dataset.interest));
});
document.querySelectorAll('[data-contact]').forEach(link => {
  link.addEventListener('click', () => selectInterest(link.dataset.contact));
});
selectInterest('pilot');


