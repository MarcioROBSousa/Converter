function grauCelsius(f) {
    return (f - 32) / 1.8;
}

function converter() {
    const valor = document.getElementById("Fahrenheit").value;
    const fahrenheit = parseFloat(valor);

    if (isNaN(fahrenheit)) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido.";
        return;
    }

    const temperatura = grauCelsius(fahrenheit);
    document.getElementById("resultado").innerText = `Graus Celsius: ${temperatura.toFixed(1)} ºC`;
}