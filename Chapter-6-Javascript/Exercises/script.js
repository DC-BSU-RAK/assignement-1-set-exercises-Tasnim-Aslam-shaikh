// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const priceInput = document.getElementById('price');
    const litersInput = document.getElementById('liters');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDisplay = document.getElementById('result');
    
    // Calculate total cost when button is clicked
    calculateBtn.addEventListener('click', function() {
        // Get input values and convert to numbers
        const pricePerLiter = parseFloat(priceInput.value);
        const litersPurchased = parseFloat(litersInput.value);
        
        // Validate inputs
        if (isNaN(pricePerLiter)) {  // Fixed: Added missing closing parenthesis
            alert('Please enter a valid price per liter');
            return;
        }
        
        if (isNaN(litersPurchased)) {  // Fixed: Added missing closing parenthesis
            alert('Please enter a valid number of liters');
            return;
        }
        
        // Calculate total cost
        const totalCost = pricePerLiter * litersPurchased;
        
        // Display result with 2 decimal places
        resultDisplay.textContent = `Total cost: £${totalCost.toFixed(2)}`;
    });
    
    // Optional: Calculate automatically when inputs change
    [priceInput, litersInput].forEach(input => {
        input.addEventListener('input', function() {
            const pricePerLiter = parseFloat(priceInput.value);
            const litersPurchased = parseFloat(litersInput.value);
            
            if (!isNaN(pricePerLiter) && !isNaN(litersPurchased)) {
                const totalCost = pricePerLiter * litersPurchased;
                resultDisplay.textContent = `Total cost: £${totalCost.toFixed(2)}`;
            }
        });
    });
});