let intervaloId;

chrome.storage.local.get(['ativo', 'intervalo'], function(result) {
  if (result.ativo) {
    iniciarSimulacao(result.intervalo || 10);
  }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (changes.ativo) {
    if (changes.ativo.newValue) {
      iniciarSimulacao(changes.intervalo ? changes.intervalo.newValue : 10);
    } else {
      pararSimulacao();
    }
  } 
  // Removido: a verificação de intervalo aqui estava causando problemas
});

// Em background.js
function iniciarSimulacao(intervalo) {
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      intervaloId = setInterval(function() {
        chrome.tabs.sendMessage(tabId, {acao: "mover"});
      }, intervalo * 1000);
      console.log("Simulação iniciada com intervalo de", intervalo, "segundos");
    }
  });
}

function pararSimulacao() {
  clearInterval(intervaloId);
  console.log("Simulação parada");
}