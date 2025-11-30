import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ListagemHospedagens extends Processo {
    processar(): void {
        console.clear()
        console.log('Hóspedes atualmente hospedados:')
        console.log('-------------------------------------------------')
        const ativas = Armazem.InstanciaUnica.Hospedagens.filter(h => h.Ativa)
        if (ativas.length === 0) { console.log('Nenhuma hospedagem ativa.'); return }
        ativas.forEach(h => {
            const cli = h.Cliente
            const a = h.Acomodacao
            console.log(`Titular: ${cli.NomeCompleto ?? '(sem nome)'} | Acomodação: ${a.NomeAcomadacao} | Check-in: ${h.CheckIn.toLocaleString()}`)
            console.log('-------------------------------------------------')
        })
    }
}