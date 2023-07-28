//Elementleri seçelim

const leftTextArea = document.querySelector("#leftTextArea");
const rightTextArea = document.querySelector("#rightTextArea");
const encodeButton = document.querySelector("#encodeButton");
const decodeButton = document.querySelector("#decodeButton");
const clearButton = document.querySelector("#clearButton");

runEventListeners();

function runEventListeners(){
    encodeButton.addEventListener("click",encode);
    decodeButton.addEventListener("click",decode);
    clearButton.addEventListener("click",clear);
}

function encode(){
    if(leftTextArea.value==""){
        alert("Lütfen bir şifre giriniz!");
        return; //bir metodu sonlandırır. Hem geriye değer döndürmek hemde metodu sonlandırmak için kullanılır. 
    }

    let password = leftTextArea.value;
    let encodedPassword = btoa(password);
    rightTextArea.value = encodedPassword;
    // tek satırda yapmak için:
    // rightTextArea.value = btoa(leftTextArea.value);
    leftTextArea.value ="";
}

function decode(){
    leftTextArea.value = atob(rightTextArea.value);
    rightTextArea.value = "";
}

function clear(){
    leftTextArea.value = "";
    rightTextArea.value = "";
}