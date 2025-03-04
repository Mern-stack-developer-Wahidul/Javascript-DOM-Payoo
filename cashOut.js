document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const inputCashOutPin = getInputFieldValueById('input-cash-out-pin')

    if(isNaN(cashOut)){
        alert('Failed to cash out.');
        return;
    }
    if(inputCashOutPin === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class= "text-2xl font-bold"> Cash Out</h4>
        <p>${cashOut} withdraw. New Balance ${newBalance}</p>`
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('no money for you ....DGM')
    }
})