// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.

function rndNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var numberList = [];

var userNumber;

var timePass = 30;

var showTimer = document.getElementById("timer");

var userNumberList = [];

while(numberList.length < 5){

    var numberEl = rndNumber(1, 100);

    if(!numberList.includes(numberEl)){
        
        numberList.push(numberEl);
    }

}
alert(numberList)

console.log(numberList);

startTimer();

function startTimer (){
    
    var timer = setInterval(function(){
    
        timePass--;
        
         showTimer.innerHTML = timePass;
    
         if(timePass == 0){
            clearInterval(timer);
        }
        
    }, 1000)
}

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


setTimeout(insertNumber, 31000);

var pointCounter = 0;

 function insertNumber(){
     
    var counter = 1;

    var i = 0;

    while(i < 5){
        
        userNumber = parseInt(prompt("Inserisci il numero " + counter));

        if(numberList.includes(userNumber)){
            pointCounter++;
            userNumberList.push(userNumber);
            
        }

        counter++;

        i++;
        
    }

    console.log(numberList);

    console.log(userNumberList, pointCounter);
    
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

    var point = document.getElementById("point");
    var insNumber = document.getElementById("inser_number");
    var correctNumber = document.getElementById("correct_number");


    
    if (pointCounter == 5){
        
        point.innerHTML = `Punti totalizzati: ${pointCounter} HAI OTTENUTO IL MASSIMO!!!`;

    } else if (pointCounter == 0){
        point.innerHTML = `Punti totalizzati: ${pointCounter} HAI FATTO PENA!!!`;

    } else {
        point.innerHTML = `Punti totalizzati: ${pointCounter}`;

    }

    
    insNumber.innerHTML = `Hai indovinato i numeri: ${userNumberList}`;
    
    correctNumber.innerHTML = `I numeri erano: ${numberList}`;
 }







