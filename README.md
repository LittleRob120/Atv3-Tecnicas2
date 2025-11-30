# atviii-atlantis

Aplicação em TypeScript com arquitetura modular para cadastro e listagem de clientes, documentos, acomodações e hospedagens. O projeto organiza fluxos por processos, menus, impressões e construtores, seguindo princípios de separação de responsabilidades.

## Tecnologias

- TypeScript
- Node.js
- Programação modular (abstrações, interfaces, processos, menus)

## Estrutura do Projeto

```
atviii-atlantis
├── src/ts
│   ├── app/
│   │   └── app.ts
│   ├── abstracoes/
│   │   ├── diretor.ts
│   │   └── processo.ts
│   ├── construtores/
│   │   └── construtorAcomodacao.ts
│   ├── diretores/
│   │   ├── diretorCasalSimples.ts
│   │   ├── diretorFamiliaMais.ts
│   │   ├── diretorFamiliaSimples.ts
│   │   ├── diretorFamiliaSuper.ts
│   │   ├── diretorSolteiroMais.ts
│   │   └── diretorSolteiroSimples.ts
│   ├── dominio/
│   │   └── armazem.ts
│   ├── enumeracoes/
│   │   ├── NomeAcomadacao.ts
│   │   └── TipoDocumento.ts
│   ├── impressores/
│   │   ├── impressorAcomodacao.ts
│   │   ├── impressorCliente.ts
│   │   ├── impressorDocumento.ts
│   │   ├── impressorDocumentos.ts
│   │   └── impressorEndereco.ts
│   ├── interfaces/
│   │   ├── construtor.ts
│   │   ├── impressor.ts
│   │   ├── menu.ts
│   │   └── prototipo.ts
│   ├── io/
│   │   └── entrada.ts
│   ├── menus/
│   │   ├── menuPricipal.ts
│   │   ├── menuTipoCadastroCliente.ts
│   │   ├── menuTipoDocumento.ts
│   │   └── menuTipoListagemClientes.ts
│   ├── modelos/
│   │   ├── acomodacao.ts
│   │   ├── cliente.ts
│   │   ├── documento.ts
│   │   ├── endereco.ts
│   │   ├── hospedagem.ts
│   │   └── telefone.ts
│   └── processos/
│       ├── cadastroAcomodacoes.ts
│       ├── cadastroClienteTitular.ts
│       ├── cadastroDocumentosCliente.ts
│       ├── cadastroEnderecoTitular.ts
│       ├── cadastroHospedagem.ts
│       ├── cadastroRg.ts
│       ├── listagemAcomodacoes.ts
│       ├── listagemHospedagens.ts
│       ├── listagemTitulares.ts
│       ├── principal.ts
│       ├── tipoCadastroCliente.ts
│       └── tipoListagemClientes.ts
```

Arquivos principais:
- Entrada da aplicação: [src/ts/app/app.ts](src/ts/app/app.ts)
- Processo principal: [src/ts/processos/principal.ts](src/ts/processos/principal.ts)
- Armazenamento de domínio: [src/ts/dominio/armazem.ts](src/ts/dominio/armazem.ts)
- Menus: [src/ts/menus/menuPricipal.ts](src/ts/menus/menuPricipal.ts), [src/ts/menus/menuTipoCadastroCliente.ts](src/ts/menus/menuTipoCadastroCliente.ts), [src/ts/menus/menuTipoDocumento.ts](src/ts/menus/menuTipoDocumento.ts), [src/ts/menus/menuTipoListagemClientes.ts](src/ts/menus/menuTipoListagemClientes.ts)
- Modelos: [src/ts/modelos/cliente.ts](src/ts/modelos/cliente.ts), [src/ts/modelos/documento.ts](src/ts/modelos/documento.ts), [src/ts/modelos/endereco.ts](src/ts/modelos/endereco.ts), [src/ts/modelos/telefone.ts](src/ts/modelos/telefone.ts), [src/ts/modelos/acomodacao.ts](src/ts/modelos/acomodacao.ts), [src/ts/modelos/hospedagem.ts](src/ts/modelos/hospedagem.ts)
- Enumeradores: [src/ts/enumeracoes/TipoDocumento.ts](src/ts/enumeracoes/TipoDocumento.ts), [src/ts/enumeracoes/NomeAcomadacao.ts](src/ts/enumeracoes/NomeAcomadacao.ts)
- Construtores e Diretores: [src/ts/construtores/construtorAcomodacao.ts](src/ts/construtores/construtorAcomodacao.ts), diretoria de acomodação em [src/ts/diretores](src/ts/diretores)
- Impressores: [src/ts/impressores](src/ts/impressores)
- IO: [src/ts/io/entrada.ts](src/ts/io/entrada.ts)

## Instalação e Execução

1. Instale dependências:
   ```
   npm install
   ```
2. Execute em desenvolvimento:
   ```
   npm start
   ```
3. Build (se configurado):
   ```
   npm run build
   ```

Verifique [package.json](package.json) para os scripts disponíveis.

## Funcionalidades

- Cadastro de clientes titulares: [src/ts/processos/cadastroClienteTitular.ts](src/ts/processos/cadastroClienteTitular.ts)
- Cadastro de documentos e RG: [src/ts/processos/cadastroDocumentosCliente.ts](src/ts/processos/cadastroDocumentosCliente.ts), [src/ts/processos/cadastroRg.ts](src/ts/processos/cadastroRg.ts)
- Cadastro de endereço: [src/ts/processos/cadastroEnderecoTitular.ts](src/ts/processos/cadastroEnderecoTitular.ts)
- Cadastro e listagem de acomodações: [src/ts/processos/cadastroAcomodacoes.ts](src/ts/processos/cadastroAcomodacoes.ts), [src/ts/processos/listagemAcomodacoes.ts](src/ts/processos/listagemAcomodacoes.ts)
- Cadastro e listagem de hospedagens: [src/ts/processos/cadastroHospedagem.ts](src/ts/processos/cadastroHospedagem.ts), [src/ts/processos/listagemHospedagens.ts](src/ts/processos/listagemHospedagens.ts)
- Listagem de titulares: [src/ts/processos/listagemTitulares.ts](src/ts/processos/listagemTitulares.ts)
- Menu principal e navegação por tipos: [src/ts/processos/principal.ts](src/ts/processos/principal.ts) com menus em [src/ts/menus](src/ts/menus)

## Convenções

- Interfaces de contrato em [src/ts/interfaces](src/ts/interfaces) (ex.: [src/ts/interfaces/construtor.ts](src/ts/interfaces/construtor.ts), [src/ts/interfaces/impressor.ts](src/ts/interfaces/impressor.ts), [src/ts/interfaces/menu.ts](src/ts/interfaces/menu.ts), [src/ts/interfaces/prototipo.ts](src/ts/interfaces/prototipo.ts))
- Abstrações para processos e direção: [src/ts/abstracoes/processo.ts](src/ts/abstracoes/processo.ts), [src/ts/abstracoes/diretor.ts](src/ts/abstracoes/diretor.ts)
- Separação clara entre domínio, processos, menus e impressores.

## Desenvolvimento

- Ponto inicial: [src/ts/app/app.ts](src/ts/app/app.ts)
- Entrada/saída: [src/ts/io/entrada.ts](src/ts/io/entrada.ts)
- Extensões por novos processos e diretores devem implementar as interfaces em [src/ts/interfaces](src/ts/interfaces).

## Testes

- Configure um runner (ex.: Vitest/Jest) e adicione uma pasta `tests/`.
- Scripts de teste podem ser definidos no [package.json](package.json).
