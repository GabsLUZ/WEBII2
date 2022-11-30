function formataData(){
    let data = new Date(),
    dia = data.getDate().toString().padStart(2, '0'),
    mes = (data.getMonth()+1).toString().padStart(2, '0'),
    ano = data.getFullYear();
return `${dia}/${mes}/${ano}`
}
let horario = new Date().toLocaleTimeString();
let dataExtenso = new Intl.DateTimeFormat('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'}).format();

console.log(formataData());
console.log(horario);
console.log(dataExtenso); 



