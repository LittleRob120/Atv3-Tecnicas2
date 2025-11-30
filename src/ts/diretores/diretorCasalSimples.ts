import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";

export default class DiretorCasalSimples extends Diretor<Acomodacao> {
    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }
    public construir(): Acomodacao {
        const b = this.construtor as ConstrutorAcomodacao
        b.NomeAcomodacao = NomeAcomadacao.CasalSimples
        b.CamaSolteiro = 0
        b.CamaCasal = 1
        b.Suite = 1
        b.Climatizacao = true
        b.Garagem = 1
        return b.construir()
    }
}