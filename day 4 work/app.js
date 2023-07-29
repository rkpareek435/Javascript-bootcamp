// JavaScript logic to calculate EMI
document.getElementById('emiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const principalAmount = parseFloat(document.getElementById('principalAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 12 / 100; // Monthly interest rate
    const loanTenure = parseFloat(document.getElementById('loanTenure').value);

    // Calculate EMI using the formula: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
    const numerator = principalAmount * interestRate * Math.pow(1 + interestRate, loanTenure);
    const denominator = Math.pow(1 + interestRate, loanTenure) - 1;
    const emi = numerator / denominator;

    // Create a DOM element to show the calculated EMI dynamically
    const resultDiv = document.getElementById('result');
    const emiParagraph = document.createElement('p');
    emiParagraph.textContent = `EMI: $${emi.toFixed(2)}`;

    // Check if a previous result exists and remove it before displaying the new result
    const previousResult = resultDiv.querySelector('p');
    if (previousResult) {
        resultDiv.removeChild(previousResult);
    }

    // Append the new result to the resultDiv
    resultDiv.appendChild(emiParagraph);
});