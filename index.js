 let api = "https://v6.exchangerate-api.com/v6/1389b4806f75f0d3b7546203/latest/USD"; 
        let formCurrencyDropdown = document.getElementById("from-currency");
        let toCurrencyDropdown = document.getElementById("to-currency");
        let op = document.getElementById("op");
        op.innerHTML = "Output"
        let currencyArr = ["AED", "EUR", "INA", "LER", "PKR", "USD"];
        currencyArr.forEach((curency)=> {
            let option = document.createElement("option");
            option.value = curency;
            option.innerHTML = curency;
            formCurrencyDropdown.appendChild(option);
        })

        currencyArr.forEach((curency)=> {
            let option = document.createElement("option");
            option.value = curency;
            option.innerHTML = curency;
            toCurrencyDropdown.appendChild(option);
        })

        formCurrencyDropdown.value="INR";
        toCurrencyDropdown.value="USD"

        function convertCurrency() {
            fetch(api)
            .then(response =>response.json())
            .then(data=> {
            let fromCurr = document.getElementById("from-currency").value; 
            let toCurr = document.getElementById("to-currency").value;
            let fromCurreRate = data.conversion_rates [fromCurr];
            let toCurreRate = data.conversion_rates[toCurr];
            let amount = document.getElementById("amount").value;
            if(amount != ""){
                let convertedAmount = (amount/fromCurreRate)*toCurreRate;
                op.innerHTML = `${amount} ${fromCurr} = ${convertedAmount.toFixed(2)} ${toCurr}`
            }
            else{
                alert("Enter an amount");
            }
            })
        }