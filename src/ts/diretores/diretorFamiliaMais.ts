import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";

export default class DiretorFamiliaMais extends Diretor<Acomodacao> {
    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }
    public construir(): Acomodacao {
        const b = this.construtor as ConstrutorAcomodacao
        b.NomeAcomodacao = NomeAcomadacao.FamiliaMais
        b.CamaSolteiro = 5
        b.CamaCasal = 1
        b.Suite = 2
        b.Climatizacao = true
        b.Garagem = 2
        return b.construir()
    }
}