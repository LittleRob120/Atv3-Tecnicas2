import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";

export default class DiretorSolteiroMais extends Diretor<Acomodacao> {
    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }
    public construir(): Acomodacao {
        const b = this.construtor as ConstrutorAcomodacao
        b.NomeAcomodacao = NomeAcomadacao.SolteiroMais
        b.CamaSolteiro = 1
        b.CamaCasal = 0
        b.Suite = 1
        b.Climatizacao = true
        b.Garagem = 1
        return b.construir()
    }
}