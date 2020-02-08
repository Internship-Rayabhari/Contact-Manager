function printError(elementId, hintMsg)
{
  document.getElementById(elementId).innerHTML = hintMsg ;
}

function loginValidate()
{   
    var boolEmailErr=boolPassErr=true;

  var email=document.getElementById("EMAIL").value;
  var pass=document.getElementById("PASS").value;

  if(email=="")
  {
      //alert("Name must be filled out");
      printError("emailErrID","*Enter your Email ID");
      //return false;
  }
  else
  { 
    var emailRegex=/^\S+@\S+\.\S+$/;
    if(emailRegex.test(email)==false)
    {
        printError("emailErrID","*Enter a valid email ID")
    }
    else
    {
        printError("emailErrID","");
        boolEmailErr=false;
    }
  }

  if(pass=="")
  {
      printError("passErrID","*Enter your password");
      //return false;
  }
  else
  { 

    printError("passErrID","");
    boolPassErr=false;
  }

  if(boolEmailErr==true||boolPassErr==true)
  {
      loginValidate();
    
  }
  else
  {
    window.location.href = "Contact_Manager_Main.html";

  }
}

function printOnNewWebPage()
{
    document.getElementById("print").innerHTML=email;
}

function openRegistrationPage()
{
  window.location.href="Registration Page.htm";
}