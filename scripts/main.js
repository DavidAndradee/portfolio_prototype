// Carrega os dados do arquivo projetos.json
fetch('tools.json')
    .then(response => response.json())
    .then(data => {
        // Seleciona o elemento onde os dados serão exibidos
        const projetosContainer = document.getElementById('tools');

        // Itera sobre cada projeto e cria um elemento HTML para exibi-lo
        data.forEach(tools => {
            const projetoElement = document.createElement('li');
            projetoElement.innerHTML = `
                    <li class="skill">
                        <div>
                            <img src="${tools.image}" alt="${tools.name}">
                        </div>
                        <h3>${tools.name}</h3>
                        <P>${tools.description}</P>
                    </li>
                    `;
            projetosContainer.appendChild(projetoElement);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar os dados:', error);
    });

    