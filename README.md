# Calculadora de Aprovação FinalUefs

Este é um projeto simples de calculadora de aprovação utilizando **Next.js** e **Tailwind CSS**. O aplicativo permite que o usuário insira suas notas, calcule a média das Medidas Parciais Consolidadas (MMPC) e determine se é necessário realizar a Avaliação Final (AF) para ser aprovado.

## Funcionalidades

- **Entrada de notas**: O usuário pode escolher o número de notas que deseja informar e inseri-las.
- **Cálculo da média**: O aplicativo calcula a média das notas inseridas e determina a MMPC.
- **Cálculo da Avaliação Final**: Caso a MMPC seja inferior a 7, o aplicativo calcula a nota mínima necessária na AF para aprovação.
- **Validação**: O aplicativo valida o formato das notas, permitindo tanto `.` quanto `,` como separadores decimais.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado servidor e cliente.
- **Tailwind CSS**: Framework utilitário para criação de designs responsivos e rápidos.
- **React**: Biblioteca para criação de interfaces de usuário.

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/duasck/FinalUefs.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd final-uefs
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

   O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Uso

1. Selecione o número de notas a serem inseridas.
2. Insira as notas no formato correto (você pode usar `.` ou `,` como separador decimal).
3. O aplicativo calculará automaticamente a média e, se necessário, informará a nota mínima para a Avaliação Final (AF).


## Personalização

- Para adicionar mais funcionalidades ou alterar o comportamento das notas, edite o arquivo `pages/index.js`.
- O layout pode ser customizado facilmente alterando as classes do Tailwind CSS no código.

## Contribuições

Se você deseja contribuir para o projeto, sinta-se à vontade para abrir um **Pull Request** ou **Issue**.

---

### Observações

- Este projeto foi criado com o objetivo de praticar o uso de **Next.js** e **Tailwind CSS**.
- Qualquer dúvida ou sugestão é bem-vinda! 😊

---
