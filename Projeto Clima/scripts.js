 const key = "09f3d4edcb66b00649523e2f1ab61fd9";

function putDadosOnScreen(dados){
    document.querySelector(".city").innerHTML = "Clima em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".weather").innerHTML = dados.weather[0].description 
    document.querySelector(".moisture").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-weather").src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
console.log(dados)
}
async function searchCity(city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())

    putDadosOnScreen(dados)

}

 function clickOnButton() {
    const city =document.querySelector(".input-cidade").value;

    searchCity(city)
    
 }