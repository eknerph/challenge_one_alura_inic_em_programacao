const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector("#mensagem");
const btnCopiar = document.querySelector(".btnCopiar")

// As "chaves" de criptografia que utilizaremos s�o:
// A letra "e" � convertida para "enter"
// A letra "i" � convertida para "imes"
// A letra "a" � convertida para "ai"
// A letra "o" � convertida para "ober"
// A letra "u" � convertida para "ufat"


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptar) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptar;
}


btnCopiar.addEventListener('click', (e) => {
   navigator.clipboard.writeText(mensagem.value);
   // console.log(mensagem.value);

   //alert('Texto cpiado com sucesso! Cick em Crtl+V para colar em outro local.')
})



