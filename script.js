function calculateTip(event) {
    event.preventDefault();
    
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    
    if (isNaN(subtotal) || isNaN(tipPercentage) || subtotal < 0 || tipPercentage < 0) {
        document.getElementById('result').innerHTML = '<p style="color: red;">Por favor, ingrese valores válidos.</p>';
        return;
    }
    
    const tipAmount = (subtotal * tipPercentage) / 100;
    const totalWithTip = subtotal + tipAmount;
    
    document.getElementById('result').innerHTML = `
        <p>Propina: $${tipAmount.toFixed(2)}</p>
        <p>Total con propina: $${totalWithTip.toFixed(2)}</p>
    `;
}