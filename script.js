//Import DOM elements
var inputNumber=document.getElementById("broj");
var dugme=document.getElementById("dugme");
var success=document.getElementById("success")
var sum=document.getElementById("suma");
const matrix = document.getElementById("matrica");
const error=document.getElementById("error");


document.write("Ponuđeni brojevi:  <br>"); 

//when you click the button take the value
 dugme.addEventListener("click",takeValue );

 var array = new Array(10); 

 // Loop to create 2D array using 1D array 
for (var i = 0; i < array.length; i++) { 
    array[i] = new Array(10); 
} 

//start 
var h = 1; 
  
// Loop to initilize 2D array elements. 
for (var i = 0; i < 10; i++) { 
    for (var j = 0; j < 10; j++) { 
        array[i][j] = h++; 
           
    } 
} 
  
// Loop to display the elements of 2D array.  
for (var i = 0; i < 10; i++) { 
    for (var j = 0; j < 10; j++)    { 
        document.write(array[i][j] + " "); 
    } 
    document.write("<br>"); 
}  

//Take the value from the input field and check the range
function takeValue(){
    var inputField=document.getElementById("input-number").value;
    
    if(!checkRange(inputField)){
        success.style.display="none";
        error.style.display="block";
        error.innerHTML=("Broj koji ste unijeli nije u opsegu matrice, unesite drugi");

    }
    else{
        inputField=inputField-1;
        var newArray=[];
        var inputToSt=inputField.toString();
         for (var i = 0, len = inputToSt.length; i < len; i += 1) {
          newArray.push(+inputToSt.charAt(i));
         }
    }
    inputNumber.innerHTML=inputField+1;
    saberiSumu(newArray);
}

//Check the range
// when the number is less than 1 or greater than 100 return false
checkRange=(value)=>{
    if(value<1 || value>100){
        return false;
    }
    return true;
}
//Find neighbors
function findNeighbors(myArray, i,j) {
    var rows = myArray.length-1;
    var columns= myArray[0].length-1;
    var sum = myArray[i][j];
    var counter=0;
      for(var x = Math.max(0,i-1); x<=Math.min(i+1,rows); x++){
      for(var y = Math.max(0,j-1); y<=Math.min(j+1,columns); y++){
        if(x!==i || y!==j){ 
            sum+=myArray[x][y];
            
            counter++;
        }
        }
      }
      if( counter === 8){ //if it has 8 neighbors,sum
          return sum;
    }else{ //if doesn't error
        error.style.display = "block"; 
        error.innerHTML=("Broj koji ste unijeli nema 8 susjeda!");        
        }
    }
   saberiSumu = (inputField) =>{
        var i = inputField[0];
        var j = inputField[1];
        var suma = findNeighbors(array,i,j);
        if(suma === undefined){
            success.style.display = "none";
        }else{
            error.style.display= "none"; 
            error.style.display= "block";
            sum.innerHTML = suma;
        }
    }
  

