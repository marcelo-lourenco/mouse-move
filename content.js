chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.acao === "mover") {
      // Capturar o título da página
      const tituloPagina = document.title;
      alert("Título da página: " + tituloPagina);

      // Simular movimento do mouse
      const eventoMouse = new MouseEvent('mousemove', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });
      document.body.dispatchEvent(eventoMouse);
      console.log("Movimento do mouse simulado!");
    }
  }
);