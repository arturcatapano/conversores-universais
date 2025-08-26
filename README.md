🌐 Conversores Universais
<p align="center">
Uma aplicação web de duas páginas que oferece ferramentas de conversão para temperatura e moedas, construída com tecnologias web puras e consumindo dados de uma API em tempo real.
</p>

<p align="center">
<a href="#-sobre-o-projeto">Sobre</a> •
<a href="#-funcionalidades">Funcionalidades</a> •
<a href="#-tecnologias-utilizadas">Tecnologias</a> •
<a href="#-como-executar">Como Executar</a> •
<a href="#-destaque-do-código">Destaque do Código</a> •
<a href="#-contato">Contato</a>
</p>

💡 Sobre o Projeto
O Conversores Universais é um projeto de portfólio desenvolvido para demonstrar a criação de uma aplicação web multi-página com funcionalidades distintas e interativas. O objetivo foi construir uma ferramenta útil e com uma experiência de usuário limpa, utilizando apenas as tecnologias essenciais do front-end e integrando serviços externos via API.

A aplicação é dividida em duas seções principais:

Conversor de Temperatura: Permite conversões precisas entre Celsius (°C), Fahrenheit (°F) e Kelvin (K).

Conversor de Moedas: Realiza conversões entre Real (BRL), Dólar (USD), Euro (EUR) e Bitcoin (BTC), com cotações atualizadas em tempo real.

✨ Funcionalidades
[x] Navegação Multi-Página: Estrutura de site com cabeçalho e rodapé consistentes.

[x] Conversor de Temperatura: Lógica de cálculo implementada em JavaScript puro.

[x] Conversor de Moedas com API: Consome dados da API economia.awesomeapi.com.br para obter cotações atualizadas.

[x] Design Responsivo: Interface adaptável para uma boa experiência em desktops e dispositivos móveis.

[x] Feedback de Carregamento: O botão de conversão de moedas fica desabilitado até que as cotações da API sejam carregadas, melhorando a robustez da aplicação.

[x] Validação de Entrada: Garante que apenas valores numéricos sejam processados.

💻 Tecnologias Utilizadas
HTML5: Para a estrutura semântica e acessível do conteúdo.

CSS3: Utilização de Flexbox para criar layouts modernos e responsivos, além de variáveis CSS para um tema consistente.

JavaScript (ES6+): Para manipulação do DOM, lógica de conversão e chamadas assíncronas à API com fetch.

⚙️ Como Executar
Para executar este projeto, você precisará de um servidor local para que o navegador permita a chamada à API de moedas (devido à política de segurança CORS).

Clone o repositório:

git clone https://github.com/[SEU-USUARIO]/[SEU-REPOSITORIO].git

Navegue até a pasta do projeto:

cd [SEU-REPOSITORIO]

Inicie um servidor local:
A maneira mais fácil é usar a extensão Live Server no Visual Studio Code.

Clique com o botão direito no arquivo index.html.

Selecione "Open with Live Server".

A aplicação será aberta no seu navegador padrão e a funcionalidade de conversão de moedas estará ativa.

🧠 Destaque do Código
Um dos aspectos mais importantes do projeto é a busca e manipulação de dados externos. O conversor de moedas utiliza a API fetch do JavaScript para uma chamada assíncrona, garantindo que a página não trave enquanto espera a resposta da rede.

O botão de conversão é desabilitado durante o carregamento para prevenir erros e fornecer um feedback claro ao usuário.

// trecho de script-moedas.js

    document.addEventListener('DOMContentLoaded', () => {
    // ... seleção de elementos ...
    const convertBtn = document.getElementById('convert-currency-btn');

    // Desabilitar o formulário enquanto os dados não chegam
    convertBtn.disabled = true;
    convertBtn.textContent = 'Carregando cotações...';

    // Buscar as cotações da API assim que a página carregar
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // ... processamento dos dados ...
            
            // Habilita o formulário após o sucesso
            convertBtn.disabled = false;
            convertBtn.textContent = 'Converter';
        })
        .catch(error => {
            console.error("Erro ao buscar cotações:", error);
            apiInfo.textContent = 'Erro ao carregar cotações.';
            // Mantém o botão desabilitado em caso de erro
        });
    });

Esta abordagem demonstra uma preocupação com a experiência do usuário e a robustez da aplicação ao lidar com operações assíncronas.

👨‍💻 Contato
Artur Babberg Catapano
