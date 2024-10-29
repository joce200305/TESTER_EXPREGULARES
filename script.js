document.getElementById('validarBtn').addEventListener('click', () => {
    const { value: expresionInput } = document.getElementById('expresion'),
        { value: textoInput } = document.getElementById('texto'),
        resultadoDiv = document.getElementById('resultado');

    if (!expresionInput.trim() || !textoInput.trim()) {
        resultadoDiv.textContent = 'Por favor, completa ambos campos.';
        resultadoDiv.style.color = 'orange';
        return;
    }

    const validarTexto = (expresion, texto) => new RegExp(expresion).test(texto);
    const resultado = validarTexto(expresionInput, textoInput);resultadoDiv.textContent = resultado ? '¡Coincide!' : 'No coincide.';
    resultadoDiv.style.color = resultado ? 'green' : 'red';
});
