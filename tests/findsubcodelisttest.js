const should = require('should')
const findSubcode = require('../findsubcode')

describe('find subcode', () => {
    it ('soma subcode', () => {
        findSubcode.somaSubcode(2, 3).should.be.equal(5)
    })
    it ('deve somar dois números e retornar 30', () => {
        findSubcode.somaSubcode(10, 20).should.be.equal(30)
    })
    it ('Passar um nome e deve retornar mensagem esse nome não foi encontrado', () =>{
        findSubcode.encontrarosubcode('joão dos veneno').should.be.equal('subcode não encontrado')
    })
    it ('Retorna mensagem campo nome está vazio', () => {
        findSubcode.encontrarosubcode().should.be.equal('campo nome está vazio')
    })
    it ('retornar mensagem de  tipo inválido', () => {
        findSubcode.encontrarosubcode(123).should.be.equal('Tipo inválido')
    })
    it ('Deve retornar um nome da lista', () => {
        findSubcode.encontrarosubcode('pigeot').should.be.equal('pigeot')
    })
})