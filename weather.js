const apiKey="3704a1cb43b8351068d3691abd9e348c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const data=await fetch(apiUrl +city+ `&appid=${apiKey}`);

    

    if(data.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var finalData=await data.json();
        document.querySelector('.city').innerHTML=finalData.name;
    document.querySelector('.t').innerHTML=Math.round(finalData.main.temp)+"<span>&#176</span>c";
    document.querySelector('.h').innerHTML=finalData.main.humidity +"%";
    document.querySelector('.k').innerHTML=finalData.wind.speed+"km/h";

    if(finalData.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";

    }
    else if(finalData.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
        
    }
    else if(finalData.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
        
    }
    else if(finalData.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
        
    }
    else if(finalData.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
        
    }
    document.querySelector('.weather').style.display="block";
    document.querySelector(".error").style.display="none";

    }
    
    
    
}
checkWeather()


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})