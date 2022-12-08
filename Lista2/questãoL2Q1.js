const mostrar2seg = (tempo) => {
    return new Promise (resolve => setTimeout(resolve,tempo))}


const pausa = async () => {
    await mostrar2seg(2000)
    console.log("Depois de 2seg")
}

console.log("Olá mundo")
pausa()