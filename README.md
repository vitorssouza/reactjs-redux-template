## Template Básico Reactjs

Template básico criado com o create-react-app, configurado com o eslint, prettier e adicionado os pacotes básicos axios (pré-instalado), react-router-dom (pré-configurado) e redux (pré-configurado e exemplificado nos componentes).

## Instalação

Para utilizar o boilerplate basta clonar o repositório utilizando git e instalar as dependências.

###### Para clonar o repositório

```bash
git clone https://github.com/vitorssouza/reacjs-basic-template.git
```

###### Para instalar as dependências

```bash
yarn install ou npm install
```

###### Para iniciar o projeto

```bash
yarn start
```

## Estrutura do projeto

```
├── public // Pasta gerada pelo create-react-app
├── src // Pasta dos arquivos de código
     ├── pages // Pasta onde ficam as páginas do app
           ├── Main // Componente de página principal
           ├── Other // Componente criado para de teste do react-router-dom
     ├── routes.js // Arquivo de rotas do app
     ├── store // Arquivos Redux
           ├── actions // Pasta de ações de modificações dos estados do Redux
           ├── reducers // Pasta dos estados do Redux
                 ├── index.js // Arquivo de combinação dos estados em um único estado do Redux
           ├── index.js // Arquivo de configuração e criação do store do Redux
├── .eslintrc.js // Arquivo de configuração do eslint
├── .prettierrc // Arquivo de configuração do prettier

```
