function newtask(){
    var input = document.getElementById('input-novo');
    var valor = input.value;

    //validação
    if(!valor){
        alert('Digite algo para poder adicionar.')
    }else {
        var lista = document.getElementById('Lista');
        var novoitem = document.createElement('li');
        novoitem.textContent = valor;
        novoitem.onclick = function(){
            this.parentNode.removeChild(this);
            input.focus();
        };
        lista.appendChild(novoitem);
        input.value = "";
        input.focus();
    }
}