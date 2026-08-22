# Node.js, npm, package.json e Gerenciadores de Pacotes

Este guia explica como preparar um ambiente JavaScript com **Node.js**, criar um projeto com **npm**, entender o `package.json`, `node_modules` e dependências, além de apresentar outros gerenciadores de pacotes como **Yarn**, **pnpm** e **Bun**.

---

## 1. O que é o Node.js?

O **Node.js** é um ambiente que permite executar JavaScript fora do navegador.

Tradicionalmente, JavaScript era executado principalmente dentro de navegadores como Chrome, Firefox e Edge.

Com o Node.js, podemos executar JavaScript diretamente no computador ou servidor.

Isso permite desenvolver:

* APIs;
* aplicações backend;
* ferramentas de linha de comando;
* scripts;
* automações;
* ferramentas de frontend;
* aplicações React, Vue, Angular etc.

Por exemplo:

```javascript
console.log('Olá, Node.js!');
```

Podemos executar esse arquivo pelo terminal:

```bash
node index.js
```

---

# 2. Instalando o Node.js

A maneira mais simples de instalar o Node.js é através do site oficial:

[Node.js — Site oficial](https://nodejs.org/?utm_source=chatgpt.com)

Recomenda-se utilizar a versão **LTS (Long Term Support)** para projetos.

Depois da instalação, abra o terminal e verifique:

```bash
node --version
```

Exemplo:

```text
v22.x.x
```

Também podemos verificar o npm:

```bash
npm --version
```

Exemplo:

```text
10.x.x
```

O **npm normalmente é instalado junto com o Node.js**.

---

# 3. Node.js x npm

É importante entender que Node.js e npm são coisas diferentes.

### Node.js

É o ambiente responsável por executar JavaScript fora do navegador.

```bash
node index.js
```

### npm

É um **gerenciador de pacotes** utilizado para instalar e administrar bibliotecas JavaScript.

Por exemplo:

```bash
npm install react
```

Nesse caso, o Node.js executará JavaScript e o npm cuidará da instalação do pacote `react`.

---

# 4. Criando um projeto Node.js

Crie uma pasta:

```bash
mkdir meu-projeto
```

Entre nela:

```bash
cd meu-projeto
```

Agora inicialize um projeto npm:

```bash
npm init
```

O npm fará algumas perguntas:

```text
package name:
version:
description:
entry point:
test command:
git repository:
keywords:
author:
license:
```

Ao final, será criado:

```text
package.json
```

---

# 5. Criando o package.json automaticamente

Também podemos utilizar:

```bash
npm init -y
```

O `-y` aceita as configurações padrão sem fazer as perguntas.

Será criado algo semelhante a:

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

---

# 6. O que é o package.json?

O `package.json` é um dos arquivos mais importantes de um projeto JavaScript/Node.js.

Ele contém informações sobre o projeto e suas dependências.

Exemplo:

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "Meu projeto Node.js",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "eslint": "^9.0.0"
  }
}
```

Entre outras coisas, podemos encontrar:

* nome do projeto;
* versão;
* descrição;
* scripts;
* dependências;
* dependências de desenvolvimento;
* informações de publicação.

---

# 7. O que são dependências?

Uma dependência é uma biblioteca ou pacote que o projeto utiliza para funcionar.

Imagine que estamos criando uma API.

Em vez de implementar tudo manualmente, podemos utilizar o Express:

```bash
npm install express
```

O npm adicionará o pacote ao projeto.

O `package.json` passará a ter algo semelhante a:

```json
{
  "dependencies": {
    "express": "^5.1.0"
  }
}
```

Isso significa que o projeto depende do pacote `express`.

---

# 8. Por que utilizar dependências?

Imagine que precisamos criar uma aplicação que faça:

* requisições HTTP;
* autenticação;
* validação de dados;
* conexão com banco de dados;
* criação de componentes;
* testes;
* formatação de código.

Seria possível implementar tudo do zero, mas isso seria trabalhoso e aumentaria a complexidade do projeto.

O ecossistema JavaScript possui milhares de pacotes que resolvem problemas específicos.

Podemos instalar esses pacotes e reutilizar soluções existentes.

---

# 9. O que é o node_modules?

Quando executamos:

```bash
npm install
```

o npm instala as dependências do projeto.

Essas dependências ficam normalmente dentro da pasta:

```text
node_modules/
```

Exemplo:

```text
meu-projeto/
├── node_modules/
├── package.json
├── package-lock.json
└── index.js
```

A pasta `node_modules` pode ficar bastante grande.

Um projeto que depende de poucos pacotes pode acabar tendo centenas ou milhares de arquivos dentro dela.

Isso acontece porque uma dependência pode possuir outras dependências.

---

# 10. Por que o node_modules é tão importante?

Quando instalamos:

```bash
npm install express
```

o Express pode depender de outros pacotes.

Esses pacotes também precisam estar disponíveis para o projeto.

O `node_modules` contém essas dependências necessárias para executar o projeto.

Podemos visualizar de forma simplificada:

```text
Projeto
│
├── express
│   ├── dependência A
│   ├── dependência B
│   └── dependência C
│
└── outra-dependência
    └── dependência D
```

Por isso, o `node_modules` pode ser muito maior do que a quantidade de pacotes que instalamos diretamente.

---

# 11. Devemos enviar node_modules para o Git?

**Não.**

Normalmente não devemos versionar `node_modules`.

Adicione ao `.gitignore`:

```gitignore
node_modules/
```

Em vez de enviar milhares de arquivos para o Git, enviamos:

```text
package.json
package-lock.json
```

Outro desenvolvedor poderá executar:

```bash
npm install
```

E o npm instalará novamente as dependências.

---

# 12. O que é o package-lock.json?

Quando executamos:

```bash
npm install
```

o npm normalmente cria ou atualiza:

```text
package-lock.json
```

Ele registra informações detalhadas sobre as versões exatas das dependências instaladas e da árvore de dependências.

Por exemplo, podemos declarar:

```json
"express": "^5.1.0"
```

Mas o projeto precisa manter um conjunto reproduzível de versões instaladas.

O `package-lock.json` ajuda a garantir essa consistência entre diferentes máquinas e ambientes.

### Devemos versionar o package-lock.json?

**Sim**, normalmente o `package-lock.json` deve ser enviado para o Git em aplicações e projetos.

---

# 13. package.json x package-lock.json

Uma forma simples de entender:

### package.json

Declara o que o projeto precisa.

```json
{
  "dependencies": {
    "express": "^5.1.0"
  }
}
```

### package-lock.json

Registra detalhes das versões efetivamente resolvidas e da árvore de dependências.

### node_modules

Contém os pacotes instalados no computador.

Podemos pensar assim:

```text
package.json
      ↓
"Quais pacotes meu projeto utiliza?"
      ↓
package-lock.json
      ↓
"Quais versões foram resolvidas?"
      ↓
node_modules
      ↓
"Pacotes instalados no computador"
```

---

# 14. Instalando uma dependência

Para instalar uma biblioteca:

```bash
npm install express
```

Também podemos utilizar a forma curta:

```bash
npm i express
```

O npm irá:

1. baixar o pacote;
2. instalar suas dependências;
3. criar ou atualizar `node_modules`;
4. atualizar `package.json`;
5. atualizar `package-lock.json`.

---

# 15. Dependências de desenvolvimento

Nem todo pacote é necessário para executar a aplicação em produção.

Alguns são utilizados somente durante o desenvolvimento.

Por exemplo:

* ESLint;
* Prettier;
* Vitest;
* ferramentas de build;
* ferramentas de teste.

Podemos instalar uma dependência de desenvolvimento com:

```bash
npm install --save-dev eslint
```

Ou:

```bash
npm install -D eslint
```

Ela aparecerá em:

```json
{
  "devDependencies": {
    "eslint": "^9.0.0"
  }
}
```

---

# 16. dependencies x devDependencies

### dependencies

São dependências necessárias para a aplicação.

Exemplo:

```json
{
  "dependencies": {
    "express": "^5.1.0"
  }
}
```

### devDependencies

São dependências utilizadas durante o desenvolvimento.

Exemplo:

```json
{
  "devDependencies": {
    "eslint": "^9.0.0"
  }
}
```

Uma aplicação pode ter:

```text
dependencies
│
├── express
├── cors
└── dotenv

devDependencies
│
├── eslint
├── prettier
└── vitest
```

---

# 17. Removendo uma dependência

Para remover um pacote:

```bash
npm uninstall express
```

Ou:

```bash
npm remove express
```

O npm atualizará o `package.json`, o lockfile e o `node_modules`.

---

# 18. Instalando as dependências de um projeto existente

Quando baixamos um projeto do Git:

```bash
git clone <repositorio>
```

normalmente não teremos `node_modules`.

Isso é esperado.

Entre na pasta:

```bash
cd meu-projeto
```

Depois:

```bash
npm install
```

O npm analisará o `package.json` e o lockfile e instalará as dependências.

---

# 19. npm install x npm ci

Existem dois comandos importantes.

### npm install

Utilizado normalmente durante o desenvolvimento.

```bash
npm install
```

Ele pode atualizar o lockfile quando necessário.

### npm ci

É muito utilizado em ambientes de CI/CD.

```bash
npm ci
```

O `npm ci` utiliza o lockfile para realizar uma instalação limpa e reproduzível.

Uma situação comum:

```text
Desenvolvimento
      ↓
npm install

CI/CD
      ↓
npm ci
```

---

# 20. Scripts do package.json

O `package.json` também pode armazenar comandos do projeto.

Exemplo:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js",
    "lint": "eslint ."
  }
}
```

Podemos executar:

```bash
npm run start
```

ou:

```bash
npm run dev
```

e:

```bash
npm run lint
```

Alguns scripts possuem comandos simplificados:

```bash
npm start
```

é equivalente a:

```bash
npm run start
```

---

# 21. O ecossistema de pacotes JavaScript

O npm não é apenas um comando.

Existe um enorme ecossistema de pacotes JavaScript.

Um dos principais registros de pacotes é o:

[npm Registry](https://www.npmjs.com/?utm_source=chatgpt.com)

Nele encontramos pacotes como:

* React;
* Express;
* Axios;
* Vite;
* ESLint;
* Prettier;
* Vitest;
* TypeScript;
* e milhares de outros.

---

# 22. Yarn

O **Yarn** é outro gerenciador de pacotes para projetos JavaScript.

Assim como o npm, ele permite instalar e gerenciar dependências.

Site oficial:

[Yarn](https://yarnpkg.com/?utm_source=chatgpt.com)

Com npm:

```bash
npm install react
```

Com Yarn:

```bash
yarn add react
```

Para instalar dependências de um projeto:

```bash
yarn
```

Ou:

```bash
yarn install
```

O Yarn possui seu próprio lockfile:

```text
yarn.lock
```

---

# 23. pnpm

O **pnpm** é outro gerenciador de pacotes popular.

Site oficial:

[pnpm](https://pnpm.io/?utm_source=chatgpt.com)

Instalação de uma dependência:

```bash
pnpm add react
```

Dependência de desenvolvimento:

```bash
pnpm add -D eslint
```

Instalação do projeto:

```bash
pnpm install
```

Execução de scripts:

```bash
pnpm dev
```

ou:

```bash
pnpm run dev
```

O pnpm possui o arquivo:

```text
pnpm-lock.yaml
```

---

# 24. Por que o pnpm é diferente?

Uma das principais características do pnpm é sua forma de armazenar e reutilizar pacotes.

Em vez de simplesmente manter uma cópia completa de cada pacote dentro de cada projeto, o pnpm utiliza um armazenamento global e links para disponibilizar os pacotes nos projetos.

Isso pode reduzir:

* espaço utilizado em disco;
* tempo de instalação;
* duplicação de dependências.

É especialmente interessante em projetos grandes e monorepos.

---

# 25. Bun

O **Bun** é uma ferramenta moderna para o ecossistema JavaScript/TypeScript.

Ele não é apenas um gerenciador de pacotes.

O Bun também fornece:

* runtime JavaScript;
* gerenciador de pacotes;
* bundler;
* test runner.

Site oficial:

[Bun](https://bun.sh/?utm_source=chatgpt.com)

Por exemplo:

```bash
bun install
```

Instalar uma dependência:

```bash
bun add react
```

Executar um script:

```bash
bun run dev
```

---

# 26. Comparando npm, Yarn, pnpm e Bun

| Ferramenta | Função principal                        | Lockfile            |
| ---------- | --------------------------------------- | ------------------- |
| npm        | Gerenciador de pacotes                  | `package-lock.json` |
| Yarn       | Gerenciador de pacotes                  | `yarn.lock`         |
| pnpm       | Gerenciador de pacotes                  | `pnpm-lock.yaml`    |
| Bun        | Runtime + package manager + ferramentas | `bun.lock`          |

Todos podem ser utilizados para instalar dependências JavaScript.

---

# 27. Qual devo utilizar?

Não existe uma única resposta.

### npm

É uma excelente escolha para começar.

```bash
npm install
npm run dev
```

Vantagens:

* já vem com Node.js;
* muito difundido;
* documentação ampla;
* compatibilidade excelente.

### Yarn

Pode ser uma boa escolha para equipes que já utilizam o ecossistema Yarn.

```bash
yarn install
yarn dev
```

### pnpm

É uma ótima opção para projetos grandes, monorepos e quando eficiência de armazenamento/instalação é importante.

```bash
pnpm install
pnpm dev
```

### Bun

É interessante para quem quer utilizar um ambiente mais integrado e rápido para JavaScript/TypeScript.

```bash
bun install
bun run dev
```

---

# 28. Não misture gerenciadores sem necessidade

É recomendado que um projeto utilize um gerenciador de pacotes principal.

Por exemplo:

```text
Projeto
│
├── package.json
├── package-lock.json
└── npm
```

ou:

```text
Projeto
│
├── package.json
├── pnpm-lock.yaml
└── pnpm
```

ou:

```text
Projeto
│
├── package.json
├── yarn.lock
└── Yarn
```

Evite criar no mesmo projeto:

```text
package-lock.json
yarn.lock
pnpm-lock.yaml
```

sem uma razão específica.

Isso pode gerar inconsistências sobre quais versões devem ser instaladas.

---

# 29. Entendendo o fluxo completo

Quando criamos um projeto:

```bash
npm init -y
```

temos:

```text
package.json
```

Depois instalamos:

```bash
npm install express
```

e passamos a ter:

```text
meu-projeto/
├── node_modules/
├── package.json
├── package-lock.json
└── index.js
```

O fluxo é:

```text
npm install express
        ↓
package.json
        ↓
"express": "^5.x.x"
        ↓
package-lock.json
        ↓
versões resolvidas
        ↓
node_modules
        ↓
pacotes instalados
```

---

# 30. O que deve ir para o Git?

Normalmente:

```text
✅ package.json
✅ package-lock.json
✅ código-fonte
✅ arquivos de configuração
```

Normalmente não:

```text
❌ node_modules/
❌ arquivos .env com informações secretas
```

Um `.gitignore` básico:

```gitignore
node_modules/
.env
dist/
```

---

# 31. Exemplo de projeto completo

Depois de executar:

```bash
mkdir meu-projeto
cd meu-projeto
npm init -y
npm install express
npm install -D eslint
```

teremos algo semelhante a:

```text
meu-projeto/
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
└── index.js
```

O `package.json` poderá ser:

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "Exemplo de projeto Node.js",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "eslint": "^9.0.0"
  }
}
```

---

# 32. Resumo

Os principais conceitos que devemos entender são:

### Node.js

Permite executar JavaScript fora do navegador.

### npm

Gerencia pacotes e dependências.

### package.json

Descreve o projeto e suas dependências.

### package-lock.json

Registra a resolução das versões e da árvore de dependências.

### node_modules

Contém os pacotes instalados no projeto.

### dependencies

Pacotes necessários pela aplicação.

### devDependencies

Pacotes necessários durante o desenvolvimento.

### npm, Yarn, pnpm e Bun

São ferramentas diferentes para gerenciar pacotes e, no caso do Bun, também executar outras tarefas do ecossistema JavaScript.

---

# 33. Comandos essenciais

### Criar projeto

```bash
npm init -y
```

### Instalar dependências

```bash
npm install
```

### Instalar um pacote

```bash
npm install express
```

### Instalar dependência de desenvolvimento

```bash
npm install -D eslint
```

### Remover pacote

```bash
npm uninstall express
```

### Executar script

```bash
npm run dev
```

### Instalação limpa baseada no lockfile

```bash
npm ci
```

### Verificar versões

```bash
node --version
npm --version
```

---

# Conclusão

Entender **Node.js, npm, `package.json`, `package-lock.json`, dependências e `node_modules`** é fundamental para trabalhar com projetos JavaScript modernos.

Ferramentas como **Yarn, pnpm e Bun** oferecem alternativas ao npm, mas o conceito central continua sendo o mesmo:

```text
Projeto
   │
   ├── package.json
   │       ↓
   │   Dependências declaradas
   │
   ├── lockfile
   │       ↓
   │   Versões resolvidas
   │
   └── node_modules
           ↓
       Pacotes instalados
```

A partir desses conceitos, fica muito mais fácil entender ferramentas como **Vite, React, Next.js, NestJS, Express, TypeScript** e praticamente todo o ecossistema moderno de JavaScript.
