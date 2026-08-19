// Demo scheduling modal -- auto-injected on every page
(function() {
  const html = `
<div class="demo-overlay" id="demoOverlay">
  <div class="demo-modal">
    <button class="dm-close" aria-label="Close">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>
    </button>
    <form id="demoForm">
      <h2>Schedule a demo</h2>
      <p class="dm-sub">See how Scaler can work for your portfolio.</p>
      <div class="dm-divider"></div>
      <div class="dm-row">
        <div class="dm-group">
          <label for="demoFirst">First name</label>
          <input type="text" id="demoFirst" placeholder="Jane" required>
        </div>
        <div class="dm-group">
          <label for="demoLast">Last name</label>
          <input type="text" id="demoLast" placeholder="Smith" required>
        </div>
      </div>
      <div class="dm-group">
        <label for="demoEmail">Work email</label>
        <input type="email" id="demoEmail" placeholder="jane@company.com" required>
      </div>
      <div class="dm-group">
        <label for="demoCompany">Company</label>
        <input type="text" id="demoCompany" placeholder="Your company name">
      </div>
      <div class="dm-group">
        <label for="demoAssets">Number of assets</label>
        <select id="demoAssets">
          <option value="" disabled selected>Select range</option>
          <option>1 - 50</option>
          <option>51 - 200</option>
          <option>201 - 1000</option>
          <option>1000+</option>
        </select>
      </div>
      <button type="submit" class="pill dm-submit">Request a demo <span class="arr">\u2192</span></button>
    </form>
    <div class="dm-success" id="demoSuccess">
      <h3>Thank you!</h3>
      <p>We'll reach out within 1 business day to schedule your demo.</p>
    </div>
  </div>
</div>`;

  document.body.insertAdjacentHTML('beforeend', html);

  const overlay = document.getElementById('demoOverlay');
  const form = document.getElementById('demoForm');
  const success = document.getElementById('demoSuccess');

  function openDemo(e) {
    e.preventDefault();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDemo() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Attach to all "Schedule a demo" buttons/pills
  document.querySelectorAll('.pill').forEach(btn => {
    if (btn.textContent.trim().toLowerCase().includes('schedule a demo')) {
      btn.addEventListener('click', openDemo);
    }
  });

  // Close on overlay click, close button, or Escape
  overlay.addEventListener('click', e => { if (e.target === overlay) closeDemo(); });
  overlay.querySelector('.dm-close').addEventListener('click', closeDemo);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDemo(); });

  // Form submit
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    success.classList.add('show');
  });
})();
