const item = document.getElementById('item');
const botao = document.getElementById('add')
const lista = document.getElementById('lista');

const fila = []; 

botao.addEventListener('click',function (){
    if(!item.value){
        alert('Digite uma tarefa')
    } else {
    const qualquerCoisa = document.createElement('li');
    qualquerCoisa.innerHTML = item.value+' <button class="remove" onclick="remover(this)"> X </button>';
    item.value = "";
    lista.appendChild(qualquerCoisa); 
    }
});

function remover(itemLi){
    const itemRemover = itemLi.parentElement;
    lista.removeChild(itemRemover);
}

function reset(){
    lista.innerHTML = "";
}
