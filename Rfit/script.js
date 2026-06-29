let day = 1;



function login(){

let name=document.getElementById("user").value;


alert("Welcome "+name+" to RFit 💪");


/*
Database can store this:

Firebase:
users{
 name,
 email,
 progress
}

*/

}





function pay(){


alert(

"Payment Started ₹5/day\n\nConnect Razorpay API for real payment"

);



/*

Real payment example:

Razorpay needs:

1. Backend server
2. API key
3. Order creation


*/

}





function getPlan(){


let weight=document.getElementById("weight").value;


let result="";


if(weight>80){


result=

"🥗 Weight Loss Plan\n\n"+
"Breakfast: Oats + Eggs\n"+
"Lunch: Rice + Dal + Vegetables\n"+
"Dinner: Protein meal\n\n"+
"Exercise: Walking + Strength training";


}

else{


result=

"🥗 Healthy Fitness Plan\n\n"+
"Fruits\nProtein\nVegetables\n"+
"30 min workout daily";


}



document.getElementById("plan").innerHTML=result;



}






function completeDay(){


day++;


document.getElementById("day").innerHTML=

"Day "+day+" Completed 🔥";


}





function chat(){



let msg=document.getElementById("message").value;



let reply="";


if(msg.includes("diet")){


reply="Trainer: Eat protein rich foods and avoid junk food";


}

else if(msg.includes("exercise")){


reply="Trainer: Do cardio + strength training";


}

else{


reply="Trainer: Keep going! You are improving 💪";


}




document.getElementById("reply").innerHTML=reply;



}