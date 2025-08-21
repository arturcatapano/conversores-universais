document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.getElementById('input-value');
    const selectFrom = document.getElementById('select-from');
    const outputValue = document.getElementById('output-value');
    const selectTo = document.getElementById('select-to');
    const convertBtn = document.getElementById('convert-btn');

    convertBtn.addEventListener('click', () => {
        const fromUnit = selectFrom.value;
        const toUnit = selectTo.value;
        const value = parseFloat(inputValue.value);

        if (isNaN(value)) {
            alert("Por favor, insira um número válido.");
            outputValue.value = "";
            return;
        }

        let valueInCelsius;
        switch (fromUnit) {
            case 'celsius':
                valueInCelsius = value;
                break;
            case 'fahrenheit':
                valueInCelsius = (value - 32) * 5 / 9;
                break;
            case 'kelvin':
                valueInCelsius = value - 273.15;
                break;
        }

        let result;
        switch (toUnit) {
            case 'celsius':
                result = valueInCelsius;
                break;
            case 'fahrenheit':
                result = (valueInCelsius * 9 / 5) + 32;
                break;
            case 'kelvin':
                result = valueInCelsius + 273.15;
                break;
        }

        outputValue.value = result.toFixed(2);
    });
});