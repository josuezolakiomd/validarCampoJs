const diaDeHoje = document.querySelector('.diaDeHoje');

function adicionar(){
  let valor = document.getElementById('campo').value;
  let lista = document.querySelector('.listagem').innerHTML;
  let itens = ['Segunda-feira','Terça-feira','Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado', 'Domingo'];

  if(valor == itens[0] || valor == itens[1] || valor == itens[2] || valor == itens[3] || valor == itens[4] || valor == itens[5] || valor == itens[6]) {
    lista += [`<li style="background-color:green;">${valor}</li>`];
    document.querySelector('.listagem').innerHTML = lista;
  } else if(valor) {
      lista += [`<li>${valor}</li>`];
      document.querySelector('.listagem').innerHTML = lista;
    } else {
      alert('Preencha o campo abaixo!');
    }    
}

const weekDay = () => {
  const data = new Date();
  const dia = data.getDay();
  const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];
  const diaSemana = dias[`${dia}`]
  diaDeHoje.textContent = diaSemana;
}
weekDay();
