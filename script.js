
// date construction in DOM

// create the input element (date)
// create a div element
var pdiv = document.createElement('div');
pdiv.setAttribute('style', 'padding-top:20px');
pdiv.setAttribute('class', 'container');

// create a date input field
var datelem = document.createElement('input');
datelem.setAttribute('type', 'date');
datelem.setAttribute('id', 'dob');
datelem.setAttribute('name', 'dob');

pdiv.appendChild(datelem);

// create a button element
var button = document.createElement('button');
button.innerHTML = "display data";
button.setAttribute('class', 'btn btn-primary');
button.setAttribute('style', 'margin-left:10px');
button.addEventListener('click', calculate);

pdiv.appendChild(button);

// display the data in html
var dd = document.createElement('div');

dd.setAttribute('id', 'display');
pdiv.append(dd);

function calculate() {
    var input = document.getElementById('dob').value;
    console.log(input);
    // whether my inpute is a valid or not..??
    if (Date.parse(input)) {

        // standard representation
        var inputdate = new Date(input);
        console.log(inputdate);

        // todays date
        var currentdate = new Date();
        console.log(currentdate);

        var milliseconddiff = parseInt(currentdate.getTime()) - parseInt(inputdate.getTime());
        // console.log(parseInt(currentdate.getMilliseconds()));
        // console.log(parseInt(inputdate.getMilliseconds()));
        console.log(milliseconddiff);

        var secondsdiff = mathfloor(milliseconddiff, 1000);
        console.log(secondsdiff);

        var minutediff = mathfloor(secondsdiff, 60);
        console.log(minutediff);

        var hoursdiff = mathfloor(minutediff, 60);
        console.log(hoursdiff);

        var daydiff = mathfloor(hoursdiff, 24);
        console.log(daydiff);

        var yeardiff = getyear(inputdate, currentdate);
        console.log(yeardiff);

        var monthdiff = getmonth(inputdate, currentdate);
        console.log(monthdiff);

        dd.innerHTML = `given input date is: ${inputdate} <br>
        year: ${yeardiff} <br>
        month: ${monthdiff} <br>
        day: ${daydiff} <br>
        hours: ${hoursdiff} <br>
        minute: ${minutediff} <br>
        seconds: ${secondsdiff} <br>
        milliseconds: ${milliseconddiff}`;

    }

    else {
        dd.innerHTML = "invalid date";

    }

}

function mathfloor(value1, value2) {
    // console.log(value1);
    // console.log(value2);
    return Math.floor(value1 / value2);


}

function getyear(value1, value2) {
    var date1 = new Date(value1);
    var date2 = new Date(value2);
    // console.log(date1);
    // console.log(date2);
    // console.log(date2.getFullYear() - date1.getFullYear);
    return date2.getFullYear() - date1.getFullYear();

}

function getmonth(value1, value2) {
    var year = getyear(value1, value2);
    var month = (year * 12) + (value2.getMonth() - value1.getMonth());
    return month;
}

document.body.append(pdiv);
