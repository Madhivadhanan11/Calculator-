
        let inactivityTimer;

        function resetInactivityTimer() {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(disableCalculator, 10000); // 10 seconds of inactivity
        }

        function disableCalculator() {
            document.getElementById("display").disabled = true;
            document.querySelectorAll("button").forEach(button => button.disabled = true);
        }

        function enableCalculator() {
            document.getElementById("display").disabled = false;
            document.querySelectorAll("button").forEach(button => button.disabled = false);
            resetInactivityTimer();
        }

        function appendValue(value) {
            document.getElementById("display").value += value;
            resetInactivityTimer();
        }

        function clearDisplay() {
            document.getElementById("display").value = "";
            resetInactivityTimer();
        }

        function calculateResult() {
            try {
                document.getElementById("display").value = eval(document.getElementById("display").value);
            } catch {
                document.getElementById("display").value = "Error";
            }
            resetInactivityTimer();
        }

        document.body.addEventListener("mousemove", enableCalculator);
        document.body.addEventListener("keydown", enableCalculator);
        resetInactivityTimer();