function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
    // Inicializa uma string vazia para armazenar os resultados formatados
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encrtado. Você precisa pesquisar algo.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                <a href="#" target="_blank" rel="external">${dado.titulo}
                </a>
                </h2>
                <p class="descricao-meta">${dado.descricao}
                </p>
                <a href=${dado.link} target="_blank rel="external">mais informações
                </a>
            </div>
        `;
        };

        // Constrói o HTML para cada resultado, incluindo título, descrição e link

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    };

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}
