// ── Contact Form (Formspree) ──────────────────────────────────────────────
document.getElementById('fs-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const btn     = document.getElementById('sendBtn');
  const success = document.getElementById('fs-success');
  const error   = document.getElementById('fs-error');

  btn.textContent = 'Sending…';
  btn.disabled    = true;
  success.style.display = 'none';
  error.style.display   = 'none';

  try {
    const response = await fetch(this.action, {
      method:  'POST',
      body:    new FormData(this),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      success.style.display = 'block';
      this.reset();
    } else {
      error.style.display = 'block';
    }
  } catch {
    error.style.display = 'block';
  }

  btn.textContent = '✈ Send Message';
  btn.disabled    = false;
});
