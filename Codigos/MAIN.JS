let numeroSorteado;
let jogoIniciado = false;

document.getElementById('sortear').addEventListener('click', iniciarJogo);
document.getElementById('tentar').addEventListener('click', tentarPalpite);
document.getElementById('palpite').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        tentarPalpite();
    }
});

function iniciarJogo() {
    numeroSorteado = Math.floor(Math.random() * 100) + 1;
    jogoIniciado = true;
    document.getElementById('palpite').disabled = false;
    document.getElementById('tentar').disabled = false;
    document.getElementById('log').value = '';
    console.log('Número sorteado:', numeroSorteado);
}

function tentarPalpite() {
    if (!jogoIniciado) {
        alert('O jogo ainda não foi iniciado. Clique no botão Sortear para começar.');
        return;
    }

    const palpite = parseInt(document.getElementById('palpite').value);
    if (isNaN(palpite)) {
        alert('Por favor, insira um número válido.');
        return;
    }

    let log = document.getElementById('log');
    if (palpite === numeroSorteado) {
        log.value += `Você acertou! O número era ${numeroSorteado}\n`;
        jogoIniciado = false;
        document.getElementById('palpite').disabled = true;
        document.getElementById('tentar').disabled = true;
    } else if (palpite < numeroSorteado) {
        log.value += `O número ${palpite} é menor que o número sorteado.\n`;
    } else {
        log.value += `O número ${palpite} é maior que o número sorteado.\n`;
    }
    document.getElementById('palpite').value = '';
    document.getElementById('palpite').focus();
}
