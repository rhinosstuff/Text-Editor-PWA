const buttonInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  buttonInstall.classList.toggle('hidden', false);
});

buttonInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  buttonInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});