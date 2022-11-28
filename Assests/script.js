// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwdCriteria = {
    pwdLength: 0,

    pwdLowercase: [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s","t","u","v","w","x","y","z"],

    pwdUppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],

    pwdsymbols: ["!","@","#","$","%","^","&","*","(",")"],

    pwdNumber: ["0","1","2","3","4","5","6","7","8","9"]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// console.log("writePassword");

function generatePassword(){
    var lowercase;
    var uppercase;
    var symbols;
    var number;
    var result = "";
    var passwordlength = 0;

    passwordlength = 0;
    result = "" ;
    
    pwdCriteria.pwdLength = 0;

    while(passwordlength < 8 || passwordLength > 128 ){
        passwordlength = prompt ("Please select a number between 8 and 128!");

        if(passwordlength ===null){
            return "Faliure to launch";  
        }
        else {
            if(isFinite(passwordlength)){
                alert("Please Select a number");
                return "Failure to launch";
            }
            else{
                if (passwordlength < 8 || passwordlength > 128){
                    alert ("Create a password between 8-128 characters");
                    return "Failure to launch";
                }
                else{
                    promptwindow();
                }
            }
        }
    }

}