function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
    let select = document.getElementById('sinal1'); // Corrigido para 'sinal1'

    if (num.value.length == 0) {
        alert("Por favor, digite um número.");
    } else {
        let n = Number(num.value);
        let sinal = select.value; // Corrigido para obter o valor do select
        let c = 1;

        tab.innerHTML = "";

        while (c <= 10) {
            let item = document.createElement("option");
            item.value = `tab${c}`;

            // Corrigido para realizar a operação matemática correta
            let resultado;
            switch (sinal) {
                case '+':
                    resultado = n + c;
                    break;
                case '-':
                    resultado = n - c;
                    break;
                case '*':
                    resultado = n * c;
                    break;
                case '/':
                    resultado = n / c;
                    break;
                default:
                    resultado = 0;
            }

            item.text = `${n} ${sinal} ${c} = ${resultado}`;
            tab.appendChild(item);
            c++;
        }
    }
}



/* if (num.value.length == 0) {

     alert("Por Favor digite um numero ")
 } else {
     let n = Number(num.value);
     let c = 1
     let s = sinal.value;
     let soma = n + s + c;
     tab.innerHTML = "";
     while (c <= 10) {
         let item = document.createElement("option");
         item.value = `tab${c}`
         item.text = `${n} ${s} ${c}=${soma}`
         tab.appendChild(item);
         c++
     }
 }

}*/