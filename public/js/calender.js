console.log('hello')

let startingDate=document.getElementById('starting-date');
let endingdate= document.getElementById('end-date');
let date =  new Date();
let year= date.getFullYear();
let month= date.getMonth()+1;

if(month<10){
    month="0"+month;
}

let day= date.getDate();
let onlyLastDate= date.getDate()+7;
if(day<10){
    day="0"+day;
}
let newdate=0;

let currentdate= year +"-"+month+"-"+day;
console.log(currentdate)


let dateNow= startingDate.value=currentdate;


// let start adding memeber
let drowpDownModal= document.getElementById('modalView');

function ShowModal(){
    
    if (drowpDownModal.style.display !== 'none') {
        drowpDownModal.style.display = 'none';
    }
    else {
        drowpDownModal.style.display = 'block';
    }

}

let total = document.getElementById('total-member');
console.log(total);
let member= document.getElementById('member');
let Child= document.getElementById('childTotal');
console.log(member);
let count=1;
let childGuest=0;


    function addMemberPlus(){
        count+=1
        member.innerHTML=count;
        if(count>1){
            total.innerHTML=`Adult ${count}`;
         }
       
     }
     
     function minusMemberPlus(){
         if(count>1){
             count-=1;
             member.innerHTML=count;
             total.innerHTML=`Adult ${count}`;
         }else{
            total.innerHTML='1 guest'
             alert(message="1 adult require")
             return
         }
     }
    // child setting ..................here

    function addChildPlus(){
        childGuest+=1;
        Child.innerHTML=" ,"+"Child"+childGuest;
    }
    function minusChildPlus(){
        if(childGuest>0){
            childGuest-=1;
            Child.innerHTML=","+"Child"+childGuest;
        }else{
            Child.innerHTML=","+"child"+childGuest;
            return;
        }
    }

     

