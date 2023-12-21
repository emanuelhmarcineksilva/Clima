

const button = document.querySelector(".search");

const key = "76b19c5ce07af87452662d52bd95ce4f"

// function dadosNaTela
function dataOnScreen(dados) {
    if (dados.name == undefined) {
        document.querySelector(".title-city").innerHTML = "Não encontrado";
    } else {
        console.log(dados)
        document.querySelector(".title-city").innerHTML = "Tempo em " + dados.name;
    }


    // O código "math.floor()" ele arredonda números com vírgula.
    document.querySelector(".temperature").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".climate").innerHTML = dados.weather[0].description;
    document.querySelector(".moisture").innerHTML = "humidade: " + dados.main.humidity + "%";
    document.querySelector(".img-climate").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

// Colocamos "async" na frente de um "function" quando essa "function" vai acessar um servidor.
async function searchCity(city) {

    // O "waiat" é um comando para que o javaScript espere até ter uma respoata do servidor.
    // O "fetch" ajuda a acessar o servidor.
    // No código estamos usando crazes ' `` ' para podermos colocar o texto e junto dele variaveis dentro, atrazes do ${}.
    // O "then" ele vai fazer alguma coisa com a resposta que foi dada e quardar em "dados" (a const), no caso o que vai fazer é trasformar em "json".
    // O código "&lang=pt_br" deixa as informaçõesque estão vindo inglês em português.
    // o código "units=metric" transforma a temperatuda de fahrenheit para celsius.
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    dataOnScreen(dados);
}

function clickButton() {
    const city = document.querySelector(".input-city").value;

    // Colocar o "city" manda os dados dentro da const "city" para a função chamada.
    searchCity(city);
}

