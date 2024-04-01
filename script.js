var cities = ["faisalabad", "lahore", 'islamabad', "sheikhupura", 'burewala', 'karachi', 'kashmir'];
document.getElementById
("btn4").onclick=function(){
    var cite = prompt('enter your city name')
    cite.push(cite + ' is added in cities list')
    alert(cite )
}
document.getElementById("btn1").onclick=function(){
    alert('WELCOME TO SITE')
}
document.getElementById("btn2").onclick=function(){
    let result = prompt("PLEASS ENTER YOUR NAME")
    document.getElementById("output").innerHTML=result;
}
document.getElementById("btn3").onclick = function () {
    var city = prompt("Please enter a city name:");
    cities.push(city);
    alert(city + ' is added to the cities list');
};

document.getElementById("btn4").onclick = function () {
   
    output.innerHTML = "";

    for (var i = 0; i < cities.length; i++) {
        output.innerHTML += "City name: " + cities[i] + ' <br>';
    }
};
document.getElementById('btn5').onclick=function(){
    let result = "1 * 5 = 5 <br> 2 * 5 = 10 <br>3 * 5 = 15 <br>4 * 5 = 20 <br>5 * 5 = 25 <br>6 * 5 = 30 <br>7 * 5 = 35 <br>8 * 5 = 40 <br>9 * 5 = 45 <br>10 * 5 = 50 <br>"
document.getElementById('output').innerHTML=result;

}

