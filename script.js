let userName = prompt("Please Enter your name to visit our website? ") 
window.onload = function(){
   let message ="Have a Good Day"
// //    let firstName = prompt("Please Enter Your First Name?")
// //    let lastName = prompt("Please Enter Your Last Name?")
// //    let fullName = firstName +" "+ lastName
   let emoji = ('&#10024;')
   document.getElementById("userName").innerHTML = message + " " + userName+ emoji   // Emoji tranformation //
}
 // -----------------Clear Output ----------------//
 document.getElementById('clearOutputButton').onclick = function(){
   document.getElementById('output').innerHTML = ""
 }
  // -----------------Clear Input ----------------//
  function clearInput(){
   document.getElementById('inputText').value = ""
 }
 // -----------------Input ----------------//
 function inputValue(){
   return document.getElementById('inputText').value;
 }
  // -----------------Round A Number----------------//
  function roundANumber(){
    // Example  //
  //  var num1 = 12.48
  //  var num2 = 13.4555
  //  var num3 = 36.57
  //  var totalPrice = num1 + num2 + num3
  //  console.log(totalPrice)
  //  var exactTotalPrice = Math.round(totalPrice)
  //  console.log(exactTotalPrice)
  //  console.log(Math.round(15.45)) 
  //  console.log(Math.round(24.57))
  //  console.log(Math.round(36.50))
  // console.log(Math.round(-15.45))
  //  console.log(Math.ceil(-24.57))
  //  console.log(Math.floor(-36.50))

  let number = document.getElementById('inputText').value;
  if (!number){
    Toastify({                                                          /// Toastify ///
      text: "Please enter a floating point numbers...",
      duration: 3000,                                    //milisec m ha duration   // 3000 = 3 sec ,,, 4000 = 4 sec
      // destination: "https://github.com/apvarun/toastify-js",
      // newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      // onClick: function(){} // Callback after click
    }).showToast();
  }
  let roundTheNumber = Math.round(number)
  let html = '<h1 class="text-primarytheme mb-0">'+ roundTheNumber + '</h1>'
  document.getElementById('output').innerHTML = html
  }
  // -----------------Ceil A Number----------------//
  function ceilANumber(){
    let number = document.getElementById('inputText').value;
  if (!number){
    alert('Please enter a floating point numbers...')
    return
  }
  let ceilTheNumber = Math.ceil(number)
  let html = '<h1 class="text-primarytheme mb-0">'+ ceilTheNumber + '</h1>'
  document.getElementById('output').innerHTML = html
  }
  // -----------------Floor A Number----------------//
  function floorANumber(){
    let number = document.getElementById('inputText').value;
  if (!number){
    alert('Please enter a floating point numbers...')
    return
  }
  let floorTheNumber = Math.floor(number)
  let html = '<h1 class="text-primarytheme mb-0">'+ floorTheNumber + '</h1>'
  document.getElementById('output').innerHTML = html
  }
  // -----------------Generate A Random Number----------------//
  function randomNumber(){
    let generateNumber = Math.random()                     //generate 16 17 word digit number
    let html = '<h1 class="text-primarytheme mb-0">'+ generateNumber  + '</h1>'
    document.getElementById('output').innerHTML = html
    }
  //-----------------------Throw A Dice----------------------//
  function Dice(){
    let randomNumber = Math.random()
    randomNumber = (randomNumber * 6 ) + 1
    let dice = Math.floor(randomNumber)
    let html = '<h1 class="text-primarytheme mb-0">'+ dice  + '</h1><span>Generating a random number from 1 to 6</span>'
    document.getElementById('output').innerHTML = html
  }
  //-----------------------Generate A Strong Password----------------------//
function generateAStrongPassword(){
  let length = document.getElementById('inputText').value
  let randomString = ""
  let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz"
  let numbers = '0123456789'
  let symbols = '`~@#$%^&*-_=+/?.,'
  let posssibleString = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols
  // console.log(posssibleString.length)

  let limit = length
  for (let i = 0;i < limit ; i++){
    let randomNumber = Math.random()
    //console.log(randomString * 80)
    randomString += posssibleString.charAt(Math.floor(randomNumber * posssibleString.length ))
  }
  let html = '<span class="text-primarytheme mb-0">'+ randomString + '</span><br><span>Generating a Strong password & random string and the length is ' + limit + '.</span>'
    document.getElementById('output').innerHTML = html
}
  //-----------------------Converting Strings----------------------//
function convertingStrings(){
  let num = document.getElementById('inputText').value;
  num = Number(num) 
  num = num.toFixed(2)           //function tofixed sirf number datatype pr chalta ha // lakin datatype string hi ho gi
  num = Number(num) 
  if(num == 0){
    alert("Enter your string to convert in number!")
  } else{
  document.getElementById('output').innerHTML = "<div>num = " +num +"</div>" 
  + "<div>Datatype is = " + (typeof num) + "</div>"
  }
}
 //-----------------------Controlling Length----------------------//
function controllingLength(){
let num = inputValue()
if (!num){
  alert('Please type something to  control the length of string....')
  return
 }
// console.log(typeof num)
num = Number(num) 

let limit = prompt("Please enter the limit for decimal number...")
if(limit == 0 || limit == null){
  alert("Enter your limit please...")
  return
}
num = num.toFixed(limit);

// num = num.toFixed(2);
num = Number(num);
if (num == 0) {
  alert("Enter your string to convert in number!");
} else {
  document.getElementById("output").innerHTML =
    "<div>num = " +
    num +
    "</div>" +
    "<div>Datatype is = " +
    typeof num +
    "</div>";
}

}
 //------------------------Calculate GST------------------------//
function calculateGST(){
 let cost = inputValue()
     if (!cost){
      alert('Please type something to calculate')
      return
     }
 cost = Number(cost)
 let textInput = +prompt('Enter your tax')
 let tax = cost * (textInput / 100)
 let totalCost = cost + tax
 totalCost = Math.round(totalCost)
 document.getElementById('output').innerHTML = 'Your bill = <span class=" text-primaryTheme fw-bold fw-18">' + cost + '</span>'
 document.getElementById('output').innerHTML += '<br> Tax' + textInput + '% = <span class="text-danger fw-bold fw-18" >' + tax.toFixed(2) + '</span>'
 document.getElementById('output').innerHTML += '<br> Total amount icluding tax = <span class=" text-success fw-bold fw-18">' + totalCost + '</span>'

}

  
