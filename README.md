# Gerador de Assinaturas para Gmail

## Descrição
Este projeto tem como objetivo gerar assinaturas de e-mail personalizadas de acordo com os padrões da Setup Tecnologia. A aplicação permite a seleção de diferentes empresas, inserção de dados do usuário e geração automática de assinaturas em formato HTML e imagem.

## Tecnologias Utilizadas
- **JavaScript** para a lógica de geração de HTML
- **HTML5 e CSS3** para estrutura e estilo
- **html2canvas** para a conversão de HTML em imagem

## Funcionalidades
- Seleção de diferentes empresas para personalização da assinatura.
- Inserção de dados do usuário: Nome, Cargo, Telefone e E-mail.
- Geração automática do HTML da assinatura.
- Conversão da assinatura em imagem para facilitar a aplicação no Gmail.
- Botão para copiar o HTML renderizado das assinaturas.

## Instalação e Uso
1. Clone este repositório:
   ```sh
   git clone https://github.com/seuusuario/gerador-assinaturas.git
   ```
2. Navegue até a pasta do projeto:
   ```sh
   cd gerador-assinaturas
   ```
3. Abra o arquivo `index.html` em um navegador compatível.
4. Preencha os campos com suas informações.
5. Escolha a empresa correspondente.
6. Clique no botão para gerar a assinatura.

## Estrutura do Projeto
````bash 
GeradorAssinaturaEmail/
|
│   documentation.html
│   logo_acessorias.html
│   logo_adveasy.html
│   logo_best_doctors.html
│   logo_openix.html
│   logo_setup.html
│   logo_sittax.html
│   index.html
│   README.md
│   teste.js
│
├───fonts/
│
├───img/
│
├───js
│       config.js
│       newpage.js
│       script.js
│
└───style
        style.css
````