# API_paginacao

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
