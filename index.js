/*
Objetivo: capturar nome e sobrenome do usuário, concatenar(juntar) os campos e 
 apresentar uma saudação personalizada
 Elementos de Entrada: método form objeto document
 Elementos de Saída:  método alert do objeto window
*/
var js_nome;
var js_sobrenome;
var js_nomecompleto;

function concatena(){
    /* entrada de dados */  
    js_nome = document.FormConcatena.f_nome.value;
    js_sobrenome = document.FormConcatena.f_sobrenome.value;
    /* Processamento de Dados */
    js_nomecompleto = js_nome + ' ' + js_sobrenome;

    /* Saida de dados */
    window.alert( js_nomecompleto);
}