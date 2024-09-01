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

fetch("apps.json")
    .then(response => response.json())
    .then(data => {
        const projetosContainer = document.getElementById('apps');
        data.forEach(apps => {
            const projetoElement = document.createElement('div');
            if (apps.published === true) {
                
                projetoElement.innerHTML = `
                    <div class="projeto">
                        <img class="gif" src="${apps.gif}">
                        <div class="descricao">
                            <p>${apps.description}</p>
                            <div class="botoes">
                                <a class="btn-project" href="${apps.link}">Acessar código</a>
                                <a class="btn-project" href="${apps.site}">Acessar site</a>
                            </div>
                        </div>
                    </div>
                        `;
            } else {
                projetoElement.innerHTML = `
                    <div class="projeto">
                        <img class="gif" src="${apps.gif}">
                        <div class="descricao">
                            <p>${apps.description}</p>
                            <div class="botoes">
                                <a class="btn-project" href="${apps.link}">Acessar código</a>
                            </div>
                        </div>
                    </div>
                        `;
            }
            projetosContainer.appendChild(projetoElement);
        });
    })