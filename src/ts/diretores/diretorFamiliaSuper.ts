import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";

export default class DiretorFamiliaSuper extends Diretor<Acomodacao> {
    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }
    public construir(): Acomodacao {
        const b = this.construtor as ConstrutorAcomodacao
        b.NomeAcomodacao = NomeAcomadacao.FamiliaSuper
        b.CamaSolteiro = 6
        b.CamaCasal = 2
        b.Suite = 2
        b.Climatizacao = true
        b.Garagem = 2
        return b.construir()
    }
}