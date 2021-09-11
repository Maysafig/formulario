let cep = document.querySelector('#cep');
let logradouro = document.querySelector('#logradouro');
let bairro = document.querySelector('#bairro');
let cidade= document.querySelector('#cidade');
let estado = document.querySelector('#estado');

//cep.value = '01001000';

cep.addEventListener('blur',function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
});

function popularForm(resposta) {

    if("erro" in resposta) {
        alert('CEP não encontrado');
        return;
    }

    logradouro.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}