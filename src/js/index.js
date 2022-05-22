const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;
    /*
        OBJETIVO 1 - Quando passar o mouse por cima do personagem temos que:

        - colocar a classe selecionado no personagem sobre o qual o cursor passou por cima, para adicionar animação a cada um deles.

        - retirar a classe selecionado do personagem quando o cursor não está mais sobre ele.
  
        As ações no JS são chamadas de "enventos"

        O evento que vamos usar para colocar a classe selecionado no personagem sobre o qual o cursor passou por cima é o "mouseEnter".
    */

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado')

    /*
        OBJETIVO 2 - trocar a imagem e o nome da imagem grande de cada personagem a medida que movemos o cursor do mouse sobre as opções de personagens.

        - alterar a imagem do personagem (imagem grande do jogador 1)
        - alterar o nome do personagem (imagem grande do jogador 1)
    */
    
    const imagemJogador1 = document.getElementById('pergonagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

    const nomeJogador1 = document.getElementById('nome-jogador-1');
      
    const nomeSelecionado = personagem.getAttribute('data-name');
    console.log('nomeSleecionado', nomeSelecionado)
    nomeJogador1.innerHTML = nomeSelecionado;

    })
})