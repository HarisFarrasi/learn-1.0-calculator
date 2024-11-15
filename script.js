function appendNumber(number) {
    document.getElementById('result').value += number;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function negate() {
    let resultElement = document.getElementById('result');
    if (resultElement.value) {
        if (resultElement.value.startsWith('-')) {
            resultElement.value = resultElement.value.substring(1);
        } else {
            resultElement.value = '-' + resultElement.value;
        }
    }
}

function appendFunction(func) {
    let resultElement = document.getElementById('result');
    resultElement.value += func + '(';
}

function calculateResult() {
    try {
        let resultExpression = document.getElementById('result').value;
        
        // Menangani tanda pangkat (^) dengan mengganti ke operator ** untuk evaluasi
        resultExpression = resultExpression.replace(/\^/g, '**');
        
        let result = eval(resultExpression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
