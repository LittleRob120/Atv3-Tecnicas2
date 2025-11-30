import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Hospedagem from "../modelos/hospedagem";
import ImpressorCliente from "../impressores/impressorCliente";
import ImpressorAcomodacao from "../impressores/impressorAcomodacao";

export default class CadastroHospedagem extends Processo {
    processar(): void {
        console.clear()
        const ar = Armazem.InstanciaUnica

        if (ar.Clientes.length === 0) { console.log('Nenhum cliente cadastrado.'); return }
        if (ar.Acomodacoes.length === 0) { console.log('Nenhuma acomodação cadastrada.'); return }

        console.log('Selecione o cliente:')
        ar.Clientes.forEach((c, i) => console.log(`${i + 1} - ${new ImpressorCliente(c).imprimir()}`))
        const iCliente = this.entrada.receberNumero('Cliente (número): ') - 1
        const cliente = ar.Clientes[iCliente]
        if (!cliente) { console.log('Cliente inválido.'); return }

        console.clear()
        console.log('Selecione a acomodação:')
        ar.Acomodacoes.forEach((a, i) => {
            console.log(`${i + 1} - ${new ImpressorAcomodacao(a).imprimir()}`)
            console.log('-------------------------------------------------')
        })
        const iAcomod = this.entrada.receberNumero('Acomodação (número): ') - 1
        const acomodacao = ar.Acomodacoes[iAcomod]
        if (!acomodacao) { console.log('Acomodação inválida.'); return }

        ar.Hospedagens.push(new Hospedagem(cliente, acomodacao))
        console.log('Hospedagem registrada com sucesso!')
    }
}