# Desafio 1 Tuma T6 Programa ONE 

Challenge: Codificador e decodificador de texto em HTML, CSS e Javascript.

## Codificador e Decodificador de Texto

Este é um sistema simples de criptografar e descriptografar texto desenvolvido em HTML, CSS e JavaScript, como requisito do Programa ONE.

Batizado de Enigma em homenagem a máquina de criptografia de Turing.

### Regras de Funcionalidade:

- Apenas letras minúsculas e números são permitidos no texto de entrada;
- A criptografia é realizada substituindo cada letra do texto de entrada por uma sequência específica de caracteres, de acordo com a matriz de criptografia definida;
- A descriptografia é realizada revertendo o processo de criptografia, substituindo as sequências específicas de caracteres pelo correspondente original;
- O texto criptografado ou descriptografado é exibido no campo de saída;
- Após a operação de criptografia ou descriptografia, são exibidos botões para copiar o texto resultante e limpar os campos de entrada e saída;
- Mensagens de erro são exibidas caso o texto de entrada contenha caracteres não permitidos;
- Um conjunto específico de substituições é definido na matriz de criptografia para realizar a criptografia e descriptografia.

### Lógica da Matriz de Criptografia:

O conjunto de substituição definido na matriz de criptografia consiste em pares de caracteres, onde o primeiro caractere representa a letra original e o segundo caractere representa a substituição correspondente. Aqui está o conjunto de substituição especificado na matriz:

**"a":** é substituído por "ai"

**"e":** é substituído por "enter"

**"i":** é substituído por "imes"

**"o":** é substituído por "ober"

**"u":** é substituído por "ufa"

### Como usar:

1. Abra o link:
   
    https://codificador-one-alura-jp.vercel.app/
   
2. Digite o texto que deseja criptografar no campo de entrada.
3. Clique no botão "Criptografar" para converter o texto conforme as regras definidas.
4. Clique no botão "Descriptografar" para reverter o texto criptografado de volta ao texto original.
5. Para copiar o texto gerado, clique no botão "Copiar".
6. Para limpar o campo de saída, clique no botão "Limpar".