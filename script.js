function efetuarCalculo() {
    const valorPeso = Number(document.querySelector('.js-peso').value);
    const valorAltura = Number(document.querySelector('.js-altura').value);
    const imc = (valorPeso / (valorAltura / 100) ** 2).toFixed(2);
    let resultado = '';

    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
    } else if (18.5 <= imc && imc < 24.9) {
        resultado = 'Peso normal';
    } else if (24.9 <= imc && imc < 29.9) {
        resultado = 'Sobrepeso';
    } else if (30 <= imc && imc < 34.9) {
        resultado = 'Obesidade grau 1';
    } else if (35 <= imc && imc < 39.9) {
        resultado = 'Obesidade grau 2';
    } else if (imc > 40) {
        resultado = 'Obesidade grau 3';
    }



    function mostrarResultado() {
        const paragrafoResultado = document.querySelector('.resultado-imc');

        if (imc === 'NaN') {
            paragrafoResultado.innerHTML = `Digite um número válido`
            paragrafoResultado.style.backgroundColor = 'rgb(249, 100, 100)';
        } else {
            paragrafoResultado.innerHTML = `Seu IMC é ${imc} (${resultado})`
            paragrafoResultado.style.backgroundColor = '#02FDC5';
        }
    }
    mostrarResultado();
}

function shortCut(event) {
    if (event.key === 'Enter') {
        efetuarCalculo();
    }
}