const listadecodes = [
    "pigeot",
    "turtle",
    "Cat",
    "Dog"
]
const somaSubcode = (n1, n2) => n1 + n2

const encontrarosubcode = nome => {
   try{
        validacao(nome)
        const codeEncontrado = listadecodes.find(code => code === nome)
        return codeEncontrado ? codeEncontrado : 'subcode não encontrado'
   }catch(erro){
       return erro
   }
}

const validacao =  nome => {
    if(!nome) throw 'campo nome está vazio' 
    if(typeof nome !== 'string') throw 'Tipo inválido'
}

module.exports = {
    somaSubcode,
    encontrarosubcode
}