document.querySelectorAll('[data-service-grid]').forEach((grid) => {
  const panel = grid.querySelector('#service-panel');
  const buttons = Array.from(grid.querySelectorAll('[data-service-button]'));
  const contents = Array.from(grid.querySelectorAll('[data-service-content]'));

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.serviceButton;
      const closing = button.getAttribute('aria-expanded') === 'true';

      buttons.forEach((item) => {
        item.setAttribute('aria-expanded', String(!closing && item === button));
      });
      contents.forEach((content) => {
        content.hidden = closing || content.dataset.serviceContent !== selected;
      });
      panel.hidden = closing;
      if (!closing && panel.getBoundingClientRect().top >= window.innerHeight) {
        panel.scrollIntoView({ block: 'start' });
      }
    });

    button.hidden = false;
  });
  grid.querySelectorAll('[data-service-fallback]').forEach((link) => {
    link.hidden = true;
  });
});
