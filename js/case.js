// Btn-case-Plus
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberFiled = document.getElementById('case-number-filed');
    const caseNumberString = caseNumberFiled.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber+ 1;
    caseNumberFiled.value = newCaseNumber;
    const totalCaseElement = document.getElementById('total-case-amount');
    const totalCaseString = totalCaseElement.innerText;
    const CasePrice = 59;
    const totalCaseAmount = CasePrice*newCaseNumber;
    totalCaseElement.innerText = totalCaseAmount;
})
// btn-case-minus
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumberMinusFiled = document.getElementById('case-number-filed');
    const caseNumberMinusString = caseNumberMinusFiled.value;
    const previousCaseMinusNumber = parseInt(caseNumberMinusString);
    const newCaseMinus = previousCaseMinusNumber-1;
    if(newCaseMinus >=0){
        caseNumberMinusFiled.value = newCaseMinus; 
        const totalCaseElementMinus = document.getElementById('total-case-amount');
        const totalCaseMinusString = totalCaseElementMinus.innerText;
        const totalCaseMinus =parseInt(totalCaseElementMinus)
        const totalMinusPrice =newCaseMinus*59;
        // console.log(previousCaseMinusNumber);
        totalCaseElementMinus.innerText = totalMinusPrice;
    } 
})
