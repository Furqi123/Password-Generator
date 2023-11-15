var data = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
var generatePass = "";
var p = document.getElementById("setPass")
function generate(){
    for(var i =0;i<10;i++){
 var get =  Math.floor(Math.random()*data.length)
     generatePass += data[get]
    }
    p.innerHTML = generatePass
   generatePass = ""
}

var text = p.innerHTML



function copyText() {
    // get the container
    var element = p;
    // Create a fake `textarea` and set the contents to the text
    // you want to copy
    var storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);
  
    // Copy the text in the fake `textarea` and remove the `textarea`
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);
  }



  var validateAlphaSmall = "abcdefghijklmnopqrstuvwxyz"
  var  validateAlphaCapitl  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var  validateNumber = "1234567890"
  var  validateSpecial = "!@#$%^&*"
  
  function validate(){

    var getPass = document.getElementById('getPass').value
    var msg = document.getElementById('show')
    

    if(getPass.search(/[a-z]/) < 0) { 

      msg.innerHTML = "Error: Password must contain at least one lowercase letter";
      msg.style.color = "red"
      
      } else if(getPass.search(/[A-Z]/) < 0) { 
      
        msg.innerHTML ="Error: Password must contain at least one uppercase letter";
        msg.style.color = "red" 
      
      } else if(getPass.search(/[0-9]/) < 0) { 
      
        msg.innerHTML = "Error: Password must contain at least one number";
        msg.style.color = "red" 
   

      }
         
      else if(getPass.search(/[!-*]/) < 0){
        msg.innerHTML = "Error: Password must contain at least one special Character";
        msg.style.color = "red"  
      }
      
      else { 
      
        msg.innerHTML ="Your Password is Strong!"; 
        msg.style.color="green"
      }  


getPass.value = ""

    
  }