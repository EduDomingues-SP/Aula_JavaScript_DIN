//******* Variaveis e Alert ********
//******  cosole.log **********

//var nome = "Eduardo Domingues";
//var idade = "47";
//var idade2 = "10";
//var n1 = 5;
//var n2 = 3;
//var frase = " Japão é o melhor time do mundo";
//alert("Nome " + nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(idade);
//console.log(idade2);
//console.log(nome);
//console.log(n1 * idade)
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());

/******* Array e Dicionario ********
 * /******* push,pop e lenght ********
 * 
var lista = ["Maça","Pera","Laranja"];
lista.push("Uva");
lista.pop("Pera");

/******* toString e join para Array ********
 * 
//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(" - "));

/*
var fruta = [nome = "Maça", cor = "vermelha"];
console.log(fruta,nome);
alert(fruta,cor);
*/

//var frutas = [{nome : "Maça", cor : "vermelha"},{nome : "Uva", cor : "roxa"}];
//console.log(frutas);
//alert(frutas[0].nome);


/******* Condicionais if else ********
 ******* Comando prompt *********
 * 
//var idade = 17;
/*
var idade = prompt("Qual sua idade ?");
if (idade >= 18){
    alert("Maior de idade !");
}else{
    alert("Menor de idade !");
};


/******* Laços de repetição while e for ********
 * 
var count = 0;
while (count <= 5){
    //console.log(count);
    alert(count);
    count ++;
}

var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/

/******* Trabalhando com datas ********/

//var d = new Date();
//alert(d.getUTCDate() + "/ " + d.getMonth() + "/ " + d.getFullYear());
//alert(d.getHours() + ": " + d.getMinutes() + ": " + d.getSeconds());

/*********  Fuctions ********
function soma(n1,n2){
    return n1 + n2;
  }

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão","Japão","Brasil"));

*/ 
/*Valida a idade se´maior que 18 anos e retorna True ou False */
/* testando variavel valiadr Global e Local 

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar=false
    }
    return validar
    }

var idade = prompt("Qual sua idade : ");
console.log(validaIdade(idade));

var validar = 0;
function validaIdade(idade){
    
    if(idade >= 18){
        validar = true
    }else{
        validar=false
    }
    return validar
    }

var idade = prompt("Qual sua idade : ");
console.log(validaIdade(idade));

*/


function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    ///document.getElementById("agradecimento");
    //var frase =  document.getElementById("agradecimento");
    //frase.innerHTML = "<b>Obrigado por clicar!</b>";
    //return false;
    //alert(" Obrigado por clicar ");  
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
   window.open("https://www.meutimao.com.br/") // abre em outra aba
   window.location.href = "https://www.meutimao.com.br/"; // abre na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert(" Trocar texto ");  
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>";
    elemento.innerHTML = "Passe o mouse aqui";
   
}
function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}