console.log('hello')

let startingDate = document.getElementById('starting-date');
let endingdate = document.getElementById('end-date');
let priceNight = document.getElementById('price-hotel').innerHTML;
let totalDays = document.getElementById('dayTotal');
let totalPrice = document.getElementById('priceTotal');


console.log(priceNight);
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

if (month < 10) {
    month = "0" + month;
}

let day = date.getDate();

if (day < 10) {
    day = "0" + day;
}
let newdate = 0;


// let currentdate= year +"-"+month+"-"+day;
// console.log(currentdate)



// date arragement;.....................here
let curr = new Date();
let week = [];
for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;

    if (curr.getDay() === 0) {
        first = curr.getDate() - 6;
    }
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    week.push(day);
};
console.log(week[6]);
let dateNow = startingDate.value = week[0];
let lastDate = endingdate.value = week[6];

//let currentdate=week[0];
let diffDays = 7;
totalDays.innerHTML = diffDays + "Night"
totalPrice.innerHTML = parseInt(diffDays * priceNight);
// set days ...........here

endingdate.addEventListener('change', function () {
    let gate_lastDate = document.getElementById('end-date').value;

    //let NewDateLast=new Date(gate_lastDate)

    let gatye_startDate = document.getElementById('starting-date').value;
    var oneDay = 24 * 60 * 60 * 1000
    //var fromDate = NewDateLast.getDate();
    var date1 = new Date(gate_lastDate);
    var date2 = new Date(gatye_startDate);
    // var diffDays = date2.getDate() - date1.getDate();
    diffDays = Math.round(Math.abs((date2.getTime() - date1.getTime()) / (oneDay)));
    //alert(diffDays)
    // set days ...........here
    totalDays.innerHTML = diffDays + "Night";
    totalPrice.innerHTML = parseInt(diffDays * priceNight);
}

)




// let start adding memeber
let drowpDownModal = document.getElementById('modalView');

function ShowModal() {

    if (drowpDownModal.style.display !== 'none') {
        drowpDownModal.style.display = 'none';
    }
    else {
        drowpDownModal.style.display = 'block';
    }

}

let total = document.getElementById('total-member');
console.log(total);
let member = document.getElementById('member');
let Child = document.getElementById('childTotal');
console.log(member);
let count = 1;
let childGuest = 0;


function addMemberPlus() {
    count += 1
    member.innerHTML = count;
    if (count > 1) {
        total.innerHTML = `Adult ${count}`;
    }

}

function minusMemberPlus() {
    if (count > 1) {
        count -= 1;
        member.innerHTML = count;
        total.innerHTML = `Adult ${count}`;
    } else {
        total.innerHTML = '1 guest'
        alert(message = "1 adult require")
        return
    }
}
// child setting ..................here

function addChildPlus() {
    childGuest += 1;
    Child.innerHTML = " ," + "Child" + childGuest;
}
function minusChildPlus() {
    if (childGuest > 0) {
        childGuest -= 1;
        Child.innerHTML = "," + "Child" + childGuest;
    } else {
        Child.innerHTML = "," + "child" + childGuest;
        return;
    }
}



// 
