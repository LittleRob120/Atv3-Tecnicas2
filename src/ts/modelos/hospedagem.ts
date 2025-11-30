import Cliente from "./cliente";
import Acomodacao from "./acomodacao";

export default class Hospedagem {
    private cliente: Cliente
    private acomodacao: Acomodacao
    private checkIn: Date
    private checkOut?: Date

    constructor(cliente: Cliente, acomodacao: Acomodacao) {
        this.cliente = cliente
        this.acomodacao = acomodacao
        this.checkIn = new Date()
    }

    public get Cliente() { return this.cliente }
    public get Acomodacao() { return this.acomodacao }
    public get CheckIn() { return this.checkIn }
    public get CheckOut() { return this.checkOut }
    public encerrar() { this.checkOut = new Date() }
    public get Ativa() { return !this.checkOut }
}