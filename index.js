var myObject = {};

var myarray = [];

async function restCountries(endpoint, findelement) {

    const res = await fetch(endpoint);

    let data = await res.json();

    data.map(function (elements) {

        var key = elements[findelement];

        myObject[key] = elements;

    })

    console.log(myObject);

    myarray = Object.keys(myObject);

    console.log(myarray);

    for (let i = 0; i < myarray.length; i++) {

        var x = document.createElement("li");

        var y = document.createElement("button");

        var z = document.createTextNode(myarray[i]);

        y.appendChild(z);

        y.setAttribute("onclick", "myfun(" + i + ")");

        y.setAttribute("class", "btn btn-light btn-block");

        x.appendChild(y);

        document.getElementById("countrylist").appendChild(x);
    }


}

function myfun(x) {

    var resultCountry = myObject[myarray[x]];
    console.log(resultCountry)
    document.getElementById(" name").innerHTML = resultCountry.name;
    document.getElementById("domain").innerHTML = resultCountry.topLevelDomain;
    document.getElementById("capital").innerHTML = resultCountry.capital;
    document.getElementById("region").innerHTML = resultCountry.region;
    document.getElementById("subregion").innerHTML = resultCountry.subregion;
    document.getElementById("population").innerHTML = resultCountry.population;
    document.getElementById("latlong").innerHTML = resultCountry.latlng;
    document.getElementById("area").innerHTML = resultCountry.area;
    document.getElementById("timezones").innerHTML = resultCountry.timezones;
    document.getElementById("borders").innerHTML = resultCountry.borders;
    var flags = document.getElementById("flag");
    flags.setAttribute("src", resultCountry.flag);


}