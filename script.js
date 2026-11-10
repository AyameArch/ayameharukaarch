const btn = document.getElementById('glowBtn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('glow-mode');
  btn.textContent = document.body.classList.contains('glow-mode') ? '☼' : '✦';
});