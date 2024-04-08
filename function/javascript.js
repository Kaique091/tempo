

const key = "3a6bae70095c7c9983fe26a4553a5d46"



function colocarTela(dados) {

    document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".text-forecast").innerHTML = dados.weather[0].description;
    document.querySelector(".humidity").innerHTML = dados.main.humidity + "%";
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

    console.log(dados);
}



async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarTela(dados)
}



function clickonbutton() {
    const cidade = document.querySelector(".input-city").value

    buscarCidade(cidade)
}