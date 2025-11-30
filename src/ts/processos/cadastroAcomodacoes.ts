import Processo from "../abstracoes/processo";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        const diretores = [
            new DiretorSolteiroSimples(),
            new DiretorSolteiroMais(),
            new DiretorCasalSimples(),
            new DiretorFamiliaSimples(),
            new DiretorFamiliaMais(),
            new DiretorFamiliaSuper()
        ]
        // Evita duplicar caso seja chamado mais de uma vez
        if (this.acomodacoes.length === 0) {
            diretores.forEach(d => this.acomodacoes.push(d.construir()))
        }
    }
}