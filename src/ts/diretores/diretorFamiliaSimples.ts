import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";

export default class DiretorFamiliaSimples extends Diretor<Acomodacao> {
    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }
    public construir(): Acomodacao {
        const b = this.construtor as ConstrutorAcomodacao
        b.NomeAcomodacao = NomeAcomadacao.FamilaSimples // (mantido conforme enum)
        b.CamaSolteiro = 2
        b.CamaCasal = 1
        b.Suite = 1
        b.Climatizacao = true
        b.Garagem = 1
        return b.construir()
    }
}