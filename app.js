

//Assignment#21-25  Q1
// var a = prompt("What is your first name? ");
// var b = prompt("What is your last name? ");
// var c = a+ " " +b;
// document.write("Welcome " + c + " to my site");

//Assignment#21-25  Q2
// var a = prompt("What is your favourite mobile?");
// document.write(a);
// var b = a.length;
// document.write("<br>");
// document.write("String length: " + b);

//Assignemnt#21-25  Q3
// var a = "Pakistani";
// document.write("String: " + a);
// document.write("<br>");
// var b = a.indexOf("n");
// document.write("Index of n is: " + b);


//Assignment#21-25  Q4
// var a = "Hello World";
// document.write("String: "+a + "<br>");
// var b = a.indexOf("l",1);
// document.write("Last index of l: " + b);


//Assignment#21-25  Q5
// var a = "Pakistani";
// document.write("String: "+a+ "<br>");
// var b = a.charAt(3)
// document.write("Character at index 3: "+b);


//Assignmrnt#21-25  Q6
// var a = prompt("What is your first name? ");
// var b = prompt("What is your last name? ");
// document.write("Welcome" + a.concat(b));


//Assignment#21-25  Q7
// var a = "Hyderabad";
// document.write(a+ "<br>");
// var b = a.replace("Hyder","Islam");
// document.write(b);



//Assignment#21-25  Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var a = message.replace("and","&");
// document.write(a);


//Assignment#21-25  Q9
// var a = "432";
// document.write("Value" +a+ "<br>"+ "Type: String" + "<br>");
// var b = parseInt(a);
// document.write("Value" +b+ "<br>" + "Type: Number");


//Assignment#21-25  Q10
// var a = prompt("Input please");
// document.write(a+"<br>");
// var b = a.toUpperCase();
// document.write(b);


//Assignment#21-25  Q11
// var a = prompt("input");
// document.write("User Input: "+a+ "<br>");
// var b = a.slice(0,1);
// var c = b.toUpperCase();
// var d = a.slice(1);
// document.write("Titled: "+c+d);



//Assignment#21-25  Q12
// var a = 33.36;
// document.write("Number: "+a+ "<br>");
// var b = 3336;
// var c = b.toString();
// document.write("String: "+c);


//Assignment#21-25  Q13
// var a =prompt("Username");
// if(a.includes("@",",","!",".")){
//     alert("Please enter a valid username");
// }
// else{
//     alert("perfect");
// }



//Assigment#21-25  Q14
// var a = prompt("Welcome to the bakery. What would you like to oder sir/ma'am?");
// a= a.toUpperCase();
// var b=["CAKE","APPLE PIE","COOKIE", "CHIPS","PATTIES"];
// var index = a.indexOf(a);
// for(var i=0; i<b.length; i++){
//     if(b[i]===a){
//         alert(a+ " is available at" + index);
        
//     }
//     else if(b[i !=a]){
//         alert("We are sorry" + a + "is not available");
//     }
// }



//Assignment#21-25  Q15
// var a = prompt("Enter password");


//Assignment#21-25  Q16
// var university = "University of Karach";
// var a = university.split("").join("<br>");
//document.write(a);


//Assignment#21-25  Q17
// var a = prompt("Input something and see te magic");
// document.write("User Input: "+ a+"<br>");
// var b = a.substring(a.length-1);
// document.write("Last Character of user input: " + b);


//Assignemnt#21-25  Q18
// var a = "The quick brown fox jumps over the lazy dog";
// document.write("String: "+a+"<br>");
// var b = (a.match(/the/g)).length;
// document.write("There are "+ b + "Occurence(s) of The in the string");



//Assignment#26-30  Q1
// var a = prompt("Enter a decimmal number");
// document.write("Number: "+a+"<br>");
// var b = Math.round(a);
// document.write("rounded number: "+b+"<br>");
// var c= Math.floor(a);
// document.write("Floor: "+c+"<br>");
// var d = Math.ceil(a);
// document.write("Ceil: "+d);


//Assignment#26-30  Q2
// var a = prompt("Enter a negative float number");
// document.write("Number: "+a+"<br>");
// var b = Math.round(a);
// document.write("rounded number: "+b+"<br>");
// var c= Math.floor(a);
// document.write("Floor: "+c+"<br>");
// var d = Math.ceil(a);
// document.write("Ceil: "+d);


//Assignment#26-30  Q3
// var a = prompt("Enter a number: ");
// var b = Math.abs(a);
// document.write("The absolute value of " + a+"is "+b);



//Assignment#26-30  Q4
// var dice = Math.floor( Math.random() * 6 ) +1;
// document.write("Random dice value: " + dice);



//Assignment#26-30  Q5
// if (Math.random() < 0.5){
//     document.write("Random coin value: Heads");
//     }else{
//     System.out.println("Random coin value: Tails");
//     }



//Assignment#26-30  Q6
// function randomNumber(min, max) {  
//     return Math.floor(Math.random() * (max - min) + min); 
// }  
  
// document.write("Random Number between 1 and 100: ") 
// document.write( randomNumber(1, 100) );  



//Assignment#26-30  Q7
// var a = prompt("Enter your weight in  kilograms");
// document.write("Your wieght is: "+a);


//Assignment#26-30  Q8
// function randomNumber(min, max) {  
//         return Math.floor(Math.random() * (max - min) + min); 
//     }  
//     var a = prompt("Enter a number between 1-10");
//     if(a==randomNumber){
//         alert('Congradulations you have entered the secret stored number');
//     }else{
//         alert('Try again');
//     }
      



//Assignment#31-34  Q1
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// document.write(date);


//Assignment#31-34  Q2
// var my_month=new Date()
// var month_name=new Array(12);
// month_name[0]="January"
// month_name[1]="February"
// month_name[2]="March"
// month_name[3]="April"
// month_name[4]="May"
// month_name[5]="June"
// month_name[6]="July"
// month_name[7]="August"
// month_name[8]="September"
// month_name[9]="October"
// month_name[10]="November"
// month_name[11]="December"
// document.write("Current month = " + month_name[my_month.getMonth()]); 


//Assignment#31-34  Q3
// var a = new Date();
//         var weekdays = new Array(7);
//         weekdays[0] = "Sunday";
//         weekdays[1] = "Monday";
//         weekdays[2] = "Tuesday";
//         weekdays[3] = "Wednesday";
//         weekdays[4] = "Thursday";
//         weekdays[5] = "Friday";
//         weekdays[6] = "Saturday";
//         var r = weekdays[a.getDay()];
// document.write(r.substring(0,3));


//Assignment#31-34  Q4
// var a = new Date();
//         var weekdays = new Array(7);
//         weekdays[0] = "Sunday";
//         weekdays[1] = "Monday";
//         weekdays[2] = "Tuesday";
//         weekdays[3] = "Wednesday";
//         weekdays[4] = "Thursday";
//         weekdays[5] = "Friday";
//         weekdays[6] = "Saturday";
//         var r = weekdays[a.getDay()];
//         if(r==weekdays[0]||[6]){
//             document.write("It's a Funday");
//         }
//         else{
//             document.write("Working day");
//         }



//Assignment#31-34  Q4
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// if(today.getDate<=15){
//     document.write("First Fifteen days of the month");
// }
// else{
//     document.write("It's the other half of month");
// }


//Assignment#31-34  Q7
// var hours = new Date().getHours();
// if(hours==0){
// hours=12;
// document.write("It's AM")
// }
// else if(hours>12)
// {
// hours=hours%12;
// document.write("It's PM");
// }


// Assignemt#31-34   Q8
// var d= new Date();
// var laterDate= d.setFullYear(2020, 11, 31);
// document.write("Later Date: " + d);

//Assignment#31-34  Q9
// var d=new Date();
// var preDate = new Date(2020, 4, 24);
// var time = d.getTime() - preDate.getTime(); 
// var res = time / (1000 * 3600 * 24); 
// var round= Math.round(res);
// document.write(round);


// Assignment#31-34  Q11
// var d = new Date();
// // var hours= (d.getHours()-1);
// // var hours = d.setHours(d.getHours() - 1);
// var hours = new Date(d.getTime() - (1000*60*60));
// document.write("Current date: " + d + "<br>");
// // var e = d.setHours(--d);
// // var res = (d - e);
// document.write("1 hour ago it was: " + hours);



// Assignment#31-34 1Q2
// var d = new Date();
// var year = d.getFullYear();
// var month = d.getMonth();
// var day = d.getDate();
// var c = new Date(year - 100, month, day);
// alert("Current date: " + d + "\n" + "100 years back it was " + c)




//  document.write("Electricity Bill "+ "<br>");
//  // Assignment#31-34 Q14(a)
//  var name= "Drushka";
//  document.write("Customer name: " + name + "<br>");
// // Assignment#31-34 Q14(b)
// var month= "June";
// document.write("Month: " + month + "<br>");
// // Assignment#31-34  Q14(c)
// var units= 610;
// document.write("Number of units: " + units + "<br>");
// // Assignment#31-34 Q14(d)
// var charges=19;
// document.write("Charges per unit: " + charges + "<br>" + "<br>");
// // Assignment#31-34 Q14(e)
// var dueDate= units * charges;
// document.write("Net Amount Payable (within Due Date): " + dueDate + "<br>");
// // Assignment#31-34 Q14(f)
// var late= 350
// document.write("Late Payment Surcharge: " + late + "<br>");
// // Assignment#31-34 Q14(f)
// var gross = dueDate + late;
// document.write("Gross Amount Payable (after Due Date): " + gross + "<br>");
    



//Assignmnet#35-38  Q1
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// document.write(date+" " +time);


//Assignment#35-38  Q2
// var a = prompt("First Name Please: ");
// var b = prompt("Last Name Pleaase: ");
// document.write("Welcome "+ a + " "+ b+ " to my site");


//Assignment#35-38  Q3
// var a = prompt("Enter any number:" );
// var b = prompt("Enter any number:" );
// var c = +a + +b
// document.write(c);


//Assignment#35-38  Q4
// var num1 = prompt("Enter First number:");
//     var num2 = prompt("Enter Second number: ");
//     var num3 = prompt("Enter Third number: ");
//     var opera = prompt("Opertion should be performed: ");
//     var a = +num1 + +num2 + +num3, b= num1-num2-num3 , c = num1*num2*num3 , d = num1/num2/num3
//      if( opera== "+"){
//        document.write(num1 + "+" + num2 +  "+" + num3 + "=" + (a));
//      }
//      if( opera== "-"){
//       document.write(num1 + "-" + num2  + "-" + num3 + "=" + (b));
//     }
//     if( opera== "*"){
//       document.write(num1 + "*" + num2 +  "*" + num3 + "=" + c);
//     }
//     if( opera== "/"){
//       document.write(num1 + "/" + num2 + "/" + num3 + "=" + d);
//     }


//Assignment#35-38  Q5
// var a = 3;
// document.write("Number: "+a+ "<br>");
// var b = a*a;
// document.write("Square: "+b);


//Assignment#35-38  Q6
// var n= 4;
// var a =  n * (n - 1) * (n - 2) * (n-3)*1;
// document.write("Factorial of "+n+ " is "+ a);



//Assihnment#35-38  Q8

//var base = +prompt("Enter base of a triangle");
// var perpendicular = +prompt("Enter perpendicular of a triangle");
// var h=0;
// function calculateHypotenuse(h) {
//     function calculateSquare(base, perpendicular) {
//     var a = Math.pow(base, 2);
//     var b = Math.pow(perpendicular, 2);
//      return a + b;
//     }
//        return (h= Math.sqrt(calculateSquare(base, perpendicular)));
//     }
//     document.write(calculateHypotenuse(h));




//Assignment#35-38  Q9
// a= 3;
// b = 4 ;
// var width = a;
// var height = b;
// var c = width*height;
// document.write("Area of triangle: "+ c);


//assignment#35-38  Q10
//var word= prompt("Enter your word") , check= "";
// for(var i= word.length - 1; i>=0; i--) {
// check += word[i]
// }
// if(check === word) {
//     alert(word + " is palindrome word")
// }
// else {
//     alert(word + " is not a palindrome word")
// }


//Assignment#35-38  Q11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write("Exampe: the quick brown fox"+ "<br>");
// document.write(uppercase("the quick brown fox"));



//Assignment#35-38  Q12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));



//Assignment#35-38  Q13
// string = 'JSResources.com';
// function myFunction(string, letter){
//     return string.split(letter).length - 1;
// }
// document.write("EXAMPLE STRING: " + string + "<br>");
// document.write("OUTPUT: " + (myFunction(string, 'o')));


//Assignment#35-38  Q14
// function calcCircumference(){
//     var radius =2.5;
//     document.write("The circumference of the circle is " + (2 * radius * Math.PI) +"<br>" );
   
// }
// calcCircumference();
// function calArea(){
//     var radius= 2.5;
//     document.write("The area of the circle is " + (radius * radius * Math.PI) );
// }
// calArea();






   
    







  