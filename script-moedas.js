document.addEventListener('DOMContentLoaded', () => {
    const inputAmount = document.getElementById('input-amount');
    const selectFromCurrency = document.getElementById('select-from-currency');
    const outputAmount = document.getElementById('output-amount');
    const selectToCurrency = document.getElementById('select-to-currency');
    const convertBtn = document.getElementById('convert-currency-btn');
    const apiInfo = document.querySelector('.api-info');

    // API para buscar as cotações
    const apiUrl = 'https://economia.awesomeapi.com.br/json/all';

    let rates = {};

    // --- INÍCIO DAS MUDANÇAS ---
    // Desabilitar o formulário enquanto os dados não chegam
    convertBtn.disabled = true;
    convertBtn.textContent = 'Carregando cotações...';

    // Buscar as cotações da API assim que a página carregar
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) { // Verifica se a resposta da API foi um erro (ex: 404, 500)
                throw new Error('Falha na resposta da rede.');
            }
            return response.json();
        })
        .then(data => {
            // A API nos dá as cotações em relação ao Real (BRL)
            rates['BRL'] = 1; // O Real é a nossa base
            rates['USD'] = parseFloat(data.USD.ask);
            rates['EUR'] = parseFloat(data.EUR.ask);
            rates['BTC'] = parseFloat(data.BTC.ask) * 1000; // API retorna valor de 1 BTC em milhares de BRL
            
            console.log("Cotações carregadas com sucesso:", rates);

            // Habilita o formulário
            convertBtn.disabled = false;
            convertBtn.textContent = 'Converter';
            apiInfo.textContent = `Cotação de ${data.USD.name} atualizada em ${new Date(data.USD.create_date).toLocaleDateString('pt-BR')}`;
        })
        .catch(error => {
            console.error("Erro ao buscar cotações:", error);
            apiInfo.textContent = 'Erro ao carregar cotações. Tente mais tarde.';
            convertBtn.textContent = 'Erro';
            // Mantém o botão desabilitado
        });
    // --- FIM DAS MUDANÇAS ---


    function convertCurrency() {
        if (Object.keys(rates).length === 0) {
            alert("As cotações ainda não foram carregadas. Por favor, aguarde.");
            return;
        }

        const fromCurrency = selectFromCurrency.value;
        const toCurrency = selectToCurrency.value;
        const amount = parseFloat(inputAmount.value);

        if (isNaN(amount)) {
            alert("Por favor, insira um valor numérico.");
            return;
        }
        
        const fromRate = rates[fromCurrency];
        const toRate = rates[toCurrency];

        // 1. Converter o valor de entrada para Reais (nossa base)
        const valueInBRL = amount * fromRate;

        // 2. Converter de Reais para a moeda de destino
        const finalResult = valueInBRL / toRate;
        
        outputAmount.value = formatCurrency(finalResult, toCurrency);
    }
    
    function formatCurrency(value, currency) {
        if (currency === 'BTC') {
            return value.toFixed(8); // Bitcoin tem mais casas decimais
        }
        // Usando a API de internacionalização do JS para formatar moedas
        return new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    }

    convertBtn.addEventListener('click', convertCurrency);
});