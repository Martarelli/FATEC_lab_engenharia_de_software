document.querySelector("#botao").addEventListener("click", palindromo);

function palindromo(){
    word = document.querySelector("#palpite").value.toLowerCase().replace( /\s/g, '');
    isPalindrome = document.querySelector("#palpite").value.toLowerCase()
                    .replace( /\s/g, '').split('').reverse().join('');

    if(word === isPalindrome){
        alert("A palavra inserida É um palindromo!")
    } else {
        alert("A palavra inserida NÃO é um palindromo!")
    }
    console.log(word);
    console.log(isPalindrome);
    
}