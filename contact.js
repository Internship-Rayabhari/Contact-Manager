function printError(elementId, hintMsg) {
    document.getElementById(elementId).innerHTML = hintMsg;
}

function validation()
{

    var name, email, pwd, cpwd;
    var boolNameErr = boolEmailErr = boolPassErr = boolCPassErr = boolMobileErr = true;

    fname = document.getElementById("FNAME").value;
    lname = document.getElementById("LNAME").value;
    email = document.getElementById("EMAIL").value;
    pwd = document.getElementById("PWD").value;
    cpwd = document.getElementById("CPWD").value;


    // Validate name
    if (fname == "") 
    {
        //document.getElementById("nameErr").innerHTML="jnjk";
        printError("nameErrID", "* Please enter your full name");
      
    }
    else if(lname == "")
    {
        printError("nameErrID", "* Please enter your full name");
         
    }
    else
    { printError("nameErrID","")
        boolNameErr=false;
    }
   
    
    // Regular expression for basic email validation
    var emailRegex = /^\S+@\S+\.\S+$/;

    if (email == "") 
    {
        printError("emailErrID", "* Please enter your email address");
    }
    else 
    {

        if (emailRegex.test(email) == false) 
        {
            printError("emailErrID", "* Please enter a valid email address");
        }
        else 
        {
            printError("emailErrID", "");
            boolEmailErr = false;
        }
    }

    if (pwd == "") 
    {
        printError("phoneErrID", "* Please enter your phone");
    }
   

    if (cpwd == "") 
    {
        printError("cpErrID","* Please enter your address");
    }
    else 
    {
        printError("cpErrID", "");
        boolCPpassErr = false;
    }


    //if (pwd != cpwd) 
    //{
      //  printError("cpErrID", "* Passwords do not match");
    //}
    



    // Prevent the form from being submitted if there are any errors
    if ((boolNameErr || boolEmailErr || boolPassErr || boolCPassErr || boolMobileErr) == false) 
    {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" ;
            // Display input data in a dialog box before submitting the form
            alert(dataPreview);
    }

}
