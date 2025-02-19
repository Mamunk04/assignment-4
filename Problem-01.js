/*function signature */
function calculateVAT( price ) {
    if(typeof amount !== "number" || amount < 0 ){
        return "invalid"
    }
    const vatAmount = price * 7.5/100;
    return vatAmount
}

const amount = 1500;
const vat = calculateVAT(amount);c