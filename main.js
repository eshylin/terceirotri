 //a função que deve ser executada é tocaSom? nesse caso, sera o parametro idElemento. Ou seja, o endereço 
 //da tecla será procurado no htmle reproduzido
 function tocaSom(idElementAudio){
  const elemento=document.querySelector(idElementAudio);
  //se o elemento pesquisado for igual a "Inisixistente", o alerta de elemento não encontrado aparecerá 
  if (elemento===null){
    alert('Elemento não encontrado')
  }
  // se o elemento existir, a funçao play daquele elemento acontecera, ou seja, a tecla será reproduzida 
  if(elemento!=null && elemento.localName==='audio')
    if (elemento.localName==='audio')
   elemento.play();
   else {
    alert('Elemento não encontrado')
  }
 }
  //querySelector encontra as informaçães da teclas pesquisada no documento 
const listaDeTeclas=document.querySelectorAll('.tecla');
//Estrutura de repetiçãso - Enquanto 
// para que as teclas não sejam repetidas de maneira infinita, criamos o
//for, com valor de ínicio 0, e valor final chamado de contador <
//listaDeTeclas.length, para que a repetição seja exatamente do tamanho da nossa lista, que é de 9 teclas.
 for(let contador=0; contador < listaDeTeclas.length; contador++){
 const tecla = listaDeTeclas[contador];
 //classList armazena todas as informação do elemento pesquisado.
 const instrumento = tecla.classList[1];
 //o idAudio é responsavel por identificar o som do botão pesquisado 
 const idAudio = `#som_${instrumento}`

 console.log(idAudio);
  //onclick significa "ao clicar na tela" a fução tocaSom será executada, o id daquele audio será buscado e reproduzido.
  tecla.onclick = function(){
    tocaSom(idAudio);
  };
  //onkeydown significa"quando a tecla estiver precionada",nesse caso uma 
  //função será executada, e qual é essa função? É a estilização de mudança de cor do botao quando as teclas 
  //Enter e Space forem apertadas 
    
  tecla.onkeydown = function(evento){
    console.log(evento.code);
     if (evento.code=='Enter'|| evento.code === 'Space'){
     tecla.classList.add('ativa');
  }
};
//onkeydown siginifica "quando a tecla estiver erguida, não pressionada",
//nesse caso, a função será removida.
 tecla.onkeyup = function(){
  tecla.classList.remove('ativa');
 };
 console.log(instrumento);
 console.log(contador);
 }
 
 

