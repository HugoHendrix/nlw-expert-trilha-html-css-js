
![Logo NLW](https://github.com/HugoHendrix/nlw-expert-trilha-html-css-js/blob/main/assets/logo-nlw-expert.png?raw=true)
# NLW Expert - 14

Nesta edição da NLW (Next Level Week), a Rocketseat preparou um Quiz para a trilha de HTML, CSS e JavaScript. Optamos por abordar os fundamentos do JavaScript como tema principal, alinhando-se com nossos estudos atuais e aprofundando nosso conhecimento nessa linguagem poderosa.



## Sumário

- [Visão Geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Captura de Tela](#captura-de-tela)
  - [Links](#links)
- [Meu Processo](#meu-processo)
  - [Desenvolvido com](#desenvolvido-com)
  - [O que Aprendi](#o-que-aprendi)
  - [Desenvolvimento Contínuo](#desenvolvimento-contínuo)
  - [Recursos Úteis](#recursos-úteis)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)
## Visão Geral

### O desafio

Os usuários devem ser capazes de:

- Ganhar pontos quando responderem corretamente às perguntas do Quiz.

### Captura de Tela

![Screenshot do Projeto](https://github.com/HugoHendrix/nlw-expert-trilha-html-css-js/blob/main/assets/design-nlw.png?raw=true)


## Links

- URL da Solução: [NLW 14 Expert](https://hugohendrix.github.io/nlw-expert-trilha-html-css-js/)
## Meu Processo

### Desenvolvido com

- Marcação HTML5 semântica
- Propriedades personalizadas CSS
- Bootstrap
- JavaScript Vanilla
- Fluxo de trabalho "mobile-first"
## O que aprendi

### Utilizando a Tag `<template>`

A integração da tag `<template>` no desenvolvimento web moderno representa um avanço significativo na manipulação dinâmica de conteúdo HTML. Permitindo a definição de elementos que não são imediatamente renderizados na página, a tag `<template>` proporciona uma abordagem elegante para modularização e reutilização de componentes.

#### Definição do Conteúdo:

A tag `<template>` oferece um ambiente encapsulado para definir fragmentos de conteúdo HTML sem a necessidade de exibi-los inicialmente ao usuário. Esse recurso é especialmente útil quando se deseja ocultar partes da interface até que sejam necessárias, contribuindo para uma experiência de usuário mais fluida.

```html
<template id="meu-template">
    <div>
        <h2>Título do Template</h2>
        <p>Conteúdo do Template</p>
    </div>
</template>
```

#### Acesso via JavaScript:

Por meio do DOM, o conteúdo dentro da tag `<template>` pode ser acessado e manipulado dinamicamente utilizando JavaScript. Isso abre portas para a criação de scripts mais sofisticados, permitindo a geração de elementos HTML com base em lógica de negócios ou eventos do usuário.

```javascript
const template = document.querySelector('#meu-template');
const templateContent = template.content;
```

#### Clonagem do Conteúdo:

O método `content.cloneNode(true)` possibilita a clonagem do conteúdo definido dentro do template, gerando cópias que podem ser inseridas dinamicamente no documento HTML. Essa funcionalidade é essencial para a criação de múltiplas instâncias de elementos sem a necessidade de redundância no código HTML.

```javascript
const template = document.querySelector('#meu-template');
const templateContent = template.content.cloneNode(true);
document.body.appendChild(templateContent);
```

#### Uso Repetido:

Uma das características mais poderosas da tag `<template>` é sua capacidade de reutilização. Os templates podem ser clonados e inseridos em várias partes do documento ou em momentos distintos durante a execução do script, promovendo a modularidade e a manutenibilidade do código.

```javascript
const template = document.querySelector('#meu-template');
const templateContent = template.content.cloneNode(true);
document.body.appendChild(templateContent);

// Clonar e inserir novamente em outro lugar
const outroTemplateContent = template.content.cloneNode(true);
document.querySelector('#outra-div').appendChild(outroTemplateContent);
```

Em suma, a tag `<template>` representa uma ferramenta valiosa para arquitetar aplicações da web de forma mais eficiente e elegante. Ao aproveitar seu potencial, os desenvolvedores podem criar interfaces mais dinâmicas e escaláveis, impulsionando a qualidade e a flexibilidade de seus projetos.

### O que eu aprendi: Arrays e Objetos em JavaScript

JavaScript oferece duas estruturas de dados fundamentais:

- **Arrays**: Coleções ordenadas de elementos acessados por índices numéricos. São mutáveis e ideais para armazenar conjuntos de dados relacionados.

Exemplo:
```javascript
const numeros = [1, 2, 3, 4, 5];
const frutas = ['maçã', 'banana', 'laranja'];
```

- **Objetos**: Armazenam dados estruturados usando pares chave-valor. Chaves únicas acessam valores correspondentes. São usados para representar entidades complexas.

Exemplo:
```javascript
const pessoa = { nome: 'João', idade: 30, cidade: 'São Paulo' };
const carro = { marca: 'Toyota', modelo: 'Corolla', ano: 2020 };
```

Arrays e objetos são cruciais para estruturar e manipular dados em JavaScript, proporcionando eficiência e flexibilidade no desenvolvimento de aplicativos.

### O que eu aprendi: Manipulação de Elementos HTML em JavaScript

A manipulação de elementos HTML em JavaScript é uma parte essencial do desenvolvimento web, e entender os métodos `querySelector`, `cloneNode` e `appendChild` é fundamental para interagir dinamicamente com o DOM (Modelo de Objeto do Documento).

1. **`querySelector`**:
   - `querySelector` é um método que permite selecionar elementos HTML dentro do documento usando seletores CSS.
   - Retorna o primeiro elemento que corresponde ao seletor especificado ou `null` se nenhum elemento corresponder.
   - Pode-se usar uma variedade de seletores CSS, como seletores de tag, classe, id e seletores mais avançados.
   - Muito útil para interagir com elementos HTML de forma eficiente e concisa.

   Exemplo:
   ```javascript
   // Seleciona o primeiro elemento com a classe "exemplo"
   const elemento = document.querySelector('.exemplo');
   ```

2. **`cloneNode`**:
   - `cloneNode` é um método que cria uma cópia de um nó existente em um documento HTML, incluindo todos os seus descendentes.
   - Pode-se usar para criar cópias de elementos HTML, como nós de texto, elementos de lista, tabelas, etc.
   - Aceita um argumento booleano opcional (`deep`), indicando se todos os descendentes do nó devem ser clonados também.

   Exemplo:
   ```javascript
   // Clona o conteúdo de um elemento div
   const divClonada = document.querySelector('div').cloneNode(true);
   ```

3. **`appendChild`**:
   - `appendChild` é um método que permite adicionar um nó filho ao final da lista de filhos de um nó pai especificado.
   - Adiciona o nó filho fornecido ao final da lista de filhos do nó pai.
   - Se o nó filho já pertencer a outro nó pai, ele será removido de seu pai anterior antes de ser adicionado ao novo pai.

   Exemplo:
   ```javascript
   // Adiciona um novo parágrafo como filho de um elemento div
   const divPai = document.querySelector('div');
   const novoParagrafo = document.createElement('p');
   novoParagrafo.textContent = 'Novo parágrafo';
   divPai.appendChild(novoParagrafo);
   ```

Esses métodos são essenciais no desenvolvimento web com JavaScript, permitindo interagir dinamicamente com elementos HTML, criar e manipular cópias de nós e construir a estrutura do documento conforme necessário.

### O que eu aprendi: O Laço `for` em JavaScript

O laço `for` é uma estrutura de controle fundamental em JavaScript, usada para repetir um bloco de código um número conhecido de vezes. Aqui está uma explicação detalhada sobre como funciona:

1. **Sintaxe**:
   O laço `for` tem a seguinte sintaxe:
   ```javascript
   for (inicialização; condição; expressão de iteração) {
       // bloco de código a ser repetido
   }
   ```

2. **Inicialização**:
   A inicialização é uma expressão executada uma vez antes do início do loop. Geralmente, é usado para inicializar uma variável de controle do loop.

3. **Condição**:
   A condição é uma expressão avaliada antes de cada iteração do loop. Se a condição for verdadeira, o bloco de código dentro do loop é executado; caso contrário, o loop é encerrado.

4. **Expressão de Iteração**:
   A expressão de iteração é avaliada após cada iteração do loop. Geralmente, é usado para atualizar a variável de controle do loop.

5. **Bloco de Código**:
   O bloco de código é o conjunto de instruções que são executadas repetidamente enquanto a condição do loop for verdadeira.

Aqui está um exemplo de uso do laço `for` em JavaScript:
```javascript
// Exemplo: Imprimir os números de 1 a 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```
Neste exemplo:
- A inicialização (`let i = 1;`) define a variável de controle `i` e a inicializa com o valor 1.
- A condição (`i <= 5;`) verifica se `i` é menor ou igual a 5.
- O bloco de código (`console.log(i);`) imprime o valor de `i` no console.
- A expressão de iteração (`i++`) incrementa o valor de `i` após cada iteração.

O laço `for` é uma ferramenta poderosa para repetir tarefas em JavaScript, especialmente quando o número de iterações é conhecido antecipadamente.

### O que eu aprendi: Boas Práticas de Uso de Fontes para Legibilidade e Acessibilidade

Ao escolher e utilizar fontes em projetos digitais, é essencial considerar a legibilidade e acessibilidade do texto. Aqui estão algumas boas práticas a serem seguidas:

1. **Escolha de Fontes:**
   - Priorize fontes legíveis em diversos tamanhos e dispositivos.
   - Evite fontes ornamentadas ou difíceis de ler.
   - Verifique se as fontes selecionadas possuem variantes para criar hierarquia visual.

2. **Estilo e Tamanho da Fonte:**
   - Utilize diferentes estilos e tamanhos para criar hierarquia visual.
   - Ajuste o tamanho da fonte de acordo com o contexto e dispositivo.
   - Defina um espaçamento adequado entre linhas para melhorar a legibilidade.

3. **Contraste e Cores:**
   - Garanta bom contraste entre texto e fundo.
   - Evite combinações de cores que tornem o texto difícil de ler.
   - Use cores com moderação para destacar informações importantes.

4. **Acessibilidade:**
   - Utilize marcações semânticas adequadas para indicar estrutura e importância do texto.
   - Forneça texto alternativo para imagens (atributo `alt`).
   - Teste a acessibilidade do conteúdo usando ferramentas e verifique a navegabilidade e compreensão usando apenas o teclado.

5. **Propriedades CSS Adicionais:**
   - `font-synthesis: none;`: Desabilita a síntese de fontes.
   - `text-indent: 20px;`: Define recuo no início do primeiro parágrafo.
   - `text-rendering: optimizeLegibility;`: Melhora a legibilidade do texto.
   - `webkit-font-smoothing: antialiased;`: Suaviza bordas de fontes em telas de alta resolução.
   - `moz-osx-font-smoothing: grayscale;`: Aplica escala de cinza suave em fontes em dispositivos Mac.
   - `webkit-text-size-adjust: 100%;`: Evita ajustes automáticos do tamanho do texto pelo navegador.

6. **Outras Sugestões:**
   - Defina espaçamento vertical adequado entre linhas.
   - Equilibre o uso de fontes com e sem serifa.
   - Evite fontes com letras muito estreitas ou condensadas.
   - Respeite diretrizes de contraste para garantir legibilidade.

Seguindo essas diretrizes e aplicando as propriedades CSS relevantes, é possível promover uma melhor experiência de leitura e acessibilidade em projetos digitais, tornando o conteúdo mais acessível e fácil de entender para todos os usuários.
## Desenvolvimento Contínuo

- Aprender mais sobre as classes do Bootstrap.
- Aprofundar o entendimento em:
  - DOM.
  - ARRAYS.
  - Objetos.
  - FOR
  - Acessibilidade.

## Recursos Úteis

- [Rocketseat](https://app.rocketseat.com.br/home) - Site da Galera da Rocketseat, que fornece valiosos recursos e conhecimentos sobre desenvolvimento web.
## Autor

- Linkedin - [Hugo Hendrix](https://www.linkedin.com/in/hugohendrix/)
## Agradecimentos

Gostaria de expressar minha sincera gratidão à equipe do evento NLW 14 Expert. Obrigado por proporcionar uma experiência de aprendizado incrível e por compartilhar conhecimentos valiosos durante o evento. As lições ensinadas foram verdadeiramente inspiradoras e impactantes. Estou extremamente grato pela oportunidade de participar e por todo o apoio e orientação oferecidos ao longo do evento. Espero continuar aplicando e aprimorando as habilidades adquiridas. Obrigado mais uma vez por tudo!
