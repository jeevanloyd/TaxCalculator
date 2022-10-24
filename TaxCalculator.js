function calculateTax() {
    var annualIncome = +document.getElementById("annualIncome").value;
    if (annualIncome === "" || isNaN(annualIncome)) annualIncome = 0;
    const superAnnuantion = 10.5;
    let amountAfterTax = 0;
    let incomeAfterSuper = annualIncome / superAnnuantion;

    let totalIncome = annualIncome - incomeAfterSuper;

    if (totalIncome < 18200) {
        amountAfterTax = 0
    }
    else if (totalIncome <= 37000) {
        amountAfterTax = (totalIncome - 18200) * 0.19;
    }
    else if (totalIncome <= 90000) {
        amountAfterTax = parseFloat((((totalIncome - 37000) * 0.325) + 3572).toFixed(2));
    }
    else if (totalIncome <= 180000) {
        amountAfterTax = parseFloat((((totalIncome - 90000) * 0.37) + 20797).toFixed(2));
    }
    else {
        amountAfterTax = parseFloat((((totalIncome - 180000) * 0.45) + 54097).toFixed(2));
    }
    document.getElementById("totalTax").textContent = amountAfterTax;
}

function calculateSuper() {
    var annIncome = +document.getElementById("annualIncome").value;
    const superAnnuantion = 10.5;
    if (annIncome === "" || isNaN(annIncome)) annIncome = 0;
    let annualSuper = parseFloat(((annIncome / superAnnuantion).toFixed(2)));
    document.getElementById("total_Super").textContent = annualSuper;
}

