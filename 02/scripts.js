const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];

const tamanhoDoGrupo = (lista, tamanho) => {
    const resultado = [];

    let numeroGrupo = 1;

    for (let i= 0; i < lista.length; i += tamanho) {
        const grupo = `${numeroGrupo}: ${lista.slice(i, (i + tamanho)).join(', ')}`
        console.log(grupo)
        numeroGrupo++
    }
};

separarGrupos(nomes, 4);