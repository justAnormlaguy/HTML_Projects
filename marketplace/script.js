let searchForm = document.querySelector('.search-form');
let loginForm = document.querySelector('.login-form');
let loginBtn = document.getElementById('login-btn');
let searchBtn = document.getElementById('search-btn');
let cartForm = document.querySelector('.carrinho')
let cartBtn = document.getElementById('cart-btn');

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(loginForm.style.right === '-100rem'){
        loginForm.style.right = '2rem';
        searchForm.style.right = '-100rem';
        cartForm.style.right = '-100rem';
    }else{
        loginForm.style.right = '-100rem';
    }
})

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(searchForm.style.right === '-100rem'){
        searchForm.style.right = '2rem';
        loginForm.style.right = '-100rem';
        cartForm.style.right = '-100rem';
    }else{
        searchForm.style.right = '-100rem';
    }
})

cartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(cartForm.style.right === '-100rem'){
        cartForm.style.right = '2rem';
        loginForm.style.right = '-100rem';
        searchForm.style.right = '-100rem';
    }else{
        cartForm.style.right = '-100rem';
    }
})

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
// }

// document.querySelector('#login-btn').onclick = () =>{
//     loginForm.classList.toggle('active');
// }

function Logar(){

    let login = document.getElementById('UserID').value;
    let password = document.getElementById('PasswordID').value;
        
    if(login != "" || password != ""){
        
        if(login === "nelso" && password === "1234"){
            document.getElementById("respostaLogin").innerHTML = "Bem vindo, Nelso"
            
            let token = "nelso";
            JSON.stringify(token);
            localStorage.setItem("token", token);

            window.location.href = "./adm.html";
            }else{
                document.getElementById('respostaLogin').innerHTML = "Login ou Senha incorretos";
            }

        }else{
            document.getElementById('respostaLogin').innerHTML = "Preencha todos os campos";
        }
}

const finalizarBtn = document.getElementById('finalizar-btn');

finalizarBtn.addEventListener('click', finishShop);

function finishShop() {
    // You may want to add some validation here to check if the cart is not empty
    window.location.href = './finalizar.html';
}