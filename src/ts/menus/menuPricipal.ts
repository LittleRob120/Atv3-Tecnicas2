import Menu from "../interfaces/menu";

export default class MenuPrincipal implements Menu {
    mostrar(): void {
        console.clear()
        console.log('===== Atlantis - Menu Principal =====')
        console.log('1 - Cadastrar cliente titular')
        console.log('2 - Registrar hospedagem')
        console.log('3 - Listar clientes titulares')
        console.log('4 - Listar hóspedes hospedados')
        console.log('5 - Listar acomodações ofertadas')
        console.log('0 - Sair')
    }
}