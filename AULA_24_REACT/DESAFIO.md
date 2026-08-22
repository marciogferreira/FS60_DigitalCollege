# Vite + React — Guia de Instalação, Configuração e Criação de Componentes

Este projeto utiliza **React**, **Vite** e **JavaScript**. Este README explica como instalar as dependências, configurar o ambiente, executar o projeto e criar novos componentes.

## 1. Pré-requisitos

Antes de começar, instale:

* **Node.js** — versão 18+ recomendada
* **npm** — instalado junto com o Node.js
* Um editor de código, como o VS Code

Para verificar as versões:

```bash
node --version
npm --version
```

## 2. Criando um projeto com Vite e React

Para criar um novo projeto:

```bash
npm create vite@latest meu-projeto
```

O Vite fará algumas perguntas. Selecione:

```text
Framework: React
Variant: JavaScript
```

Depois, entre na pasta:

```bash
cd meu-projeto
```

## 3. Instalando as dependências

Execute:

```bash
npm install
```

Esse comando instala todas as dependências definidas no `package.json`.

## 4. Estrutura inicial do projeto

Depois da criação, a estrutura será semelhante a:

```text
meu-projeto/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

### Principais arquivos

* `src/main.jsx` — ponto de entrada da aplicação.
* `src/App.jsx` — componente principal.
* `src/App.css` — estilos do componente `App`.
* `src/index.css` — estilos globais.
* `vite.config.js` — configuração do Vite.
* `package.json` — dependências e scripts do projeto.

## 5. Configuração básica

Normalmente, um projeto criado pelo Vite já vem configurado para funcionar.

O `package.json` possui scripts semelhantes a:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

### Variáveis de ambiente

Para criar variáveis de ambiente, utilize um arquivo `.env`:

```env
VITE_API_URL=https://api.exemplo.com
```

No React, a variável pode ser acessada através de:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;

console.log(apiUrl);
```

> Variáveis que precisam ser acessadas pelo código do frontend devem possuir o prefixo `VITE_`.

Não coloque senhas, tokens privados ou outras informações secretas em variáveis `VITE_*`, pois elas podem ser expostas no código do navegador.

## 6. Rodando o projeto em desenvolvimento

Execute:

```bash
npm run dev
```

O terminal exibirá uma URL semelhante a:

```text
http://localhost:5173
```

Abra essa URL no navegador.

O Vite possui **Hot Module Replacement (HMR)**, então alterações no código normalmente aparecem automaticamente no navegador.

## 7. Criando um componente React

Uma boa prática é organizar os componentes dentro de:

```text
src/
└── components/
```

Por exemplo:

```text
src/
└── components/
    └── Button/
        ├── Button.jsx
        └── Button.css
```

### Componente `Button.jsx`

```jsx
import './Button.css';

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
```

### Estilo `Button.css`

```css
.button {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background-color: #646cff;
  color: white;
  cursor: pointer;
}

.button:hover {
  background-color: #535bf2;
}
```

## 8. Utilizando o componente

No `App.jsx`, importe o componente:

```jsx
import Button from './components/Button/Button';

function App() {
  function handleClick() {
    alert('Botão clicado!');
  }

  return (
    <main>
      <h1>Meu projeto React</h1>

      <Button onClick={handleClick}>
        Clique aqui
      </Button>
    </main>
  );
}

export default App;
```

Agora o componente `Button` pode ser reutilizado em qualquer parte da aplicação.

## 9. Criando componentes com props

Props permitem enviar informações de um componente pai para um componente filho.

Exemplo:

```jsx
function UserCard({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
```

Uso:

```jsx
<UserCard
  name="João"
  email="joao@example.com"
/>
```

## 10. Utilizando estado com `useState`

Para componentes que precisam armazenar informações que mudam durante a execução, utilize `useState`.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Contagem: {count}</p>

      <button onClick={increment}>
        Incrementar
      </button>
    </div>
  );
}

export default Counter;
```

## 11. Criando um componente com estado e CSS

Uma estrutura recomendada:

```text
src/
├── components/
│   └── Counter/
│       ├── Counter.jsx
│       └── Counter.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

Isso facilita a manutenção conforme a aplicação cresce.

## 12. Gerando a versão de produção

Para criar a versão otimizada da aplicação:

```bash
npm run build
```

Os arquivos finais serão gerados na pasta:

```text
dist/
```

## 13. Testando o build localmente

Depois do build:

```bash
npm run preview
```

O Vite disponibilizará uma URL local para testar a versão de produção.

## 14. Comandos principais

| Comando           | Função                               |
| ----------------- | ------------------------------------ |
| `npm install`     | Instala as dependências              |
| `npm run dev`     | Inicia o servidor de desenvolvimento |
| `npm run build`   | Gera o build de produção             |
| `npm run preview` | Executa o build localmente           |
| `npm run lint`    | Executa o ESLint, se configurado     |

## 15. Fluxo recomendado para desenvolver

```text
1. Instalar dependências
       ↓
2. npm run dev
       ↓
3. Criar/editar componentes
       ↓
4. Testar no navegador
       ↓
5. npm run lint
       ↓
6. npm run build
       ↓
7. Publicar a pasta dist/
```

## 16. Exemplo completo

Um exemplo simples de aplicação:

```text
src/
├── components/
│   └── Button/
│       ├── Button.jsx
│       └── Button.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

`App.jsx`:

```jsx
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <h1>Olá, React!</h1>

      <Button onClick={() => alert('Olá!')}>
        Clique aqui
      </Button>
    </div>
  );
}

export default App;
```

`Button.jsx`:

```jsx
import './Button.css';

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
```

Com isso, temos uma aplicação React simples, utilizando **Vite + React + JavaScript**, com um componente reutilizável.

## 17. Boas práticas

* Organize componentes em pastas próprias.
* Prefira componentes pequenos e reutilizáveis.
* Utilize `props` para passar dados entre componentes.
* Utilize `useState` para estados locais.
* Mantenha estilos próximos dos componentes quando isso facilitar a manutenção.
* Não coloque informações secretas em variáveis `VITE_*`.
* Execute o lint antes de enviar alterações.
* Sempre valide o build antes de publicar.

## 18. Resumo rápido

Para criar e executar um novo projeto:

```bash
npm create vite@latest meu-projeto
cd meu-projeto
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build:

```bash
npm run preview
```
