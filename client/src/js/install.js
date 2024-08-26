const butInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });


butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  window.deferredPrompt = null;
  
  // Add the hidden class to the button
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
}); 