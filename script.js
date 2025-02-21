document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('playerForm');
    const tabela = document.getElementById('tabelaDados');
    let contador = 11;

    // Função para adicionar jogadores e times na tabela
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Impede o envio do formulário

        const jogador = document.getElementById('jogador').value.trim();
        const time = document.getElementById('time').value.trim();

        if (jogador && time) {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
                <th>${contador}</th>
                <td>${jogador}</td>
                <td>${time}</td>
            `;
            tabela.appendChild(novaLinha);
            contador++;

            form.reset(); // Limpa os campos do formulário
        }
    });

    // Função para ordenar a tabela
   
    function ordenarTabela(indice, tipo) {
        const linhas = Array.from(tabela.querySelectorAll('tr'));
        linhas.sort((a, b) => {
            const textoA = a.cells[indice].textContent.trim().toLowerCase();
            const textoB = b.cells[indice].textContent.trim().toLowerCase();

            if (tipo === 'asc') {
                return textoA.localeCompare(textoB);
            } else {
                return textoB.localeCompare(textoA);
            }
        });

        // Reorganiza as linhas na tabela
        linhas.forEach(linha => tabela.appendChild(linha));
    }

    function alternarDirecao(direcao) {
        return direcao === 'asc' ? 'desc' : 'asc';
    }

    // Ordenar "Jogador" em ordem alfabética
    let direcaoJogador = 'asc'; // Define a direção inicial
    document.getElementById('sortable-jogador').addEventListener('click', function () {
        ordenarTabela(1, direcaoJogador);
        direcaoJogador = alternarDirecao(direcaoJogador); // Alterna a direção
    });

    // Ordenar "Time" em ordem alfabética
    let direcaoTime = 'asc'; // Define a direção inicial
    document.getElementById('sortable-time').addEventListener('click', function () {
        ordenarTabela(2, direcaoTime);
        direcaoTime = alternarDirecao(direcaoTime); // Alterna a direção
    });
    
});

