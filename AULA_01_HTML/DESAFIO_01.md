# 📘 Introdução ao HTML

## 📌 O que é HTML?

HTML significa **HyperText Markup Language** (Linguagem de Marcação de Hipertexto).
É a linguagem utilizada para criar a **estrutura de páginas na web**.

Com HTML, você define:

* Títulos
* Parágrafos
* Imagens
* Links
* Listas
* Tabelas
* Formulários

O HTML **não é uma linguagem de programação**, pois não possui lógica ou estruturas condicionais. Ele é uma **lingagem de marcação**, usada para organizar o conteúdo da página.

---

# 🏗 Estrutura Básica de um Documento HTML

Todo arquivo HTML possui uma estrutura padrão:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Minha Primeira Página</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
    <p>Esta é minha primeira página HTML.</p>
</body>
</html>
```

---

# 🔖 Explicação das Tags Básicas

## `<!DOCTYPE html>`

Define que o documento está usando a versão HTML5.

---

## `<html>`

Tag principal que envolve todo o conteúdo da página.

---

## `<head>`

Contém informações sobre a página (metadados), como:

* Título
* Codificação de caracteres
* Links para CSS
* Scripts

---

## `<meta charset="UTF-8">`

Define o padrão de caracteres (permite acentos e caracteres especiais).

---

## `<title>`

Define o título da página (aparece na aba do navegador).

---

## `<body>`

Contém todo o conteúdo visível da página.

---

# 🧱 Tags Mais Utilizadas

## Títulos

```html
<h1>Até <h6>
```

* `<h1>` é o mais importante
* `<h6>` é o menos importante

---

## Parágrafo

```html
<p>Este é um parágrafo.</p>
```

---

## Links

```html
<a href="https://www.google.com">Ir para o Google</a>
```

---

## Imagens

```html
<img src="imagem.jpg" alt="Descrição da imagem">
```

---

## Listas

### Lista não ordenada

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### Lista ordenada

```html
<ol>
  <li>Primeiro</li>
  <li>Segundo</li>
</ol>
```

---

# 💻 O que é o VS Code?

O **Visual Studio Code (VS Code)** é um editor de código gratuito e muito popular.

Ele permite:

* Criar arquivos HTML, CSS e JavaScript
* Destacar cores das tags
* Instalar extensões
* Visualizar erros
* Trabalhar com vários arquivos ao mesmo tempo

Ele é leve, rápido e ideal para iniciantes.

---

# 🚀 Desafio: Criando sua Primeira Página HTML

## 🎯 Objetivo

Criar uma página HTML simples com:

* Um título principal
* Um parágrafo
* Uma imagem
* Um link
* Uma lista

---

## 📝 Passo a Passo

1. Abra o VS Code.
2. Clique em **File > New File**.
3. Salve o arquivo como:

```
index.html
```

4. Digite a estrutura básica do HTML.
5. Adicione:

* Um `<h1>` com seu nome
* Um `<p>` falando sobre você
* Uma `<img>` (pode usar uma imagem da internet)
* Um `<a>` com link para seu site favorito
* Uma `<ul>` com 3 hobbies seus

6. Salve o arquivo.
7. Clique duas vezes no arquivo para abrir no navegador.

---

## ⭐ Desafio Extra

* Adicione um segundo título `<h2>`
* Crie uma lista ordenada
* Mude o título da aba da página
* Coloque um emoji no texto
* Passe o Código para uma Folha e entregue ao professor para revisar.

---

# 🏁 Conclusão