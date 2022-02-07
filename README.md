# API_paginacao

## O que a API faz:

-   a API deve receber dois parâmetros, a página atual e a quantidade de páginas.
-   se a quantidade de páginas for menor ou igual a 5, deve exibir todos os números no array
-   se a quantidade for maior que 5, deverá:
    -   exibir os números ao redor da página atual, compondo ao total 5 elementos exibidos
    -   se o primeiro valor dos cinco exibidos não for o valor 1, adicionar reticências (...) na primeira opção
    -   se o último valor dos cinco exibidos não for a última página, adicionar reticências (...) na última opção
-   o módulo deverá retornar um array de strings, com as seguintes regras:
    -   a página atual deverá estar marcado em negrito, na sintaxe markdown (envolto por dois asteriscos `**`)
    -   os demais números exibidos deverão ser apresentados como strings
    -   os valores não exibidos serão representados um uma string de reticências (`...`)
-   O exemplo abaixo demonstra as páginas caminhando uma a uma, a partir da página 1 até a 10

![tabela](https://user-images.githubusercontent.com/74432717/152773855-cd727d09-ccf3-4bed-83cf-ec62d273c27d.png)

## Install

**Clone the repository**
```bash
	git clone git@github.com:osvaldoBorgesCNeto/API_paginacao.git
	cd API_paginacao
```

**Install the dependencies**
```bash
	npm install
```

**For development environment**
```bash
	npm run start:dev
```

## API Endpoints

*Base URL: localhost:8000/v1*

### `GET` /paginacao

##### Request URL

```bash
  http://localhost:8000/v1/paginacao?paginaAtual=1&quantidadePaginas=10
```
##### Response body

```json
[
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "paginacao": "['**1**', '2', '3', '4', '5', '...']"
  }
]
```
