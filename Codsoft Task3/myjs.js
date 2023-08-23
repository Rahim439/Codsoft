
        let currentInput = "";

        function updateInput(value) {
            const resultInput = document.getElementById("result");
            currentInput += value;
            resultInput.value = currentInput;
        }

        function appendNumber(number) {
            updateInput(number);
        }

        function appendOperator(operator) {
            updateInput(" " + operator + " ");
        }

        function appendDecimal() {
            if (!currentInput.includes('.')) {
                updateInput(".");
            }
        }

        function calculate() {
            const resultInput = document.getElementById("result");
            try {
                currentInput = eval(currentInput);
                resultInput.value = currentInput;
            } catch (error) {
                resultInput.value = "Error";
            }
        }

        function clearResult() {
            const resultInput = document.getElementById("result");
            resultInput.value = "";
            currentInput = "";
        }
    