'use strict';

const euro = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const cost = document.getElementById('cost');
const saving = document.getElementById('saving');
function updateScenario() {
  const annual = Number(cost.value) * Number(saving.value) / 100;
  document.getElementById('cost-label').textContent = euro.format(Number(cost.value));
  document.getElementById('saving-label').textContent = `${saving.value} %`;
  cost.setAttribute('aria-valuetext', euro.format(Number(cost.value)));
  saving.setAttribute('aria-valuetext', `${saving.value} Prozent`);
  document.getElementById('result').textContent = euro.format(annual * 5);
  document.getElementById('annual').textContent = `${euro.format(annual)} pro Jahr · vor Umsetzungskosten`;
}
cost.addEventListener('input', updateScenario);
saving.addEventListener('input', updateScenario);
updateScenario();

const interests = {
  pilot: {
    description: 'Ein konkretes Wasserproblem in Ihrem Betrieb? Nennen Sie Branche, Standort und die Frage, die Sie lösen möchten.',
    subject: 'REWASSER — Pilotgespräch',
    body: 'Hallo Kiryl,\n\nwir möchten einen möglichen Pilotfall besprechen.\n\nUnternehmen / Branche:\nStandort:\nUnsere Wasserfrage:\n\nKontakt für das Gespräch:\n\nViele Grüße'
  },
  investment: {
    description: 'Sie möchten REWASSER mit Kapital oder als strategischer Partner aufbauen? Lassen Sie uns über MVP, Pilotziele und Finanzierung sprechen.',
    subject: 'REWASSER — Investment und strategische Partnerschaft',
    body: 'Hallo Kiryl,\n\nwir möchten den Aufbau von REWASSER besprechen und mehr über MVP, Pilotziele und den Finanzierungsplan erfahren.\n\nUnser Hintergrund:\nMöglicher Beitrag:\n\nKontakt für das Gespräch:\n\nViele Grüße'
  },
  region: {
    description: 'Sie sehen REWASSER in Ihrer Region? Nennen Sie den Standort, passende Unternehmen und die Unterstützung, die Sie anbieten können.',
    subject: 'REWASSER — Willkommen in unserer Region',
    body: 'Hallo Kiryl,\n\nwir möchten über einen Standort für REWASSER sprechen.\n\nRegion / Organisation:\nZugang zu Pilotbetrieben:\nMögliche Unterstützung beim Aufbau:\n\nKontakt für das Gespräch:\n\nViele Grüße'
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

