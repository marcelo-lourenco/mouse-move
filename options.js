document.addEventListener('DOMContentLoaded', function() {
  const intervaloInput = document.getElementById('intervalo');
  const salvarBtn = document.getElementById('salvar');

  chrome.storage.local.get(['intervalo'], function(result) {
    intervaloInput.value = result.intervalo || 10;
  });

  salvarBtn.addEventListener('click', function() {
    const intervalo = parseInt(intervaloInput.value);
    chrome.storage.local.set({intervalo: intervalo}, function() {
      console.log("Intervalo de clique salvo:", intervalo);
    });
  });
});