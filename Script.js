<script>
    function gerarFibonacci() {
        let fib = [0, 1]; // Iniciando a sequência com os dois primeiros números
        let resultadoDiv = document.getElementById("resultado");

        // Gerando os 10 primeiros números da sequência
        for (let i = 2; i < 10; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        // Exibindo os números no HTML
        resultadoDiv.innerHTML = "Os 10 primeiros números da sequência de Fibonacci são: <br>" + fib.join(', ');
    }
</script>
