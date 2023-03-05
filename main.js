function copiarTexto(id) {
    var elemento = document.getElementById(id)
    var texto = elemento.textContent;
    var input = document.createElement('input');
    input.setAttribute('value', texto);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Texto copiado para a área de transferência!');
  }
  