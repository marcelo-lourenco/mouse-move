document.addEventListener('DOMContentLoaded', function() {
  const ativarBtn = document.getElementById('ativar');
  const desativarBtn = document.getElementById('desativar');

  ativarBtn.addEventListener('click', function() {
    chrome.storage.local.set({ativo: true}, function() {
      console.log("Simulação de atividade ativada");
    });
  });

  desativarBtn.addEventListener('click', function() {
    chrome.storage.local.set({ativo: false}, function() {
      console.log("Simulação de atividade desativada");
    });
  });
});