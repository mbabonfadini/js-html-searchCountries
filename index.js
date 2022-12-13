document.getElementById('flag').style.setProperty('display', 'none','important')
function procurar(){
    let pais = document.getElementById('pais').value
    let finalurl = `https://restcountries.com/v3.1/name/${pais}?fullText=true`
    fetch(finalurl)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            document.getElementById('flag').style.setProperty('display', 'block','important')
            document.getElementById('flag').src = data[0].flags.svg
            document.getElementById('nomePais').innerHTML = data[0].name.common
            document.getElementById('capital').innerHTML = data[0].capital
            document.getElementById('cont').innerHTML = data[0].continents[0]
            document.getElementById('pop').innerHTML = data[0].population
        })
}