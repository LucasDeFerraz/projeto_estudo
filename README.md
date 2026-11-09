# Estrelas do Amanhã — formulário de matrícula

Projeto de estudo do curso Full Stack da Rocketseat, desenvolvido com HTML, CSS e pequenas interações em JavaScript. O formulário segue a referência visual do desafio, com os ícones e a ilustração já presentes no repositório.

## Executar

Abra `index.html` no navegador ou use o Live Server do VS Code. Não é necessário instalar dependências. A fonte Poppins é carregada pelo Google Fonts e requer acesso à internet; há uma fonte alternativa sem serifa.

## Estrutura preservada

- `index.html`: formulário, apresentação e interações locais.
- `styles/global.css`: variáveis, tipografia e estilos globais.
- `styles/layout.css`: layout de duas colunas e adaptação para celular.
- `styles/forms.css`: grupos, termos, botões e diálogos.
- `styles/fields/index.css`: campos, upload, cartões de seleção e estados de erro/foco.
- `pictures/`: ilustração, logotipo e ícones originais.

## Funcionalidades da demonstração

- Grupos independentes para criança, endereço, responsável e opções de matrícula.
- Seleção exclusiva de turno e esporte, com suporte a teclado.
- Upload de certidão e exibição dos nomes dos arquivos selecionados.
- Validação nativa de campos obrigatórios, e-mail, CEP, telefone e data de nascimento.
- Termos e privacidade demonstrativos em diálogos acessíveis, fechados também com Escape.
- **Salvar respostas:** baixa um arquivo JSON com o preenchimento atual, inclusive incompleto, sem anexos. O arquivo é um registro local; não há importação automática nem salvamento em banco.
- **Fazer matrícula:** valida o formulário e apresenta um aviso de demonstração. Não envia dados nem cria matrícula.
- Layout responsivo e foco visível nos controles.

## Limites do projeto

Este é um frontend de estudo, sem backend, banco de dados ou consulta automática de CEP. Por isso os campos de rua, cidade e estado podem ser preenchidos manualmente. Use somente dados fictícios, inclusive nos anexos. Não use o projeto para coletar dados reais de crianças ou documentos.

Referência: [Formulário de matrícula no Figma](https://www.figma.com/design/x0KWDCuVkQDPq4JwF6uCN5/Formul%C3%A1rio-de-matr%C3%ADcula--Community-?node-id=2109-2114).
