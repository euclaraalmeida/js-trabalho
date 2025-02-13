document.addEventListener("DOMContentLoaded", function () {
    const cepInput = document.getElementById("cep");
    const cepError = document.getElementById("cepError");
    const streetInput = document.getElementById("street");
    const neighborhoodInput = document.getElementById("neighborhood");
    const stateInput = document.getElementById("state");
    const cityInput = document.getElementById("city");

    async function procurarCep(cep) {
        try {
            const response = await fetch(
                `https://viacep.com.br/ws/${cep}/json/`
            );

            const dados = await response.json();

            if (dados.erro) {
                throw new Error("CEP não encontrado.");
            }

            return dados;
        } catch (erro) {
            return null;
        }
    }

    async function preencherEndereco() {
        let cep = cepInput.value.replace(/\D/g, "");

        if (cep.length !== 8) {
            cepError.classList.remove("hidden");
            limparCampos();
            return;
        }

        cepError.classList.add("hidden");

        const dados = await procurarCep(cep);

        if (dados) {
            streetInput.value = dados.logradouro || "";
            neighborhoodInput.value = dados.bairro || "";
            stateInput.value = dados.uf || "";
            cityInput.value = dados.localidade || "";
        } else {
            cepError.classList.remove("hidden");
            limparCampos();
        }
    }

    function limparCampos() {
        streetInput.value = "";
        neighborhoodInput.value = "";
        stateInput.value = "";
        cityInput.value = "";
    }

    cepInput.addEventListener("input", function () {
        preencherEndereco();
    });
});
